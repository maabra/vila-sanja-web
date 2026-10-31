"""Create delivery copies without changing the original photographs or colours.

Run from the repository root with Python and Pillow. Originals remain available
for editing; images/optimized/manifest.json records dimensions and variants.
"""
import json
import re
from pathlib import Path
from urllib.parse import unquote
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
sources = set(ROOT.joinpath('images/accom').rglob('*.jpg'))
previous = ROOT / 'images/optimized/manifest.json'
if previous.exists():
    sources.update(ROOT / name for name in json.loads(previous.read_text(encoding='utf-8')))
for page in ROOT.glob('*.html'):
    for source in re.findall(r'(?:src|href)="(images/[^"?]+\.(?:jpg|jpeg|png))"', page.read_text(encoding='utf-8'), re.I):
        sources.add(ROOT / unquote(source))
sources.update(ROOT / name for name in ('images/depo/sideimage.png', 'images/depo/sunset.jpg'))
manifest = {}
before = after = 0
for source in sorted(sources):
    if not source.is_file() or 'optimized' in source.parts:
        continue
    relative = source.relative_to(ROOT)
    target = ROOT / 'images/optimized' / relative.relative_to('images').with_suffix('.webp')
    target.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(source) as original:
        picture = ImageOps.exif_transpose(original)
        width, height = picture.size
        transparent = 'A' in picture.getbands()
        if not transparent:
            picture = picture.convert('RGB')
        options = {'format': 'WEBP', 'method': 6, 'lossless': transparent, 'quality': 85}
        picture.save(target, **options)
        variants = []
        if not transparent and width >= 800 and 'logo' not in source.name:
            for size in (160, 480, 800):
                if size < width:
                    variant = target.with_name(target.stem + f'-{size}.webp')
                    picture.resize((size, round(height * size / width)), Image.Resampling.LANCZOS).save(variant, **options)
                    variants.append([variant.relative_to(ROOT).as_posix(), size])
        variants.append([target.relative_to(ROOT).as_posix(), width])
        manifest[relative.as_posix()] = {'src': target.relative_to(ROOT).as_posix(), 'width': width, 'height': height, 'variants': variants}
        before += source.stat().st_size
        after += target.stat().st_size
(ROOT / 'images/optimized/manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding='utf-8')
print(f'{len(manifest)} delivery images: original {before:,} bytes; WebP {after:,} bytes; {(1-after/before):.0%} smaller', flush=True)
