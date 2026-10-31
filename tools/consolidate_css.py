"""Remove declarations superseded by the same selector in the same CSS scope.

Uses the browser's parser. Only identical property names are consolidated;
shorthands are retained conservatively to preserve variable substitution. Different selectors and media
conditions retain their cascade order. Requires Playwright and Microsoft Edge.
"""
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
path = ROOT / 'styles.css'
source = path.read_text(encoding='utf-8')
with sync_playwright() as pw:
    browser = pw.chromium.launch(channel='msedge', headless=True)
    page = browser.new_page()
    rules = page.evaluate(r'''source => {
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(source.replace(/@import[^;]+;/g,''));
      function read(rules) {return [...rules].map(rule => {
        if (rule.type === CSSRule.STYLE_RULE) {
          const parts = rule.style.cssText.match(/(?:[^;"']|"[^"\n]*"|'[^'\n]*')+/g) || [];
          return {selector:rule.selectorText, declarations:parts.filter(part=>part.includes(':')).map(part=>{
            const colon=part.indexOf(':');
            const name=part.slice(0,colon).trim();
            let value=part.slice(colon+1).trim();
            const priority=/!important$/.test(value)?'important':'';
            value=value.replace(/\s*!important$/,'');
            return {name,value,priority,covers:[name]};
          })};
        }
        if (rule.cssRules && rule.type !== CSSRule.KEYFRAMES_RULE) {
          return {group:rule.cssText.slice(0,rule.cssText.indexOf('{')).trim(), children:read(rule.cssRules)};
        }
        return {raw:rule.cssText};
      });}
      return read(sheet.cssRules);
    }''', source)
    browser.close()

seen = {}
removed = 0


def clean(nodes, scope=()):
    global removed
    for node in reversed(nodes):
        if 'children' in node:
            clean(node['children'], scope + (node['group'],))
        elif 'selector' in node:
            retained = []
            for declaration in reversed(node['declarations']):
                priority = int(declaration['priority'] == 'important')
                keys = [(scope, node['selector'], declaration['name'])]
                if all(seen.get(key, -1) >= priority for key in keys):
                    removed += 1
                else:
                    retained.append(declaration)
                for key in keys:
                    seen[key] = max(seen.get(key, -1), priority)
            node['declarations'] = list(reversed(retained))


def render(nodes, indent=''):
    output = []
    for node in nodes:
        if 'raw' in node:
            output.append(indent + node['raw'])
        elif 'children' in node:
            nested = render(node['children'], indent + '    ')
            if nested:
                output.append(indent + node['group'] + ' {\n' + nested + '\n' + indent + '}')
        elif node['declarations']:
            output.append(indent + node['selector'] + ' {')
            for item in node['declarations']:
                output.append(indent + '    ' + item['name'] + ': ' + item['value'] + (' !important' if item['priority'] else '') + ';')
            output.append(indent + '}')
    return '\n'.join(output)


clean(rules)
path.write_text("@import url('fonts/fontawesome/css/all.min.css');\n\n/* Shared site styles: palette, components, layout and responsive behaviour. */\n" + '\n'.join(line.rstrip() for line in render(rules).splitlines()) + '\n', encoding='utf-8')
print(f'Removed {removed} superseded declarations; retained media conditions and cascade order.')
