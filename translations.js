/* ── Vila Sanja - Language Translations (EN / HR / DE) ── */
const LANG_DATA = {

  en: {
    /* NAV */
    'nav.home':        'Home',
    'nav.accom':       'Accommodations',
    'nav.duplex':      'Duplex Apartment',
    'nav.apartment':   'Apartment',
    'nav.room':        'Room',
    'nav.reviews':     'Reviews',
    'nav.about':       'About Us',
    'nav.rules':       'Rules',
    'nav.contact':     'Contact Us',
    'nav.booknow':     'Book Now!',

    /* INDEX - hero */
    'idx.hero.title':  'Vila Sanja - Your oasis of calm on the Adriatic',
    'idx.hero.sub':    'Your oasis of calm on the Adriatic',
    'idx.hero.desc':   'Comfortable apartments and room in Premantura, Istria. Air conditioning, private balconies, free WiFi and parking. Just minutes from the sea and Cape Kamenjak.',
    'idx.hero.cta':    'Book your holiday',
    'idx.hero.scroll': 'Scroll down',

    /* INDEX - about snippet */
    'idx.about.title': 'Welcome to Vila Sanja',
    'idx.about.p1':    'Vila Sanja is a family villa in Premantura, just 300 m from the village center and close to the sea. We offer a duplex apartment for 6, an apartment for 4, and a cozy room for 2 - all with private balconies, air conditioning, and free WiFi.',
    'idx.about.p2':    'The villa is surrounded by greenery with a peaceful courtyard and private parking. Enjoy the Mediterranean atmosphere and the best Istria has to offer!',
    'idx.about.btn':   'Learn more about us',

    /* INDEX - feature cards */
    'idx.feat.title':      'Why choose Vila Sanja?',
    'idx.feat.sub':        'Everything you need for a perfect Istrian holiday',
    'idx.card.villa.title':'The Villa',
    'idx.card.villa.desc': 'Modern apartments surrounded by greenery, with private parking and a relaxing courtyard.',
    'idx.card.beach.title':'Beaches Nearby',
    'idx.card.beach.desc': 'Just steps from the Adriatic Sea and the entrance to Cape Kamenjak Nature Park.',
    'idx.card.rooms.title':'Rooms & Apartments',
    'idx.card.rooms.desc': 'Comfortable, air-conditioned units for families, couples, and solo travellers.',
    'idx.card.rooms.btn':  'View all',
    'idx.card.rev.title':  'Guests Love Us',
    'idx.card.rev.desc':   '100+ happy guests and an overall rating of 4.5/5. Our visitors keep coming back - read what they have to say!',
    'idx.card.rev.btn':    'Read reviews',

    'idx.card.villa.btn':  'Learn more',
    'idx.card.beach.btn':  'Explore beaches',

    'idx.card.host.title': 'Meet Your Hosts',
    'idx.card.host.desc':  'Sanja and Matej welcome you personally, speak German and English, and are always close by to help.',
    'idx.card.host.btn':   'About us',

    'idx.card.home.title': 'A Vila, Not a Hotel',
    'idx.card.home.desc':  'Shaded courtyard, garden views, quiet Istrian evenings. A real family property where you can slow down, breathe, and truly arrive.',

    /* INDEX - stats */
    'idx.stat.types':   'Accommodation types',
    'idx.stat.guests':  'Happy guests',
    'idx.stat.dist':    'From village center',
    'idx.stat.rating':  'Guest rating',

    /* INDEX - reviews section */
    'idx.rev.title':    'What Our Guests Say',
    'idx.rev.sub':      'Trusted by travellers from around the world',
    'idx.rev.btn':      'Read all reviews',

    /* INDEX - info cards */
    'idx.info.loc.title':  'Location',
    'idx.info.loc.addr':   'Selo Varoš 70 D, 52100 Premantura, Croatia',
    'idx.info.loc.link':   'View map →',
    'idx.info.rules.title':'House Rules',
    'idx.info.rules.desc': 'Simple guidelines for a pleasant stay for everyone.',
    'idx.info.rules.link': 'Read rules →',
    'idx.info.rev.title':  'Reviews',
    'idx.info.rev.desc':   'Hundreds of positive reviews from happy travellers.',
    'idx.info.rev.link':   'View reviews →',
    'idx.info.ct.title':   'Contact Us',
    'idx.info.ct.desc':    'Have a question or special request? Let us know!',
    'idx.info.ct.link':    'Get in touch →',

    /* INDEX - host */
    'idx.host.title':  'Meet your hosts',
    'idx.host.p1':     'We are here for you - welcome to our villa! We strive to keep our prices reasonable and make every guest feel at home. You have access to the courtyard, garden, and parking. Peaceful surroundings, everything you need is nearby.',
    'idx.host.langs':  'Staff speaks: German, English',

    /* ABOUT page */
    'abt.hero':        'About Vila Sanja',
    'abt.host.title':  'Hosts: Sanja Volner & Matej Abramović',
    'abt.host.intro':  'We are a mother and son who take care of the house together.',
    'abt.host.p1':     'Vila Sanja is in a very good location, very close to the center and not far from the sea. The entrance to Cape Kamenjak is also nearby. We have a duplex apartment for 6 people, an apartment for 4 people, and a room with a bathroom and balcony. We are dedicated to making guests feel comfortable and are always available.',
    'abt.host.p2':     'The entire villa is surrounded by greenery, and parking spaces are available in the villa\'s courtyard. We try to keep our prices reasonable. Peaceful surroundings - you can sleep well here, and everything you need is nearby. Welcome!',
    'abt.host.p3':     'We live on the property, which means we\'re always here. Need a local recommendation or any kind of help, we\'re right here.',
    'abt.host.langs':  'Staff speaks: German, English',
    'abt.chip.green':  'Green & Quiet',
    'abt.chip.onsite': 'Always On-site',
    'abt.chip.wifi':   'Free WiFi',
    'abt.chip.park':   'Private Parking',
    'abt.chip.pet':    'Pet Friendly',
    'abt.chip.ac':     'Air Conditioning',
    'abt.chip.fam':    'Family Friendly',
    'abt.love.title':  'Why guests love Vila Sanja',
    'abt.love.1':      'Excellent location - close to the center and sea',
    'abt.love.2':      'Private balconies, air conditioning, free WiFi',
    'abt.love.3':      'Peaceful, green surroundings',
    'abt.love.4':      'Free private parking in the courtyard',
    'abt.love.5':      'Family-friendly and pet-friendly',
    'abt.love.6':      'Hosts always available to help',
    'abt.love.langs':  'Languages spoken',
    'abt.surr.title':  'Surroundings of the Property',
    'abt.tbl.nearby':  'What\'s Nearby',
    'abt.tbl.rest':    'Restaurants & Cafés',
    'abt.tbl.beach':   'Nearby Beaches',
    'abt.tbl.attr':    'Popular Attractions',
    'abt.tbl.trans':   'Public Transport',
    'abt.tbl.air':     'Nearest Airports',
    'abt.tbl.note':    'Shortest estimated distances on foot or by vehicle; actual distances may differ.',
    'abt.fac.title':   'Facilities at Vila Sanja',
    'abt.fac.rating':  'Excellent facilities. Guest rating: 4.5/5',
    'abt.fac.pop':     'Most popular:',
    'abt.fac.t1':  'Great for your stay', 'abt.fac.t2':  'Bathroom',     'abt.fac.t3':  'Bedroom',
    'abt.fac.t4':  'View',               'abt.fac.t5':  'Yard',          'abt.fac.t6':  'Kitchen',
    'abt.fac.t7':  'Internet',           'abt.fac.t8':  'Parking',       'abt.fac.t9':  'Services',
    'abt.fac.t10': 'Media & Technology', 'abt.fac.t11': 'Pets',          'abt.fac.t12': 'General',
    'abt.fac.t13': 'Safety & Security',  'abt.fac.t14': 'Languages spoken',

    'abt.pop.wifi':'✓ Free WiFi', 'abt.pop.fam':'✓ Family rooms', 'abt.pop.nosmo':'✓ Non-smoking rooms',
    'abt.f1.l1':'Free parking',        'abt.f1.l2':'Private bathroom',      'abt.f1.l3':'Air conditioning',
    'abt.f1.l4':'Pets allowed',        'abt.f1.l5':'Balcony / terrace',     'abt.f1.l6':'Family rooms',       'abt.f1.l7':'Flat-screen TV',
    'abt.f2.l1':'Toilet paper, towels','abt.f2.l2':'Bath or shower',        'abt.f2.l3':'Private bathroom & WC','abt.f2.l4':'Hairdryer',
    'abt.f3.l1':'Linen',               'abt.f3.l2':'Wardrobe or closet',
    'abt.f4.l1':'Inner courtyard view','abt.f4.l2':'City view',             'abt.f4.l3':'Garden view',
    'abt.f5.l1':'Outdoor fireplace',   'abt.f5.l2':'Outdoor dining area',   'abt.f5.l3':'Outdoor furniture',
    'abt.f5.l4':'Sun terrace',         'abt.f5.l5':'Balcony, terrace, garden',
    'abt.f6.l1':'Dining table',        'abt.f6.l2':'Kitchenware',           'abt.f6.l3':'Kettle',             'abt.f6.l4':'Fridge',
    'abt.f7.l1':'Free WiFi in all units',
    'abt.f8.l1':'Free private parking on site',
    'abt.f9.l1':'Private check-in/out','abt.f9.l2':'Express check-in/out',
    'abt.f10.l1':'Flat-screen TV',     'abt.f10.l2':'Cable channels',
    'abt.f11.l1':'Pets welcome (charges may apply)',
    'abt.f12.l1':'Air conditioning',   'abt.f12.l2':'Tiled floor',          'abt.f12.l3':'Heating',
    'abt.f12.l4':'Private entrance',   'abt.f12.l5':'Non-smoking rooms',    'abt.f12.l6':'Iron',
    'abt.f13.l1':'Fire extinguishers', 'abt.f13.l2':'Key access',
    'abt.f14.l1':'German',             'abt.f14.l2':'English',

    /* ACCOMMODATIONS page */
    'acc.hero':       'Accommodations',
    'acc.title':      'Choose your perfect stay',
    'acc.sub':        'All accommodations come with air conditioning, flat-screen TV, WiFi, private bathroom and balcony. Apartments include a full kitchen.',
    'acc.duplex.cap': '4 + 2 people | Two floors',
    'acc.duplex.desc':'Spacious duplex apartment spread over two floors, perfect for larger families or groups. Full kitchen, two balconies, and generous living space.',
    'acc.apt.cap':    '2 + 2 people',
    'acc.apt.desc':   'Comfortable apartment with a full kitchen, private bathroom and a sunny balcony - ideal for couples or small families.',
    'acc.room.cap':   '2 people',
    'acc.room.desc':  'Cozy, freshly renovated room with a private bathroom and a balcony. Includes a mini-fridge, kettle and all essential amenities.',
    'acc.btn':        'View details',
    'acc.incl.title':  'Included in all units',
    'acc.incl.sub':    'Everything you need for a comfortable stay',
    'accom.chip.ac':   'Air Conditioning',
    'accom.chip.wifi': 'Free WiFi',
    'accom.chip.tv':   'Flat-Screen TV',
    'accom.chip.bath': 'Private Bathroom',
    'accom.chip.balc': 'Private Balcony',
    'accom.chip.park': 'Free Parking',
    'accom.chip.pet':  'Pets Allowed',
    'accom.chip.heat': 'Heating',

    /* DUPLEX page */
    'dpl.hero':   'Duplex Apartment',
    'dpl.h2':     'Spacious Two-Floor Apartment',
    'dpl.desc':   'Our largest accommodation, the Duplex Apartment spans two floors and is perfect for families or groups of up to 6. Enjoy a full kitchen, generous living space, and two private balconies with views of the Istrian countryside.',
    'dpl.gal':    'Gallery',
    'dpl.btn':    'Book this apartment',
    'dpl.l1': 'Up to 4 + 2 people',       'dpl.l2': 'Two floors, spacious layout',
    'dpl.l3': 'Full kitchen with dining area','dpl.l4': 'Two private balconies',
    'dpl.l5': 'Air conditioning & heating', 'dpl.l6': 'Private bathroom with hairdryer',
    'dpl.l7': 'Flat-screen TV, WiFi',       'dpl.l8': 'Wardrobe, linen provided',
    'dpl.l9': 'Free private parking',       'dpl.l10': 'Pets welcome (charges may apply)',

    /* DUPLEX - Detailed section */
    'dpl.dtl.h2':      'Apartment Details',
    'dpl.dtl.desc':    'Boasting a private entrance, this air-conditioned 73 m² duplex apartment features 2 separate bedrooms, a living room, and 2 bathrooms with shower and hairdryer. The fully equipped kitchen has a stovetop, oven, refrigerator, kettle, coffee/tea maker and kitchenware. A terrace with sea views, flat-screen TV with cable and satellite channels, and free WiFi complete the space. The unit sleeps up to 6.',
    'dpl.dtl.sleep':   'Sleeping Arrangements',
    'dpl.dtl.room1':   'Bedroom 1',        'dpl.dtl.bed1': '1 large double bed',
    'dpl.dtl.room2':   'Bedroom 2',        'dpl.dtl.bed2': '2 single beds',
    'dpl.dtl.room3':   'Living Room',      'dpl.dtl.bed3': '1 sofa bed',
    'dpl.dtl.kitch.h': 'Kitchen',
    'dpl.dtl.k1': 'Refrigerator',          'dpl.dtl.k2': 'Stovetop & oven',
    'dpl.dtl.k3': 'Kettle & coffee maker', 'dpl.dtl.k4': 'Kitchenware',
    'dpl.dtl.k5': 'Kitchen table & dining','dpl.dtl.k6': 'Cleaning supplies',
    'dpl.dtl.bath.h':  'Bathrooms (×2)',
    'dpl.dtl.b1': 'Shower',                'dpl.dtl.b2': 'Hairdryer',
    'dpl.dtl.b3': 'Towels',                'dpl.dtl.b4': 'Toilet paper',
    'dpl.dtl.b5': 'Extra WC',
    'dpl.dtl.view.h':  'Views',
    'dpl.dtl.v1': 'Sea view',              'dpl.dtl.v2': 'Garden view',
    'dpl.dtl.v3': 'City view',             'dpl.dtl.v4': 'Landmark view',
    'dpl.dtl.v5': 'Courtyard view',
    'dpl.dtl.amen.h':  'Amenities',
    'dpl.dtl.a1':  'Balcony & terrace',               'dpl.dtl.a2':  'Air conditioning & heating',
    'dpl.dtl.a3':  'Flat-screen TV (cable & satellite)','dpl.dtl.a4':  'Private entrance',
    'dpl.dtl.a5':  'Iron & ironing board',            'dpl.dtl.a6':  'Coffee/tea maker',
    'dpl.dtl.a7':  'Radio',                           'dpl.dtl.a8':  'Outdoor furniture & dining',
    'dpl.dtl.a9':  'Paved courtyard',                 'dpl.dtl.a10': 'Wardrobe',
    'dpl.dtl.a11': 'Sofa bed (pull-out)',              'dpl.dtl.a12': 'Drying rack & clothes stand',
    'dpl.dtl.a13': 'Seating area & dining area',      'dpl.dtl.a14': 'Separate building - upper floor (stairs only)',
    'dpl.dtl.a15': 'Hand sanitizer',

    /* ONE-BEDROOM page */
    'apt.hero':   'One-Bedroom Apartment',
    'apt.h2':     'Comfortable & Well-Equipped',
    'apt.desc':   'This bright apartment is ideal for couples or a small family of up to four. It features a full kitchen, a private balcony, and all the comforts you need for a relaxing holiday in Premantura, Istria.',
    'apt.gal':    'Gallery',
    'apt.btn':    'Book this apartment',
    'apt.l1': 'Up to 2 + 2 people',         'apt.l2': 'Full kitchen with dining area',
    'apt.l3': 'Private balcony',             'apt.l4': 'Air conditioning & heating',
    'apt.l5': 'Private bathroom with hairdryer','apt.l6': 'Flat-screen TV, free WiFi',
    'apt.l7': 'Fridge, kettle, kitchenware', 'apt.l8': 'Wardrobe, linen provided',
    'apt.l9': 'Free private parking',        'apt.l10': 'Pets welcome (charges may apply)',

    /* ONE-BEDROOM - Detailed section */
    'apt.dtl.h2':      'Apartment Details',
    'apt.dtl.desc':    'Boasting a private entrance, this air-conditioned 35 m² apartment features a separate bedroom, living room and bathroom with shower and hairdryer. The fully equipped kitchen includes a stovetop, oven, refrigerator, kettle and kitchenware. A terrace with sea and garden views, flat-screen TV with cable and satellite channels, and free WiFi complete the space.',
    'apt.dtl.sleep':   'Sleeping Arrangements',
    'apt.dtl.room1':   'Bedroom',         'apt.dtl.bed1': '1 large double bed',
    'apt.dtl.room2':   'Living Room',     'apt.dtl.bed2': '1 sofa bed',
    'apt.dtl.kitch.h': 'Kitchen',
    'apt.dtl.k1': 'Refrigerator',         'apt.dtl.k2': 'Stovetop & oven',
    'apt.dtl.k3': 'Kettle',               'apt.dtl.k4': 'Kitchenware',
    'apt.dtl.k5': 'Kitchen table',        'apt.dtl.k6': 'Cleaning supplies',
    'apt.dtl.bath.h':  'Bathroom',
    'apt.dtl.b1': 'Shower',               'apt.dtl.b2': 'Hairdryer',
    'apt.dtl.b3': 'Towels',               'apt.dtl.b4': 'Toilet paper',
    'apt.dtl.view.h':  'Views',
    'apt.dtl.v1': 'Sea view',             'apt.dtl.v2': 'Garden view',
    'apt.dtl.v3': 'City view',            'apt.dtl.v4': 'Landmark view',
    'apt.dtl.v5': 'Courtyard view',
    'apt.dtl.amen.h':  'Amenities',
    'apt.dtl.a1':  'Balcony & terrace',               'apt.dtl.a2':  'Air conditioning & heating',
    'apt.dtl.a3':  'Flat-screen TV (cable & satellite)','apt.dtl.a4':  'Private entrance',
    'apt.dtl.a5':  'Iron & ironing board',            'apt.dtl.a6':  'Outdoor furniture & dining',
    'apt.dtl.a7':  'Paved courtyard',                 'apt.dtl.a8':  'Wardrobe',
    'apt.dtl.a9':  'Sofa bed (pull-out)',              'apt.dtl.a10': 'Drying rack',
    'apt.dtl.a11': 'Seating area',                    'apt.dtl.a12': 'Separate building',
    'apt.dtl.a13': 'Upper floor - stairs only',       'apt.dtl.a14': 'Smoking allowed',

    /* ROOM page */
    'rm.hero':   'Double Room with Balcony',
    'rm.h2':     'Cosy Room in the Heart of Premantura',
    'rm.desc':   'Enjoy your stay in our freshly renovated room. Experience local life, unwind on your private balcony, and enjoy modern amenities in a peaceful setting close to beaches, shops, and cafés.',
    'rm.gal':    'Gallery',
    'rm.btn':    'Book this room',
    'rm.l1': '15 m², 2-person room',         'rm.l2': 'Private balcony',
    'rm.l3': 'Private bathroom with shower', 'rm.l4': 'Hairdryer & towels provided',
    'rm.l5': 'Air conditioning & heating',   'rm.l6': 'Flat-screen TV, free WiFi',
    'rm.l7': 'Fridge & electric kettle',     'rm.l8': 'Wardrobe, linen provided',
    'rm.l9': 'Private entrance',             'rm.l10': 'Free parking',

    /* ROOM - Detailed section */
    'rm.dtl.h2':      'Room Details',
    'rm.dtl.desc':    'This air-conditioned double room of 15 m² features a private bathroom with shower and hairdryer, and a terrace with garden views. The room has a flat-screen TV with cable channels, a private entrance, a refrigerator, kettle, kitchenware and free WiFi.',
    'rm.dtl.sleep':   'Sleeping Arrangement',
    'rm.dtl.room1':   'Double Room',       'rm.dtl.bed1': '1 large double bed',
    'rm.dtl.bath.h':  'Bathroom',
    'rm.dtl.b1': 'Shower',                 'rm.dtl.b2': 'Hairdryer',
    'rm.dtl.b3': 'Towels',                 'rm.dtl.b4': 'Toilet paper',
    'rm.dtl.view.h':  'Views',
    'rm.dtl.v1': 'Garden view',            'rm.dtl.v2': 'City view',
    'rm.dtl.v3': 'Landmark view',          'rm.dtl.v4': 'Courtyard view',
    'rm.dtl.amen.h':  'Amenities',
    'rm.dtl.a1':  'Balcony & terrace',               'rm.dtl.a2':  'Air conditioning & heating',
    'rm.dtl.a3':  'Flat-screen TV (cable)',           'rm.dtl.a4':  'Private entrance',
    'rm.dtl.a5':  'Iron',                            'rm.dtl.a6':  'Outdoor furniture & dining',
    'rm.dtl.a7':  'Paved courtyard',                 'rm.dtl.a8':  'Wardrobe',
    'rm.dtl.a9':  'Refrigerator',                    'rm.dtl.a10': 'Kettle & kitchenware',
    'rm.dtl.a11': 'Drying rack & clothes stand',     'rm.dtl.a12': 'Seating area',
    'rm.dtl.a13': 'Tiled/marble floor',              'rm.dtl.a14': 'Linen provided',
    'rm.dtl.a15': 'Outlet near bed',                 'rm.dtl.a16': 'Separate building - upper floor (stairs only)',
    'rm.dtl.a17': 'Hand sanitizer',

    /* REVIEWS page */
    'rev.hero':       'Guest Reviews',
    'rev.stat1':      'Happy guests',
    'rev.stat2':      'Overall rating',
    'rev.stat3':      'Location score',
    'rev.stat4':      'Cleanliness',
    'rev.title':      'What our guests say',
    'rev.sub':        'Real reviews from real travellers - we love hearing from you!',
    'rev.cta.title':  'Ready to make your own memories?',
    'rev.cta.sub':    'Join hundreds of happy guests who chose Vila Sanja for their Istrian holiday.',
    'rev.cta.btn':    'Book your stay',

    /* CONTACT page */
    'ct.hero':        'Contact Us',
    'ct.title':       'Get in touch',
    'ct.sub':         'We\'d love to hear from you. Reach out any time!',
    'ct.block1':      'Vila Sanja',
    'ct.owners':      'Owners:',
    'ct.block2':      'Location',
    'ct.block3':      'Why stay with us?',
    'ct.why1':        'Family atmosphere and personal approach to every guest',
    'ct.why2':        'Peaceful location, close to beaches and Cape Kamenjak Nature Park',
    'ct.why3':        'Free private parking and WiFi',
    'ct.why4':        'Terrace and outdoor area to relax',
    'ct.why5':        'Ideal for families, couples, and nature lovers',
    'ct.why6':        'Hosts speak German and English',
    'ct.why.p':       'Contact us today and book your holiday in Premantura!',
    'ct.book.btn':    'Book your stay',

    /* RULES page */
    'rl.hero':        'House Rules',
    'rl.title':       'House Rules & Information',
    'rl.checkin.h':   'Check-in & Check-out Times',
    'rl.checkin.p1':  'Check-in:',
    'rl.checkin.p2':  'Check-out:',
    'rl.checkin.note1':'A mandatory checkout inspection with property management is required before departure. Please coordinate your checkout time in advance.',
    'rl.checkin.note2':'Guests must present a valid photo ID upon check-in. Please inform Vila Sanja in advance of your expected arrival time.',
    'rl.children.h':  'Children & Beds',
    'rl.children.p1': 'Children of all ages are welcome.',
    'rl.children.p2': 'To see correct prices and occupancy information, please add the number and ages of children in your group to your search.',
    'rl.children.h4': 'Crib and extra bed policy',
    'rl.children.l1': 'Ages 0-5: Baby cot available upon request (free of charge)',
    'rl.children.l2': 'No extra beds available',
    'rl.children.l3': 'All cribs are subject to availability',
    'rl.age.h':       'Age Restriction',
    'rl.age.p':       'Minimum check-in age is 18 years.',
    'rl.pets.h':      'Pets',
    'rl.pets.p':      'Pets are allowed. Additional charges may apply - please contact us in advance.',
    'rl.pay.h':       'Payment Information',
    'rl.pay.p':       'Payment is arranged directly with your hosts. Please ensure you have cash available for any additional charges upon arrival.',
    'rl.quiet.h':     'Quiet Hours & Parties',
    'rl.quiet.p1':    'Quiet hours:',
    'rl.quiet.p2':    'Parties and events are not permitted.',
    'rl.safety.h':    'Health & Safety',
    'rl.safety.l1':   'Enhanced cleaning and safety measures are in place',
    'rl.safety.l2':   'Physical distancing measures apply',
    'rl.safety.l3':   'Please ensure your booking complies with local guidelines',
    'rl.safety.l4':   'This property cannot be used for quarantine purposes',
    'rl.faq.title':   'Frequently Asked Questions',
    'rl.faq.q1':      'What accommodation types are available at Vila Sanja?',
    'rl.faq.a1':      'Vila Sanja offers three options: Duplex Apartment (up to 4+2), One-Bedroom Apartment (up to 2+2), Double Room with Balcony (2 people).',
    'rl.faq.q2':      'How far is Vila Sanja from Premantura center?',
    'rl.faq.a2':      'Vila Sanja is located approximately 200-300 meters from the Premantura village center.',
    'rl.faq.q3':      'How far is the nearest beach?',
    'rl.faq.a3':      'The nearest beach is approximately 600-900 meters from Vila Sanja. Cape Kamenjak Nature Park entrance is also nearby.',
    'rl.faq.q4':      'What are the prices at Vila Sanja?',
    'rl.faq.a4':      'Prices vary depending on your stay dates, accommodation type, and group size. Check current availability and prices on Booking.com.',
    'rl.faq.q5':      'Is parking available?',
    'rl.faq.a5':      'Yes, free private parking is available on site in the villa\'s courtyard.',

    /* NAV - Near Us */
    'nav.nearus':   'Near Us',
    'nav.beaches':  'Rt Kamenjak',
    'nav.attr':     'Local Attractions',
    'nav.towns':    'Nearby Towns',

    /* PREMANTURA hub page */
    'prem.hero':               'Premantura & Surroundings',
    'prem.intro.p1':           'Premantura is a small, charming fishing village at the very tip of the Istrian peninsula, surrounded by the crystal-clear waters of the Adriatic. It is home to Cape Kamenjak, one of the most beautiful protected nature parks in Croatia, and offers an unhurried Mediterranean lifestyle far from the crowds.',
    'prem.intro.p2':           'Explore what makes Premantura and its surroundings so special:',
    'prem.card.beach.title':   'Beaches at Cape Kamenjak',
    'prem.card.beach.desc':    'Over 30 hidden coves, crystal-clear water, cliff jumping, water sports, and the legendary Safari Bar. Everything you need for a perfect beach day.',
    'prem.card.beach.btn':     'Explore beaches →',
    'prem.card.attr.title':    'Local Attractions',
    'prem.card.attr.desc':     'Ancient ruins, medieval fortresses, dinosaur trails, aqua parks and more, Premantura and the Pula riviera are packed with things to see and do.',
    'prem.card.attr.btn':      'See attractions →',
    'prem.card.towns.title':   'Nearby Towns',
    'prem.card.towns.desc':    'From the Roman splendor of Pula to the hilltop magic of Rovinj and Motovun, discover the best of Istria within easy driving distance.',
    'prem.card.towns.btn':     'Discover towns →',
    'prem.stat1':              'Hidden coves',
    'prem.stat2':              'Cape Kamenjak length',
    'prem.stat3':              'From Pula airport',
    'prem.stat4':              'Orchid species in park',
    'prem.about.title':        'About the Village',
    'prem.about.p1':           'Premantura sits at the southernmost point of Istria, just 14 km from Pula International Airport. The village has a population of around 400 and retains the quiet, authentic atmosphere of a traditional Croatian coastal settlement, cobblestone lanes, fishing boats, and fresh seafood.',
    'prem.about.p2':           'The gateway to Cape Kamenjak Nature Park is just a short drive or cycle ride away, making Premantura the ideal base for nature lovers, beach-goers, and those who want to explore Istria at their own pace.',
    'prem.about.p3':           'Vila Sanja is located right in the village center, perfectly placed for all of this and more.',
    'prem.chk1':               'Supermarket, bakery & pharmacy in village',
    'prem.chk2':               'Restaurants and cafés along the seafront',
    'prem.chk3':               'Pula city centre ~20 min by car',
    'prem.chk4':               'Cape Kamenjak entrance ~5 min by car',
    'prem.chk5':               'Rovinj ~45 min, Poreč ~1 hr by car',
    'prem.chk6':               'Quiet & safe, perfect for families',

    /* BEACHES page */
    'bch.hero':      'Rt Kamenjak',
    'bch.crumb':     'Rt Kamenjak',
    'bch.intro.h2':  'Rt Kamenjak - Istria\'s Wild Southern Tip',
    'bch.intro.p':   'Cape Kamenjak (Rt Kamenjak) is a protected nature park at the very southernmost point of Istria, just 5 minutes by car from Vila Sanja. It stretches for about 5 km into the Adriatic and is home to over 30 secluded coves, crystal-clear turquoise water, dramatic cliffs, lush Mediterranean vegetation, and some of the best beach bars in Croatia. Whether you want a lazy sunbathing day, cliff jumping, kayaking, or a cocktail at sunset, Kamenjak has it all.',
    'bch.intro.fig': 'Aerial view of Cape Kamenjak\'s turquoise coves stretching into the Adriatic Sea.',
    'bch.badge.rocky': 'Rocky coves (30+)',
    'bch.badge.cliff': 'Cliff jumping',
    'bch.badge.sandy': 'Sandy: Mali Portić',
    'bch.badge.bars':  '8+ beach bars',
    'bch.badge.park':  'Protected nature park',
    'bch.entry.h3':  'Entry & Parking',
    'bch.entry.p':   'Pedestrians and cyclists enter for free. Vehicles require a paid day-ticket, collect it at the entrance barrier (check the current season\'s prices at kamenjak.hr). The road inside the park starts as asphalt then turns to unpaved macadam; the speed limit is 20 km/h. Parking areas are signed near every beach, and there is a large car park at the Safari Bar.',
    'bch.entry.l1':  'Pick up a map at the entrance, it shows every cove, bar and facility',
    'bch.entry.l2':  'Internet signal inside the park is unreliable, download an offline map beforehand',
    'bch.entry.l3':  'The gate opens early in the morning; arriving before 10 AM on peak summer days means far less crowds',
    'bch.what.h2':   'What Kind of Beaches to Expect',
    'bch.rocky.fig': 'A typical rocky karst cove at Kamenjak, clear water, white pebbles, and total seclusion.',
    'bch.rocky.h3':  'Rocky & Pebble Coves',
    'bch.rocky.p1':  'Most of Kamenjak\'s beaches are rocky with small white pebble sections, typical Istrian karst coastline. The water is exceptionally clear and deep close to shore, with visibility of several metres on calm days.',
    'bch.rocky.tip': 'Water shoes are strongly recommended for comfortable entry and exit on rocky coves.',
    'bch.sand.fig':  'Mali Portić, the only sandy beach on Cape Kamenjak, shaded and family-friendly.',
    'bch.sand.h3':   'Mali Portić - The Sandy Beach',
    'bch.sand.p1':   'The only true sandy beach on the cape. It is small and naturally shaded, with a beach bar right on site. Popular with families with young children, arrive early to secure a spot in peak season.',
    'bch.sand.tip':  'One of the few spots on Kamenjak where you don\'t need water shoes.',
    'bch.cliff.fig': 'Cliff jumping at one of Kamenjak\'s many drop points, heights range from easy to serious.',
    'bch.cliff.h3':  'Cliff Jumping Spots',
    'bch.cliff.p1':  'Kamenjak is famous for its cliff jumping areas with multiple height levels, from beginner-friendly low ledges to serious drops that will get your heart pumping. Locals and experienced jumpers gather here throughout the summer.',
    'bch.cliff.tip': 'Always check the water depth below before jumping. Never dive head-first from any cliff.',
    'bch.fam.fig':   'A sheltered shingle cove near the Safari Bar area, calm and perfect for children.',
    'bch.fam.h3':    'Family-Friendly Spots',
    'bch.fam.p1':    'Several shingle coves offer gradual entry suitable for children. Look for beaches near the Safari Bar area and Mali Portić. The shallow, calm water on the western side of the cape is generally gentler than the exposed eastern cliffs.',
    'bch.fam.tip':   'Pick up the entrance map, it marks the gentlest beaches with icons for families.',
    'bch.high.h2':   'Must-See Highlights',
    'bch.safari.fig': 'The legendary Safari Bar, wooden tables tucked into exotic Mediterranean vegetation by the sea.',
    'bch.safari.p1': 'The most iconic spot on Cape Kamenjak, and arguably one of the most photographed bars in Croatia. Set in exotic Mediterranean vegetation, it feels like a jungle hideaway by the sea. Wooden tables are tucked into private leafy "booths," and the views over the Adriatic are stunning.',
    'bch.safari.l1': 'Order the cheesecake early, it sells out fast',
    'bch.safari.l2': 'Large rope swings great for photos',
    'bch.safari.l3': 'Dog-friendly with water fountains on site',
    'bch.safari.l4': 'Large parking lot nearby, easiest spot to drive to',
    'bch.safari.l5': 'Particularly magical at sunset',
    'bch.swing.fig': 'The iconic rope swings at Safari Bar, a favourite photo spot for visitors.',
    'bch.cave.h3':   'Iconic Rocky Coves',
    'bch.cave.p1':   'The dramatic karst limestone coastline is Kamenjak\'s defining feature. Many coves can only be reached after a short scramble across the rocks, keeping them genuinely secluded even at the height of summer. Crystal-clear turquoise water against white limestone makes for some of the most photogenic scenery on the Adriatic.',
    'bch.cave.tip':  'Arrive before 10 AM to claim the best coves for yourself. Bring water and a picnic — there are no facilities at the remote spots.',
    'bch.cave.fig':  'Crystal-clear turquoise water tucked between white limestone cliffs at Cape Kamenjak.',
    'bch.dino.fig':  'Fossilized dinosaur footprints preserved directly in the coastal rock at Cape Kamenjak.',
    'bch.dino.h3':   'Dinosaur Footprint Trail',
    'bch.dino.p1':   'A 15-20 minute walking trail through forested terrain leads to fossilized dinosaur footprints preserved directly in the coastal rock. Educational displays along the route explain prehistoric life in Istria.',
    'bch.dino.tip':  'The path is uneven and not suitable for strollers. Wear proper shoes, flip-flops won\'t do.',
    'bch.act.h2':    'Activities on the Cape',
    'bch.act.swim.h4':   'Swimming & Snorkelling',
    'bch.act.swim.p':    'The water around Kamenjak is among the clearest in the Adriatic. Visibility of several metres is normal. Bring a snorkel mask, the rocky seabed is home to sea urchins, fish, and occasional octopus.',
    'bch.act.kayak.h4':  'Kayak & SUP Rentals',
    'bch.act.kayak.p':   'Kayaks and stand-up paddleboards can be rented directly on the cape. Paddling between coves is one of the best ways to discover hidden beaches that are hard to reach on foot.',
    'bch.act.kayak.fig': 'Kayaking between coves is one of the best ways to discover Kamenjak\'s hidden beaches.',
    'bch.act.cycle.h4':  'Cycling',
    'bch.act.cycle.p':   'Cycling into the park is free. The terrain is challenging in places, macadam roads and some hills, so a hybrid or mountain bike works best. Go early in the morning to avoid the midday heat. Good fitness required.',
    'bch.act.aqua.h4':   'Aqua Park',
    'bch.act.aqua.p':    'An inflatable water park is set up seasonally on the cape, great fun for children and teenagers. Check the park entrance for the current season\'s schedule and location.',
    'bch.act.sunset.fig':'Golden hour at Cape Kamenjak, one of the best sunset viewpoints in Istria.',
    'bch.nat.h2':    'Nature & Wildlife',
    'bch.nat.intro': 'Cape Kamenjak is a protected nature park not just for its coastline but for its extraordinary biodiversity. Please stay on marked paths and never pick plants.',
    'bch.nat.fig':   'Wild orchids in bloom at Cape Kamenjak, two of the 30+ species here are found nowhere else on Earth.',
    'bch.nat.flora.h3': 'Extraordinary Flora & Fauna',
    'bch.nat.l1':    '30+ orchid species, including two endemic to this cape. Spring is the best time to spot them in bloom.',
    'bch.nat.l2':    '~50 butterfly species, one of the richest butterfly habitats in Istria. Look in sunny clearings between the pines.',
    'bch.nat.l3':    'Shark eggs (mermaid\'s purses), leathery black pouches sometimes washed ashore, a sign of healthy marine life nearby.',
    'bch.nat.l4':    'Seabirds & red squirrels, various seabirds nest along the cliffs; squirrels are occasionally spotted in the pine woodland.',
    'bch.nat.note':  'All plants on the cape are legally protected, please leave everything as you find it.',
    'bch.tips.h2':   'Practical Tips for Your Visit',
    'bch.tips.banner':    'Stock up in Premantura before you enter. There is a supermarket and bakery in the village. Food and drinks inside the park are available at the bars, but choice is limited and prices are higher, especially at peak times.',
    'bch.tips.sun.h4':    'Sun Protection',
    'bch.tips.sun.p':     'Most coves have little or no shade. Bring high-factor sun cream, a hat, and a beach umbrella. Avoid the beach between 12:00 and 15:00 in July and August.',
    'bch.tips.shoes.h4':  'Footwear',
    'bch.tips.shoes.p':   'Water shoes for rocky beach entry, and proper walking shoes if you plan to do the Dinosaur Trail or explore the interior paths. Flip-flops are fine for the bars.',
    'bch.tips.mobile.h4': 'Connectivity & Maps',
    'bch.tips.mobile.p':  'Mobile signal is weak or non-existent in many parts of the cape. Download an offline map before you arrive and grab a paper map at the entrance barrier.',
    'bch.tips.time.h4':   'Best Times to Visit',
    'bch.tips.time.p':    'Early morning (before 10 AM) or late afternoon are the best times, cooler, quieter, and the light for photos is magical at sunset. Weekdays are less crowded than weekends in July-August.',
    'bch.tips.bring.h4':  'What to Bring',
    'bch.tips.bring.l1':  'Plenty of water',
    'bch.tips.bring.l2':  'Snacks from the village',
    'bch.tips.bring.l3':  'Waterproof phone case',
    'bch.tips.bring.l4':  'Snorkel mask',
    'bch.tips.bring.l5':  'Beach umbrella',
    'bch.tips.getting.h4':'Getting There from Vila Sanja',
    'bch.tips.getting.p': 'The entrance to Cape Kamenjak is approximately 5 minutes by car from Vila Sanja. Follow signs for "Rt Kamenjak" from the village. Cycling is possible but requires fitness, the route inside the park has rough terrain.',
    'bch.cta.p':     'Staying at Vila Sanja puts you just minutes from all of this.',
    'bch.cta.book':  'Book your stay →',
    'bch.back':      'Back to Premantura',
    'bch.cta.btn':   'Contact us to plan your visit',

    /* ATTRACTIONS page */
    'atr.hero':          'Local Attractions',
    'atr.crumb':         'Local Attractions',
    'atr.intro':         'Premantura sits just 14 km from Pula, one of Croatia\'s richest cities for history and culture. Below is a guide to the best things to see and do in the region, from 2,000-year-old Roman monuments to wild nature parks and world-class film festivals.',
    'atr.cat.roman':     'Roman Pula & Historic Sites',
    'atr.arena.fig':     'Pulska arena, jedan od najočuvanijih rimskih amfiteatara na svijetu.',
    'atr.arena.p':       'One of the six largest Roman amphitheatres in the world and the best preserved in Croatia. Built in the 1st century AD, it seats 23,000 and today hosts the Pula Film Festival and major concerts. A must-see.',
    'atr.arena.loc':     'Pula city centre · ~20 min by car',
    'atr.forum.p':       'The central square of Roman Pula, continuously used for 2,000 years. Flanked by the Temple of Augustus and the Town Hall, it\'s the beating heart of the old city.',
    'atr.august.p':      'A remarkably intact Roman temple from the 1st century BC dedicated to the goddess Roma and Emperor Augustus. Located on the Forum.',
    'atr.arch.p':        'The Arch of the Sergii ("Golden Gate"), a triumphal arch from 29-27 BC at the entrance to the old town. One of the oldest and best preserved Roman arches in the world.',
    'atr.hercules.p':    'Hercules\' Gate, the oldest Roman monument in Pula, dating from the 1st century BC. A single-arched gate with a carved head of Hercules above the arch.',
    'atr.kastel.p':      'The Venetian Fortress built in the 17th century on the site of the original Roman Capitol, offering panoramic views over Pula and the harbour. Houses the Historical Museum of Istria.',
    'atr.baptistery.p':  'Baptistery of the Holy Trinity, an early Christian rotunda from the 6th century, one of the finest examples of early Byzantine architecture in Istria.',
    'atr.walls.p':       'The Roman and medieval city walls and gates of Pula, encircling the old town. Several towers and gate passages survive and can be walked along.',
    'atr.cat.nature':    'Nature & Outdoors',
    'atr.np.badge':      'Nacionalni park',
    'atr.brijuni.p':     'The Brijuni Islands National Park, an archipelago of 14 islands with Roman ruins, a safari park with exotic animals, pristine beaches, and Tito\'s famous summer residence. Reached by ferry from Fažana.',
    'atr.vizula.p':      'A scenic peninsula near Medulin with an archaeological park revealing remains of a Roman villa rustica and early Christian basilica, surrounded by walking paths and sea views.',
    'atr.zlatni.p':      'Golden Cape Forest Park in Rovinj, a beloved coastal forest park with walking and cycling paths through pine and cypress trees, ending at beautiful rocky coves on the Adriatic.',
    'atr.palud.p':       'Palud Marsh, an ornithological reserve near Rovinj, one of the most important wetland habitats in Croatia. Home to rare birds, dragonflies, and diverse flora. A hidden gem for nature lovers.',
    'atr.sestrice.p':    'The Two Sisters islands, a pair of small uninhabited islands off the coast near Premantura. A popular destination for boat trips, snorkelling, and peaceful swimming in clear waters.',
    'atr.cat.hidden':    'Hidden Gems',
    'atr.fantazija.p':   'Fantazija Quarry, a dramatic abandoned limestone quarry that has become a unique natural attraction with turquoise water, sheer rock walls, and a surreal landscape perfect for photos and swimming.',
    'atr.dvigrad.p':     'A remarkably preserved medieval ghost town in central Istria, abandoned in the 17th century. Its towers, walls, and church ruins rise from the forest, one of the most atmospheric sites in Istria.',
    'atr.standrija.p':   'A romantic ruined castle on St. Andrew\'s Island, accessible only by boat. The overgrown fortress offers a mystical atmosphere and beautiful views of the surrounding sea and coastline.',
    'atr.cat.events':    'Events & Culture',
    'atr.filmfest.p':    'Croatia\'s oldest and most prestigious film festival, held every July inside the Pula Arena. Watching a film under the stars in a 2,000-year-old amphitheatre is an unforgettable experience.',
    'atr.pulanight.p':   'Pula Night, a popular summer evening event when the old town streets fill with music, performers, food stalls, and culture. A vibrant celebration of the city\'s heritage.',
    'atr.gourmet.p':     'A celebration of Istrian cuisine, truffles, olive oil, wine, seafood, and local delicacies. Seasonal markets and restaurant events let you taste the best of the Istrian peninsula.',
    'atr.handmade.p':    'A craft fair dedicated to local artisans and handmade products from across Istria, jewellery, ceramics, textiles, food products, and traditional crafts. A great place to find authentic souvenirs.',
    'atr.back':          '← Back to Premantura',
    'atr.bch.btn':       'Explore the Beaches',

    /* TOWNS page */
    'twn.hero':          'Nearby Towns',
    'twn.intro':         'Vila Sanja is perfectly positioned to explore the southern tip of Istria and beyond. Below are the towns and villages closest to Premantura, distances measured from Vila Sanja.',
    'twn.medulin.desc':  'The nearest resort town with a long sandy beach, a bustling promenade, restaurants, and a supermarket. Great for an evening walk or a bigger grocery run.',
    'twn.banjole.desc':  'A quiet fishing village on the southern Istrian coast. Small harbour, a few konobas, and a relaxed atmosphere, ideal for a short bike ride from Vila Sanja.',
    'twn.liznjan.desc':  'A small village with a local feel, surrounded by olive groves and vineyards. Close to several pebble coves and the Ližnjan-Medulin bay coastline.',
    'twn.pula.desc':     'The main city of Istria, home to one of the world\'s best-preserved Roman amphitheatres. Also worth seeing: the Forum, Temple of Augustus, Triumphal Arch, and the old town. International airport nearby.',
    'twn.stinjan.desc':  'A coastal suburb northwest of Pula with a popular beach and camping area. Easy access to Pula\'s amenities while staying on the waterfront.',
    'twn.muntic.desc':   'A small inland Istrian village surrounded by farmland and typical Istrian countryside. A glimpse into the slower, rural side of the peninsula.',
    'twn.valbandon.desc':'A seaside settlement near Fažana with a calm bay, campsites, and easy access to the Brijuni Islands ferry. Popular with families and sailors.',
    'twn.fazana.desc':   'A charming fishing town and the main departure point for the Brijuni Islands National Park. Lovely harbour promenade, fresh seafood restaurants, and a lively local market.',
    'twn.brijuni.desc':  'A national park archipelago of 14 islands just off Fažana, famous for its safari park, Roman ruins, and as the former summer residence of Yugoslav leader Tito. Reached by ferry from Fažana.',
    'twn.vodnjan.desc':  'Known for its remarkably preserved mummified saints kept in the Church of St. Blaise, one of Istria\'s most unusual attractions. The old town features Venetian-style architecture and truffle shops.',
    'twn.peroj.desc':    'A tranquil village with an interesting history, settled by Montenegrin families in the 17th century, it retains its own Orthodox church. Close to the Peroj beach and the Brijuni views.',
    'twn.soon.h2':    'More content coming soon',
    'twn.soon.p':     'We are preparing a guide to the best towns within easy reach of Premantura, including Pula (Roman amphitheater, 20 min), Rovinj (45 min), Poreč (1 hr), Motovun and other Istrian hill towns.',
    'twn.back':       '← Back to Premantura',
    'twn.bch.btn':    'Explore the Beaches',

    /* SHARED - Map links */
    'map.view':       ' View on map',
    'map.venue':      ' View venue on map',
    'map.area':       ' View area on map',
    'bch.map.cape':   ' View Cape Kamenjak on map',
    'bch.map.mali':   ' View Mali Portić on map',

    /* BOOKING page */
    'bk.hero':         'Book Your Stay',
    'bk.title':        'How would you like to book?',
    'bk.sub':          "Choose the option that suits you best - we're happy to accommodate you either way!",
    'bk.online.title': 'Book via Booking.com',
    'bk.online.desc':  'Secure, instant online booking. Manage your reservation anytime.',
    'bk.online.l1':    'Instant confirmation',
    'bk.online.l2':    'Secure payment',
    'bk.online.l3':    'Easy cancellation',
    'bk.online.l4':    'Best available rates',
    'bk.online.btn':   'Book on Booking.com',
    'bk.direct.title': 'Contact Us Directly',
    'bk.direct.desc':  'Prefer a personal touch? Reach out for special requests, flexible dates, or any questions.',
    'bk.direct.l1':    'Personal service',
    'bk.direct.l2':    'Flexible arrangements',
    'bk.direct.l3':    'Special requests welcome',
    'bk.direct.l4':    'We speak EN & DE',
    'bk.direct.btn':   'View Contact Page',
  },

  /* ─────────────────────────────────────────────── CROATIAN ── */
  hr: {
    'nav.home':        'Početna',
    'nav.accom':       'Smještaj',
    'nav.duplex':      'Dupleks apartman',
    'nav.apartment':   'Apartman',
    'nav.room':        'Soba',
    'nav.reviews':     'Recenzije',
    'nav.about':       'O nama',
    'nav.rules':       'Pravila',
    'nav.contact':     'Kontakt',
    'nav.booknow':     'Rezerviraj!',

    'idx.hero.title':  'Vila Sanja',
    'idx.hero.sub':    'Vaša oaza mira na Jadranu',
    'idx.hero.desc':   'Udobni apartmani i soba u Premanturi, Istra. Klima uređaji, privatni balkoni, besplatni WiFi i parking, predivna i mirna lokacija. Ugodni i opremljeni smještaji. Samo nekoliko minuta od mora i rta Kamenjak.',
    'idx.hero.cta':    'Rezervirajte odmor',
    'idx.hero.scroll': 'Skrolajte dolje',

    'idx.about.title': 'Dobrodošli u Vilu Sanja',
    'idx.about.p1':    'Vila Sanja je obiteljska vila u Premanturi, samo 300 m od centra sela i blizu mora. Nudimo dupleks apartman za 6, apartman za 4 i udobnu sobu za 2, sve s privatnim balkonima, klima uređajem i besplatnim WiFi-jem.',
    'idx.about.p2':    'Vilu okružuje zelenilo s mirnim dvorištem i privatnim parkiranjem. Uživajte u mediteranskoj atmosferi i u svemu što Istra nudi!',
    'idx.about.btn':   'Saznajte više o nama',

    'idx.feat.title':       'Zašto odabrati Vilu Sanja?',
    'idx.feat.sub':         'Sve što trebate za savršen odmor u Istri',
    'idx.card.villa.title': 'Vila',
    'idx.card.villa.desc':  'Moderni apartmani okruženi zelenilom, s privatnim parkiranjem i opuštajućim dvorištem.',
    'idx.card.beach.title': 'Obližnji rt Kamenjak',
    'idx.card.beach.desc':  'Samo nekoliko koraka od Jadranskog mora i ulaza u Park prirode rt Kamenjak.',
    'idx.card.rooms.title': 'Udobni moderni smještaji',
    'idx.card.rooms.desc':  'Udobni, klimatizirani prostori za obitelji, parove i solo putnike.',
    'idx.card.rooms.btn':   'Pogledaj sve',
    'idx.card.rev.title':   'Gosti nas preferiraju',
    'idx.card.rev.desc':    'Više od 100 zadovoljnih gostiju i ocjena 4,4. Naši posjetitelji uvijek se vraćaju, pročitajte što kažu!',
    'idx.card.rev.btn':     'Pročitaj recenzije',

    'idx.card.villa.btn':   'Saznaj više',
    'idx.card.beach.btn':   'Istraži rt Kamenjak',

    'idx.card.host.title':  'Upoznajte domaćine',
    'idx.card.host.desc':   'Sanja i Matej dočekuju vas osobno, govore njemački i engleski, i uvijek su tu za vas.',
    'idx.card.host.btn':    'O nama',

    'idx.card.home.title':  'Vila, a ne hotel',
    'idx.card.home.desc':   'Hlad dvorišta, pogled na vrt, mirne istarske večeri. Pravi obiteljski smještaj gdje možete usporiti, odahnuti i zaista se opustiti.',

    'idx.stat.types':   'Vrste smještaja',
    'idx.stat.guests':  'Zadovoljnih gostiju',
    'idx.stat.dist':    'Od centra sela',
    'idx.stat.rating':  'Ocjena gostiju',

    'idx.rev.title':    'Što kažu naši gosti',
    'idx.rev.sub':      'Pouzdani od strane putnika iz cijelog svijeta',
    'idx.rev.btn':      'Pročitaj sve recenzije',

    'idx.info.loc.title':   'Lokacija',
    'idx.info.loc.addr':    'Selo Varoš 70 D, 52100 Premantura, Hrvatska',
    'idx.info.loc.link':    'Pogledaj kartu →',
    'idx.info.rules.title': 'Pravila boravka',
    'idx.info.rules.desc':  'Jednostavne smjernice za ugodan boravak svih.',
    'idx.info.rules.link':  'Pročitaj pravila →',
    'idx.info.rev.title':   'Recenzije',
    'idx.info.rev.desc':    'Stotine pozitivnih recenzija sretnih putnika.',
    'idx.info.rev.link':    'Pogledaj recenzije →',
    'idx.info.ct.title':    'Kontakt',
    'idx.info.ct.desc':     'Imate pitanje ili poseban zahtjev? Javite nam se!',
    'idx.info.ct.link':     'Kontaktirajte nas →',

    'idx.host.title':  'Upoznajte vaše domaćine',
    'idx.host.p1':     'Ovdje smo za vas, dobrodošli u našu vilu! Trudimo se da naše cijene budu pristupačne i da se svaki gost osjeća kao kod kuće. Na raspolaganju su vam dvorište, parking i mi. Mirno okruženje, sve što trebate je u blizini.',
    'idx.host.langs':  'Osoblje govori: njemački, engleski, hrvatski',

    'abt.hero':        'O nama',
    'abt.host.title':  'Domaćini: Sanja Volner i Matej Abramović',
    'abt.host.intro':  'Mi smo majka i sin koji zajedno vode i brinu o ovom domu.',
    'abt.host.p1':     'Vila Sanja je na odličnoj lokaciji, vrlo blizu centra i nedaleko od mora. Ulaz na rt Kamenjak je također u blizini. Imamo dupleks apartman za 6 osoba, apartman za 4 osobe i sobu s kupaonicom i balkonom. Posvećeni smo ugodnom boravku gostiju i uvijek smo dostupni.',
    'abt.host.p2':     'Cijela vila je okružena zelenilom, a parkirna mjesta su dostupna u dvorištu vile. Trudimo se da naše cijene budu razumne. Mirno okruženje, ovdje se dobro spava, a sve što trebate je u blizini. Dobrodošli!',
    'abt.host.p3':     'Živimo na imanju, što znači da smo uvijek tu. Trebate li lokalnu preporuku, kakvu pomoć, mi smo ovdje.',
    'abt.host.langs':  'Osoblje govori: njemački, engleski, hrvatski',
    'abt.chip.green':  'Zeleno i mirno',
    'abt.chip.onsite': 'Uvijek dostupni',
    'abt.chip.wifi':   'Besplatni WiFi',
    'abt.chip.park':   'Privatni parking',
    'abt.chip.pet':    'Ljubimci dobrodošli',
    'abt.chip.ac':     'Klima uređaji',
    'abt.chip.fam':    'Prilagođeno obiteljima',
    'abt.love.title':  'Zašto gosti preferiraju Vilu Sanja',
    'abt.love.1':      'Odlična lokacija, blizu centra i mora',
    'abt.love.2':      'Privatni balkoni, klima uređaj, besplatni WiFi',
    'abt.love.3':      'Mirno, zeleno okruženje',
    'abt.love.4':      'Besplatni privatni parking u dvorištu',
    'abt.love.5':      'Prilagođeno obiteljima i ljubimcima',
    'abt.love.6':      'Domaćini uvijek dostupni za pomoć',
    'abt.love.langs':  'Govore jezicima',
    'abt.surr.title':  'Okolica smještaja',
    'abt.tbl.nearby':  'U blizini',
    'abt.tbl.rest':    'Restorani i kafići',
    'abt.tbl.beach':   'Obližnje plaže',
    'abt.tbl.attr':    'Popularne znamenitosti',
    'abt.tbl.trans':   'Javni prijevoz',
    'abt.tbl.air':     'Najbliže zračne luke',
    'abt.tbl.note':    'Prikazane su najkraće procijenjene udaljenosti pješice ili vozilom; stvarne udaljenosti mogu se razlikovati.',
    'abt.fac.title':   'Sadržaji Vile Sanja',
    'abt.fac.rating':  'Odlični sadržaji. Ocjena gostiju: 4,4/5',
    'abt.fac.pop':     'Najpopularnije:',
    'abt.fac.t1':  'Idealno za vaš boravak', 'abt.fac.t2':  'Kupaonica',   'abt.fac.t3':  'Spavaća soba',
    'abt.fac.t4':  'Pogled',                 'abt.fac.t5':  'Dvorište',    'abt.fac.t6':  'Kuhinja',
    'abt.fac.t7':  'Internet',               'abt.fac.t8':  'Parking',     'abt.fac.t9':  'Usluge',
    'abt.fac.t10': 'Mediji i tehnologija',   'abt.fac.t11': 'Kućni ljubimci','abt.fac.t12': 'Općenito',
    'abt.fac.t13': 'Sigurnost',              'abt.fac.t14': 'Govore jezicima',

    'abt.pop.wifi':'✓ Besplatni WiFi', 'abt.pop.fam':'✓ Obiteljske sobe', 'abt.pop.nosmo':'✓ Sobe za nepušače',
    'abt.f1.l1':'Besplatni parking',     'abt.f1.l2':'Privatna kupaonica',    'abt.f1.l3':'Klima uređaj',
    'abt.f1.l4':'Kućni ljubimci',        'abt.f1.l5':'Balkon / terasa',       'abt.f1.l6':'Obiteljske sobe',    'abt.f1.l7':'Flat-screen TV',
    'abt.f2.l1':'Toaletni papir, ručnici','abt.f2.l2':'Kada ili tuš',         'abt.f2.l3':'Privatna kupaonica i WC','abt.f2.l4':'Sušilo za kosu',
    'abt.f3.l1':'Posteljina',            'abt.f3.l2':'Ormar ili garderobni ormar',
    'abt.f4.l1':'Pogled na unutarnje dvorište','abt.f4.l2':'Pogled na grad',  'abt.f4.l3':'Pogled na vrt',
    'abt.f5.l1':'Vanjski kamin',         'abt.f5.l2':'Vanjska blagovaonica',  'abt.f5.l3':'Vanjski namještaj',
    'abt.f5.l4':'Sunčana terasa',        'abt.f5.l5':'Balkon, terasa, vrt',
    'abt.f6.l1':'Blagovaoničke stolice', 'abt.f6.l2':'Kuhinjski pribor',      'abt.f6.l3':'Kuhalo za vodu',     'abt.f6.l4':'Hladnjak',
    'abt.f7.l1':'Besplatni WiFi u svim jedinicama',
    'abt.f8.l1':'Besplatni privatni parking na licu mjesta',
    'abt.f9.l1':'Privatna prijava/odjava','abt.f9.l2':'Brza prijava/odjava',
    'abt.f10.l1':'Flat-screen TV',       'abt.f10.l2':'Kabelski kanali',
    'abt.f11.l1':'Kućni ljubimci dobrodošli (može se naplatiti)',
    'abt.f12.l1':'Klima uređaj',         'abt.f12.l2':'Pločasti pod',         'abt.f12.l3':'Grijanje',
    'abt.f12.l4':'Privatni ulaz',        'abt.f12.l5':'Sobe za nepušače',     'abt.f12.l6':'Pegla',
    'abt.f13.l1':'Aparati za gašenje požara','abt.f13.l2':'Pristup ključem',
    'abt.f14.l1':'Njemački',             'abt.f14.l2':'Engleski',

    'acc.hero':       'Smještaj',
    'acc.title':      'Odaberite savršen smještaj',
    'acc.sub':        'Svi smještaji dolaze s klima uređajem, TV-om, WiFi-jem, privatnom kupaonicom i balkonom. Apartmani uključuju punu kuhinju.',
    'acc.duplex.cap': '4 + 2 osobe | Dvije etaže',
    'acc.duplex.desc':'Prostrani dupleks apartman na dvije etaže, savršen za veće obitelji ili grupe. Potpuna kuhinja, dva balkona i prostrani životni prostor.',
    'acc.apt.cap':    '2 + 2 osobe',
    'acc.apt.desc':   'Udoban apartman s potpunom kuhinjom, privatnom kupaonicom i sunčanim balkonom, idealan za parove ili manje obitelji.',
    'acc.room.cap':   '2 osobe',
    'acc.room.desc':  'Ugodna, svježe renovirana soba s privatnom kupaonicom i balkonom. Uključuje hladnjak, kuhalo i sve potrebne potrepštine.',
    'acc.btn':        'Pogledaj detalje',
    'acc.incl.title':  'Uključeno u svim jedinicama',
    'acc.incl.sub':    'Sve što trebate za udoban boravak',
    'accom.chip.ac':   'Klimatizacija',
    'accom.chip.wifi': 'Besplatni WiFi',
    'accom.chip.tv':   'Pločasti TV',
    'accom.chip.bath': 'Privatna kupaonica',
    'accom.chip.balc': 'Privatni balkon',
    'accom.chip.park': 'Besplatno parkiranje',
    'accom.chip.pet':  'Kućni ljubimci dopušteni',
    'accom.chip.heat': 'Grijanje',

    'dpl.hero':   'Dupleks apartman',
    'dpl.h2':     'Prostrani dvoetažni apartman',
    'dpl.desc':   'Naš najveći smještaj, Dupleks apartman proteže se na dvije etaže i savršen je za obitelji ili grupe do 6 osoba. Uživajte u potpunoj kuhinji, velikom životnom prostoru i dva privatna balkona s pogledom na istarsko selo.',
    'dpl.gal':    'Galerija',
    'dpl.btn':    'Rezerviraj ovaj apartman',
    'dpl.l1': 'Do 4 + 2 osobe',               'dpl.l2': 'Dvije etaže, prostran raspored',
    'dpl.l3': 'Potpuna kuhinja s blagovaonicom','dpl.l4': 'Dva privatna balkona',
    'dpl.l5': 'Klima uređaj i grijanje',       'dpl.l6': 'Privatna kupaonica s fenomom',
    'dpl.l7': 'Flat-screen TV, WiFi',          'dpl.l8': 'Ormar, posteljina je osigurana',
    'dpl.l9': 'Besplatni privatni parking',    'dpl.l10': 'Kućni ljubimci dobrodošli (može se naplatiti)',

    /* DUPLEX - Detailed section */
    'dpl.dtl.h2':      'Detalji apartmana',
    'dpl.dtl.desc':    'Ovaj klimatizirani dupleks apartman od 73 m² s privatnim ulazom uključuje 2 zasebne spavaće sobe, dnevni boravak i 2 kupaonice s tušem i sušilom za kosu. Potpuno opremljena kuhinja ima ploče za kuhanje, pećnicu, hladnjak, kuhalo za vodu, aparat za kavu/čaj i kuhinjski pribor. Terasa s pogledom na more, TV ravnog ekrana s kabelskim i satelitskim programima te besplatni Wi-Fi upotpunjuju prostor. Apartman prima do 6 osoba.',
    'dpl.dtl.sleep':   'Raspored spavanja',
    'dpl.dtl.room1':   'Spavaća soba 1',   'dpl.dtl.bed1': '1 veliki bračni krevet',
    'dpl.dtl.room2':   'Spavaća soba 2',   'dpl.dtl.bed2': '2 kreveta za 1 osobu',
    'dpl.dtl.room3':   'Dnevni boravak',   'dpl.dtl.bed3': '1 kauč na rasklapanje',
    'dpl.dtl.kitch.h': 'Kuhinja',
    'dpl.dtl.k1': 'Hladnjak',              'dpl.dtl.k2': 'Ploče za kuhanje i pećnica',
    'dpl.dtl.k3': 'Kuhalo za vodu i aparat za kavu', 'dpl.dtl.k4': 'Kuhinjski pribor',
    'dpl.dtl.k5': 'Kuhinjski stol i blagovaonica',   'dpl.dtl.k6': 'Sredstva za čišćenje',
    'dpl.dtl.bath.h':  'Kupaonice (×2)',
    'dpl.dtl.b1': 'Tuš kabina',            'dpl.dtl.b2': 'Sušilo za kosu',
    'dpl.dtl.b3': 'Ručnici',               'dpl.dtl.b4': 'Toaletni papir',
    'dpl.dtl.b5': 'Dodatni WC',
    'dpl.dtl.view.h':  'Pogled',
    'dpl.dtl.v1': 'Pogled na more',        'dpl.dtl.v2': 'Pogled na vrt',
    'dpl.dtl.v3': 'Pogled na grad',        'dpl.dtl.v4': 'Pogled na znamenitost',
    'dpl.dtl.v5': 'Pogled na unutarnje dvorište',
    'dpl.dtl.amen.h':  'Sadržaji',
    'dpl.dtl.a1':  'Balkon i terasa',                       'dpl.dtl.a2':  'Klima-uređaj i grijanje',
    'dpl.dtl.a3':  'TV ravnog ekrana (kabelski i satelitski)','dpl.dtl.a4':  'Privatni ulaz',
    'dpl.dtl.a5':  'Glačalo i stol za glačanje',           'dpl.dtl.a6':  'Aparat za kavu/čaj',
    'dpl.dtl.a7':  'Radio',                                'dpl.dtl.a8':  'Vanjski namještaj i blagovaonica',
    'dpl.dtl.a9':  'Popločani dio dvorišta',               'dpl.dtl.a10': 'Ormar',
    'dpl.dtl.a11': 'Kauč na rasklapanje',                  'dpl.dtl.a12': 'Sušilo i stalak za odjeću',
    'dpl.dtl.a13': 'Prostor za sjedenje i blagovaonica',   'dpl.dtl.a14': 'Zasebna zgrada - gornji kat (stepenicama)',
    'dpl.dtl.a15': 'Sredstvo za dezinfekciju ruku',

    'apt.hero':   'Jednosobni apartman',
    'apt.h2':     'Udoban i dobro opremljen',
    'apt.desc':   'Ovaj svijetli apartman idealan je za parove ili manje obitelji do četiri osobe. Ima potpunu kuhinju, privatni balkon i sve ugodnosti za opuštajući odmor u Premanturi, Istra.',
    'apt.gal':    'Galerija',
    'apt.btn':    'Rezerviraj ovaj apartman',
    'apt.l1': 'Do 2 + 2 osobe',                'apt.l2': 'Potpuna kuhinja s blagovaonicom',
    'apt.l3': 'Privatni balkon',               'apt.l4': 'Klima uređaj i grijanje',
    'apt.l5': 'Privatna kupaonica s fenomom',  'apt.l6': 'Flat-screen TV, besplatni WiFi',
    'apt.l7': 'Hladnjak, kuhalo, kuhinjski pribor','apt.l8': 'Ormar, posteljina je osigurana',
    'apt.l9': 'Besplatni privatni parking',    'apt.l10': 'Kućni ljubimci dobrodošli (može se naplatiti)',

    /* ONE-BEDROOM - Detailed section */
    'apt.dtl.h2':      'Detalji apartmana',
    'apt.dtl.desc':    'Ovaj klimatizirani apartman od 35 m² s privatnim ulazom uključuje zasebnu spavaću sobu, dnevni boravak i kupaonicu s tušem i sušilom za kosu. Potpuno opremljena kuhinja ima ploče za kuhanje, pećnicu, hladnjak, kuhalo za vodu i kuhinjski pribor. Terasa s pogledom na more i vrt, TV ravnog ekrana s kabelskim i satelitskim programima te besplatni Wi-Fi upotpunjuju prostor.',
    'apt.dtl.sleep':   'Raspored spavanja',
    'apt.dtl.room1':   'Spavaća soba',    'apt.dtl.bed1': '1 veliki bračni krevet',
    'apt.dtl.room2':   'Dnevni boravak',  'apt.dtl.bed2': '1 kauč na rasklapanje',
    'apt.dtl.kitch.h': 'Kuhinja',
    'apt.dtl.k1': 'Hladnjak',                      'apt.dtl.k2': 'Ploče za kuhanje i pećnica',
    'apt.dtl.k3': 'Kuhalo za vodu',                'apt.dtl.k4': 'Kuhinjski pribor',
    'apt.dtl.k5': 'Kuhinjski stol',                'apt.dtl.k6': 'Sredstva za čišćenje',
    'apt.dtl.bath.h':  'Kupaonica',
    'apt.dtl.b1': 'Tuš kabina',                    'apt.dtl.b2': 'Sušilo za kosu',
    'apt.dtl.b3': 'Ručnici',                        'apt.dtl.b4': 'Toaletni papir',
    'apt.dtl.view.h':  'Pogled',
    'apt.dtl.v1': 'Pogled na more',                'apt.dtl.v2': 'Pogled na vrt',
    'apt.dtl.v3': 'Pogled na grad',                'apt.dtl.v4': 'Pogled na znamenitost',
    'apt.dtl.v5': 'Pogled na unutarnje dvorište',
    'apt.dtl.amen.h':  'Sadržaji',
    'apt.dtl.a1':  'Balkon i terasa',                       'apt.dtl.a2':  'Klima-uređaj i grijanje',
    'apt.dtl.a3':  'TV ravnog ekrana (kabelski i satelitski)','apt.dtl.a4':  'Privatni ulaz',
    'apt.dtl.a5':  'Glačalo i stol za glačanje',           'apt.dtl.a6':  'Vanjski namještaj i blagovaonica',
    'apt.dtl.a7':  'Popločani dio dvorišta',               'apt.dtl.a8':  'Ormar',
    'apt.dtl.a9':  'Kauč na rasklapanje',                  'apt.dtl.a10': 'Sušilo za rublje',
    'apt.dtl.a11': 'Prostor za sjedenje',                  'apt.dtl.a12': 'Zasebna zgrada',
    'apt.dtl.a13': 'Gornji kat - isključivo stepenicama',  'apt.dtl.a14': 'Pušenje dozvoljeno',

    'rm.hero':   'Dvokrevetna soba s balkonom',
    'rm.h2':     'Ugodna soba u srcu Premanture',
    'rm.desc':   'Uživajte u svježe renoviranoj sobi. Doživite lokalni život, odmorite se na privatnom balkonu i uživajte u modernim sadržajima u mirnom okruženju blizu plaža, trgovina i kafića.',
    'rm.gal':    'Galerija',
    'rm.btn':    'Rezerviraj ovu sobu',
    'rm.l1': '15 m², soba za 2 osobe',         'rm.l2': 'Privatni balkon',
    'rm.l3': 'Privatna kupaonica s tušem',     'rm.l4': 'Sušilo za kosu i ručnici',
    'rm.l5': 'Klima uređaj i grijanje',        'rm.l6': 'Flat-screen TV, besplatni WiFi',
    'rm.l7': 'Hladnjak i električno kuhalo',   'rm.l8': 'Ormar, posteljina je osigurana',
    'rm.l9': 'Privatni ulaz',                  'rm.l10': 'Besplatni parking',

    /* ROOM - Detailed section */
    'rm.dtl.h2':      'Detalji sobe',
    'rm.dtl.desc':    'Ova klimatizirana dvokrevetna soba od 15 m² ima privatnu kupaonicu s tušem i sušilom za kosu te terasu s pogledom na vrt. U sobi se nalazi TV ravnog ekrana s kabelskim programima, privatni ulaz, hladnjak, kuhalo za vodu, kuhinjski pribor i besplatni Wi-Fi.',
    'rm.dtl.sleep':   'Raspored spavanja',
    'rm.dtl.room1':   'Dvokrevetna soba',  'rm.dtl.bed1': '1 veliki bračni krevet',
    'rm.dtl.bath.h':  'Kupaonica',
    'rm.dtl.b1': 'Tuš kabina',             'rm.dtl.b2': 'Sušilo za kosu',
    'rm.dtl.b3': 'Ručnici',                'rm.dtl.b4': 'Toaletni papir',
    'rm.dtl.view.h':  'Pogled',
    'rm.dtl.v1': 'Pogled na vrt',          'rm.dtl.v2': 'Pogled na grad',
    'rm.dtl.v3': 'Pogled na znamenitost',  'rm.dtl.v4': 'Pogled na unutarnje dvorište',
    'rm.dtl.amen.h':  'Sadržaji',
    'rm.dtl.a1':  'Balkon i terasa',                       'rm.dtl.a2':  'Klima-uređaj i grijanje',
    'rm.dtl.a3':  'TV ravnog ekrana (kabelski)',           'rm.dtl.a4':  'Privatni ulaz',
    'rm.dtl.a5':  'Glačalo',                              'rm.dtl.a6':  'Vanjski namještaj i blagovaonica',
    'rm.dtl.a7':  'Popločani dio dvorišta',               'rm.dtl.a8':  'Ormar',
    'rm.dtl.a9':  'Hladnjak',                             'rm.dtl.a10': 'Kuhalo za vodu i pribor',
    'rm.dtl.a11': 'Sušilo i stalak za odjeću',            'rm.dtl.a12': 'Prostor za sjedenje',
    'rm.dtl.a13': 'Popločani/mramorni pod',               'rm.dtl.a14': 'Posteljina osigurana',
    'rm.dtl.a15': 'Utičnica pokraj kreveta',              'rm.dtl.a16': 'Zasebna zgrada - gornji kat (stepenicama)',
    'rm.dtl.a17': 'Sredstvo za dezinfekciju ruku',

    'rev.hero':       'Recenzije gostiju',
    'rev.stat1':      'Zadovoljnih gostiju',
    'rev.stat2':      'Ukupna ocjena',
    'rev.stat3':      'Ocjena lokacije',
    'rev.stat4':      'Čistoća',
    'rev.title':      'Što kažu naši gosti',
    'rev.sub':        'Stvarne recenzije od stvarnih putnika, drago nam je čuti Vas!',
    'rev.cta.title':  'Stvorite i vi svoja lijepa sjećanja.',
    'rev.cta.sub':    'Pridružite se stotinama zadovoljnih gostiju koji su odabrali Vilu Sanja za odmor u Istri.',
    'rev.cta.btn':    'Rezerviraj boravak',

    'ct.hero':        'Kontakt',
    'ct.title':       'Stupite u kontakt',
    'ct.sub':         'Drago nam je čuti Vas. Javite nam se u bilo koje vrijeme!',
    'ct.block1':      'Vila Sanja',
    'ct.owners':      'Vlasnici:',
    'ct.block2':      'Lokacija',
    'ct.block3':      'Zašto odabrati nas?',
    'ct.why1':        'Obiteljska atmosfera i osobni pristup svakom gostu',
    'ct.why2':        'Mirna lokacija, blizu plaža i Parka prirode rt Kamenjak',
    'ct.why3':        'Besplatni privatni parking i WiFi',
    'ct.why4':        'Terasa i vanjski prostor za opuštanje',
    'ct.why5':        'Idealno za obitelji, parove i ljubitelje prirode',
    'ct.why6':        'Domaćini govore njemački i engleski',
    'ct.why.p':       'Kontaktirajte nas danas i rezervirajte odmor u Premanturi!',
    'ct.book.btn':    'Rezervirajte boravak',

    'rl.hero':        'Pravila boravka',
    'rl.title':       'Kućni red i informacije',
    'rl.checkin.h':   'Prijava i odjava',
    'rl.checkin.p1':  'Prijava:',
    'rl.checkin.p2':  'Odjava:',
    'rl.checkin.note1':'Obvezna je inspekcija pri odjavi s upraviteljem objekta. Dogovorite vrijeme odjave unaprijed.',
    'rl.checkin.note2':'Gosti moraju predočiti važeću osobnu iskaznicu pri prijavi. Obavijestite Vilu Sanja o očekivanom vremenu dolaska unaprijed.',
    'rl.children.h':  'Djeca i ležajevi',
    'rl.children.p1': 'Dobrodošla su djeca svih dobi.',
    'rl.children.p2': 'Za prikaz točnih cijena i podataka o popunjenosti, navedite broj i dob djece u grupi.',
    'rl.children.h4': 'Dječji krevetić i extra ležaj',
    'rl.children.l1': 'Djeca 0-5 god: dječji krevetić na zahtjev (besplatno)',
    'rl.children.l2': 'Nema dostupnih extra ležajeva',
    'rl.children.l3': 'Dječji krevetići podliježu dostupnosti',
    'rl.age.h':       'Dobno ograničenje',
    'rl.age.p':       'Minimalna dob za prijavu je 18 godina.',
    'rl.pets.h':      'Kućni ljubimci',
    'rl.pets.p':      'Kućni ljubimci su dobrodošli. Naplaćuju se dodatne naknade, kontaktirajte nas unaprijed.',
    'rl.pay.h':       'Informacije o plaćanju',
    'rl.pay.p':       'Plaćanje se dogovara izravno s domaćinima. Imajte gotovinu pri ruci za eventualne dodatne troškove po dolasku.',
    'rl.quiet.h':     'Noćni mir i zabave',
    'rl.quiet.p1':    'Noćni mir:',
    'rl.quiet.p2':    'Zabave i eventi nisu dopušteni.',
    'rl.safety.h':    'Zdravlje i sigurnost',
    'rl.safety.l1':   'Pojačano čišćenje i mjere sigurnosti su na snazi',
    'rl.safety.l2':   'Primjenjuju se mjere fizičkog distanciranja',
    'rl.safety.l3':   'Osigurajte da vaša rezervacija bude u skladu s lokalnim smjernicama',
    'rl.safety.l4':   'Ovaj objekt ne može se koristiti u svrhu karantene',
    'rl.faq.title':   'Često postavljana pitanja',
    'rl.faq.q1':      'Koje vrste smještaja su dostupne u Vili Sanja?',
    'rl.faq.a1':      'Vila Sanja nudi tri opcije: Dupleks apartman (do 4+2), Jednosobni apartman (do 2+2), Dvokrevetna soba s balkonom (2 osobe).',
    'rl.faq.q2':      'Koliko je Vila Sanja udaljena od centra Premanture?',
    'rl.faq.a2':      'Vila Sanja je udaljena oko 200-300 metara od centra sela Premantura.',
    'rl.faq.q3':      'Koliko je udaljena najbliža plaža?',
    'rl.faq.a3':      'Najbliža plaža je oko 600-900 metara od Vile Sanja. Ulaz u Park prirode rt Kamenjak je također u blizini.',
    'rl.faq.q4':      'Kakve su cijene u Vili Sanja?',
    'rl.faq.a4':      'Cijene ovise o datumima boravka, vrsti smještaja i broju osoba. Kontaktirajte nas da provjerite dostupnost i cijene.',
    'rl.faq.q5':      'Je li dostupan parking?',
    'rl.faq.a5':      'Da, besplatni privatni parking dostupan je na licu mjesta u dvorištu vile.',

    /* NAV - Near Us */
    'nav.nearus':   'U blizini',
    'nav.beaches':  'Rt Kamenjak',
    'nav.attr':     'Lokalne atrakcije',
    'nav.towns':    'Obližnji gradovi',

    /* PREMANTURA hub page */
    'prem.hero':               'Premantura i okolica',
    'prem.intro.p1':           'Premantura je malo, šarmantno ribarsko selo na samom vrhu Istarskog poluotoka, okruženo kristalno čistim vodama Jadrana. Dom je rtu Kamenjak, jednom od najljepših zaštićenih parkova prirode u Hrvatskoj, i nudi opušten mediteranski način života daleko od gužve.',
    'prem.intro.p2':           'Istražite što Premantura i njezina okolica čine toliko posebnima:',
    'prem.card.beach.title':   'Plaže na rtu Kamenjak',
    'prem.card.beach.desc':    'Više od 30 skrivenih uvala, kristalno čista voda, skokovi s litica, vodeni sportovi i legendarni Safari Bar. Sve što trebate za savršen dan na plaži.',
    'prem.card.beach.btn':     'Istraži plaže →',
    'prem.card.attr.title':    'Lokalne atrakcije',
    'prem.card.attr.desc':     'Antički ostatci, srednjovjekovne utvrde, staze dinosaura, aqua parkovi i još mnogo toga, Premantura i rivijera Pule nude bezbroj zanimljivosti.',
    'prem.card.attr.btn':      'Pogledaj atrakcije →',
    'prem.card.towns.title':   'Obližnji gradovi',
    'prem.card.towns.desc':    'Od rimske veličanstvenosti Pule do čarobnih brežuljaka Rovinja i Motovuna, otkrijte sve što Istra nudi na dosegu ruke.',
    'prem.card.towns.btn':     'Otkrij gradove →',
    'prem.stat1':              'Skrivenih uvala',
    'prem.stat2':              'Duljina rta Kamenjak',
    'prem.stat3':              'Od pulske zračne luke',
    'prem.stat4':              'Vrsta orhideja u parku',
    'prem.about.title':        'O selu',
    'prem.about.p1':           'Premantura leži na najjužnijoj točki Istre, samo 14 km od pulske međunarodne zračne luke. Selo broji oko 400 stanovnika i zadržava tihu, autentičnu atmosferu tradicionalnog hrvatskog priobalnog mjesta, popločane uličice, ribarski brodovi i svježi morski plodovi.',
    'prem.about.p2':           'Ulaz u Park prirode rt Kamenjak je na kratkom putu automobilom ili biciklom, što Premanturi daje idealnu poziciju za ljubitelje prirode, kupača i sve koji žele istraživati Istru vlastitim tempom.',
    'prem.about.p3':           'Vila Sanja nalazi se blizu centru sela, savršeno smještena za sve navedeno i još mnogo više.',
    'prem.chk1':               'Supermarket, pekara i ljekarna u selu',
    'prem.chk2':               'Restorani i kafići uz obalu mora',
    'prem.chk3':               'Centar Pule ~20 min automobilom',
    'prem.chk4':               'Ulaz u rt Kamenjak ~5 min automobilom',
    'prem.chk5':               'Rovinj ~45 min, Poreč ~1 sat automobilom',
    'prem.chk6':               'Mirno i sigurno, savršeno za obitelji',

    /* BEACHES page */
    'bch.hero':      'Rt Kamenjak',
    'bch.crumb':     'Rt Kamenjak',
    'bch.intro.h2':  'Rt Kamenjak - divlji južni vrh Istre',
    'bch.intro.p':   'Rt Kamenjak zaštićeni je park prirode na samom južnom rubu Istre, samo 5 minuta vožnje od Vile Sanja. Pruža se oko 5 km u Jadran i dom je više od 30 skrivenih uvala, kristalno bistrog tirkiznog mora, dramatičnih stijena, bujne mediteranske vegetacije i nekih od najboljh beach barova u Hrvatskoj. Bilo da želite dan opuštene sunčane kupke, skakanje s litica, kajakarenje ili koktel uz zalazak sunca, Kamenjak ima sve.',
    'bch.intro.fig': 'Pogled iz zraka na tirkizne uvale rta Kamenjak koje se protežu u Jadransko more.',
    'bch.badge.rocky': 'Stjenovite uvale (30+)',
    'bch.badge.cliff': 'Skakanje s litica',
    'bch.badge.sandy': 'Pješčana: Mali Portić',
    'bch.badge.bars':  '8+ beach barova',
    'bch.badge.park':  'Zaštićeni park prirode',
    'bch.entry.h3':  'Ulaz i parkiranje',
    'bch.entry.p':   'Pješaci i biciklisti ulaze besplatno. Vozila trebaju plaćenu dnevnu propusnicu, preuzmite je na ulaznoj rampi (trenutne sezonske cijene provjerite na kamenjak.hr). Cesta unutar parka počinje kao asfalt, a potom prelazi u makadamski put; ograničenje brzine je 20 km/h. Parkirišta su označena u blizini svake plaže, a velika parkirna površina nalazi se kraj Safari Bara.',
    'bch.entry.l1':  'Preuzmite kartu na ulazu, prikazuje svaku uvalu, bar i sadržaj',
    'bch.entry.l2':  'Internetski signal unutar parka je nepouzdan, preuzmite offline kartu unaprijed',
    'bch.entry.l3':  'Rampa se otvara rano ujutro; dolazak prije 10 sati u ljetnoj sezoni znači daleko manje gužve',
    'bch.what.h2':   'Kakve plaže možete očekivati',
    'bch.rocky.fig': 'Tipična stjenovita karska uvala na Kamenjaku, bistra voda, bijeli šljunak i potpuna osama.',
    'bch.rocky.h3':  'Stjenovite i šljunčane uvale',
    'bch.rocky.p1':  'Većina kamenjačkih plaža je stjenovita s manjim odjeljcima bijelog šljunka, tipična istarska karska obala. Voda je iznimno bistra i duboka odmah uz obalu, s vidljivošću od nekoliko metara u mirnim danima.',
    'bch.rocky.tip': 'Papuče za more toplo se preporučuju za udoban ulaz i izlaz na stjenovitim uvalama.',
    'bch.sand.fig':  'Mali Portić, jedina pješčana plaža na rtu Kamenjak, u sjeni i prikladna za obitelji.',
    'bch.sand.h3':   'Mali Portić - pješčana plaža',
    'bch.sand.p1':   'Jedina prava pješčana plaža na rtu. Malena je i prirodno zasjenjeno, s beach barom odmah uz nju. Popularna kod obitelji s malom djecom, dođite rano kako biste osigurali mjesto u glavnoj sezoni.',
    'bch.sand.tip':  'Jedno od rijetkih mjesta na Kamenjaku gdje vam papuče za more nisu potrebne.',
    'bch.cliff.fig': 'Skakanje s litica na jednom od brojnih kamenjačkih skočišta, visine variraju od laganih do ozbiljnih.',
    'bch.cliff.h3':  'Mjesta za skakanje s litica',
    'bch.cliff.p1':  'Kamenjak je poznat po mjestima za skakanje s litica s više razina visine, od početničkih niskih rubova do ozbiljnih skokova koji će vam ubrzati srce. Mještani i iskusni skakači okupljaju se ovdje kroz cijelo ljeto.',
    'bch.cliff.tip': 'Uvijek provjerite dubinu vode ispod sebe prije skoka. Nikada ne ronite glavom naprijed s litica.',
    'bch.fam.fig':   'Zaštićena šljunčana uvala blizu Safari Bara, mirna i savršena za djecu.',
    'bch.fam.h3':    'Mjesta prikladna za obitelji',
    'bch.fam.p1':    'Nekoliko šljunčanih uvala nudi postepen ulaz prikladan za djecu. Potražite plaže u blizini Safari Bara i Malog Portića. Plitka, mirna voda na zapadnoj strani rta općenito je mirnija od izloženih istočnih stijena.',
    'bch.fam.tip':   'Preuzmite kartu na ulazu, označava najmirnija mjesta ikonama za obitelji.',
    'bch.high.h2':   'Obavezno posjetiti',
    'bch.safari.fig': 'Legendarni Safari Bar, bar okružen prirodom i smješten u egzotičnoj mediteranskoj vegetaciji uz more.',
    'bch.safari.p1': 'Najupečatljivije mjesto na rtu Kamenjak, i zasigurno jedan od najfotografirakanijih barova u Hrvatskoj. Smješten u egzotičnoj mediteranskoj vegetaciji, osjećate se kao da ste u džungli uz more. Drveni stolovi skriveni su u zelenim "boksevima", a pogledi na Jadran su zadivljujući.',
    'bch.safari.l1': 'Naručite cheesecake na vrijeme, brzo se rasprodaje',
    'bch.safari.l2': 'Velika ljuljačka na konopima idealna za fotografije',
    'bch.safari.l3': 'Prilagođeno psima, s pojilicama na licu mjesta',
    'bch.safari.l4': 'Veliko parkirište u blizini, najlakše dostupno automobilom',
    'bch.safari.l5': 'Posebno čarobno u zalazak sunca',
    'bch.swing.fig': 'Kultna ljuljačka na konopima u Safari Baru, omiljeno foto-mjesto posjetitelja.',
    'bch.cave.h3':   'Kultne kamenite uvale',
    'bch.cave.p1':   'Dramatična krška obala od vapnenca pravo je obilježje Kamenjaka. Mnoge uvale dostupne su samo nakon kratkog penjanja po stijenama, što ih čini uistinu skrivenim draguljem čak i u vrhuncu sezone. Kristalno bistro tirkizno more susreće se s bijelim vapnencem u jednoj od najfotogeničnijih scenografija na Jadranu.',
    'bch.cave.tip':  'Dođite prije 10 ujutro kako biste zauzeli najljepše uvale. Ponesite vodu i hranu — na udaljenim mjestima nema sadržaja.',
    'bch.cave.fig':  'Kristalno bistro tirkizno more smješteno između bijelih vapnenačkih stijena na rtu Kamenjak.',
    'bch.dino.fig':  'Fosilizirani otisci stopala dinosaura sačuvani izravno u obalnoj stijeni na rtu Kamenjak.',
    'bch.dino.h3':   'Staza otisaka dinosaura',
    'bch.dino.p1':   'Šetnička staza duga 15-20 minuta kroz pošumljeni teren vodi do fosiliziranih otisaka stopala dinosaura sačuvanih izravno u obalnoj stijeni. Edukativne ploče uz rutu objašnjavaju pretpovijesni život u Istri.',
    'bch.dino.tip':  'Put je neravnan i nije prikladan za kolica. Obujte prave cipele, japanke neće poslužiti.',
    'bch.act.h2':    'Aktivnosti na rtu',
    'bch.act.swim.h4':   'Kupanje i ronjenje s maskom',
    'bch.act.swim.p':    'Voda oko Kamenjaka spada među najbistrije na Jadranu. Vidljivost od nekoliko metara sasvim je uobičajena. Ponesite ronilačku masku, stjenovito morsko dno dom je ježincima, ribama i povremenom hobotnicom.',
    'bch.act.kayak.h4':  'Najam kajaka i SUP-a',
    'bch.act.kayak.p':   'Kajaci i daske za stojeće veslanje mogu se iznajmiti izravno na rtu. Veslanje između uvala jedan je od najboljih načina za otkrivanje skrivenih plaža teško dostupnih pješice.',
    'bch.act.kayak.fig': 'Kajakarenje između uvala jedan je od najboljih načina za otkrivanje skrivenih plaža Kamenjaka.',
    'bch.act.cycle.h4':  'Biciklizam',
    'bch.act.cycle.p':   'Ulaz biciklima u park je besplatan. Teren je mjestimično zahtjevan, makadamski putovi i neka brežuljkasta dionica, pa je idealan hibridni ili brdski bicikl. Krenite rano ujutro kako biste izbjegli podnevnu vrućinu. Potrebna je dobra kondicija.',
    'bch.act.aqua.h4':   'Aqua park',
    'bch.act.aqua.p':    'Na rtu se sezonski postavlja napuhavajući vodeni park, odlična zabava za djecu i tinejdžere. Na ulazu u park provjerite raspored i lokaciju za tekuću sezonu.',
    'bch.act.sunset.fig':'Zlatni sat na rtu Kamenjak, jedno od najboljih mjesta za gledanje zalaska sunca u Istri.',
    'bch.nat.h2':    'Priroda i biljni i životinjski svijet',
    'bch.nat.intro': 'Rt Kamenjak zaštićeni je park prirode ne samo zbog obale, već i zbog izvanredne bioraznolikosti. Molimo vas da se držite označenih staza i ne berete biljke.',
    'bch.nat.fig':   'Divlje orhideje u cvatu na rtu Kamenjak, dvije od 30+ vrsta ovdje su endemske i ne nalaze se nigdje drugdje na Zemlji.',
    'bch.nat.flora.h3': 'Izvanredna flora i fauna',
    'bch.nat.l1':    '30+ vrsta orhideja, uključujući dvije endemske za ovaj rt. Proljeće je najboljenovrijeme za promatranje cvijeta.',
    'bch.nat.l2':    '~50 vrsta leptira, jedno od najbogatijih staništa leptira u Istri. Tražite ih na sunčanim proplancima između borova.',
    'bch.nat.l3':    'Jaja morskih pasa (tobolci sirene), kožnate crne vrećice koje se ponekad isperu na obalu, znak zdravog morskog života u blizini.',
    'bch.nat.l4':    'Morske ptice i crvene vjeverice, razne morske ptice gnijezde se duž stijena; vjeverice se povremeno zamijete u borovim šumama.',
    'bch.nat.note':  'Sve biljke na rtu zakonski su zaštićene, molimo ostavite sve kako ste pronašli.',
    'bch.tips.h2':   'Praktični savjeti za vaš posjet',
    'bch.tips.banner':    'Opskrbite se u Premanturi prije ulaska. U selu postoje supermarket i pekara. Hrana i piće unutar parka dostupni su u barovima, ali izbor je ograničen, a cijene su više, posebno u vršnim satima.',
    'bch.tips.sun.h4':    'Zaštita od sunca',
    'bch.tips.sun.p':     'Većina uvala ima malo sjene ili je uopće nema. Ponesite kremu visokog zaštitnog faktora, šešir i suncobran. Izbjegavajte boravak na plaži između 12:00 i 15:00 u srpnju i kolovozu.',
    'bch.tips.shoes.h4':  'Obuća',
    'bch.tips.shoes.p':   'Papuče za more za ulaz na stjenovite plaže, te prave cipele za planinarenje ako planirate Stazu dinosaura ili istraživanje unutarnjih putova. Japanke su dovoljne za barove.',
    'bch.tips.mobile.h4': 'Veza i karte',
    'bch.tips.mobile.p':  'Mobilni signal je slab ili ne postoji u velikom dijelu rta. Preuzmite offline kartu prije dolaska i uzmite papirnatu kartu na ulaznoj rampi.',
    'bch.tips.time.h4':   'Kada je najljepše doći',
    'bch.tips.time.p':    'Rano jutro (prije 10 sati) ili kasno poslijepodne su idealni, hladnije je, mirnije, a svjetlost za fotografije je čarobna u zalazak sunca. Radni dani imaju manje prometa od vikenda u srpnju i kolovozu.',
    'bch.tips.bring.h4':  'Što ponijeti',
    'bch.tips.bring.l1':  'Dovoljno vode',
    'bch.tips.bring.l2':  'Grickalice iz sela',
    'bch.tips.bring.l3':  'Vodootpornu navlaku za mobitel',
    'bch.tips.bring.l4':  'Ronilačku masku',
    'bch.tips.bring.l5':  'Suncobran',
    'bch.tips.getting.h4':'Kako doći iz Vile Sanja',
    'bch.tips.getting.p': 'Ulaz na rt Kamenjak udaljen je otprilike 5 minuta vožnje od Vile Sanja. Slijedite znakove za "Rt Kamenjak" iz sela. Moguće je doći i biciklom, ali potrebna je dobra kondicija, ruta unutar parka ima neravni teren.',
    'bch.cta.p':     'Boravak u Vili Sanja stavlja vas samo nekoliko minuta od svega ovoga.',
    'bch.cta.book':  'Rezervirajte boravak →',
    'bch.back':      'Natrag na početnu',
    'bch.cta.btn':   'Kontaktirajte nas za planiranje posjeta',

    /* ATTRACTIONS page */
    'atr.hero':          'Lokalne atrakcije',
    'atr.crumb':         'Lokalne atrakcije',
    'atr.intro':         'Premantura se nalazi samo 14 km od Pule, jednog od najobogatijih hrvatskih gradova za povijest i kulturu. U nastavku je vodič kroz najzanimljivije što možete vidjeti i doživjeti u regiji, od rimskih spomenika starih 2.000 godina do divljih parkova prirode i svjetski poznatih filmskih festivala.',
    'atr.cat.roman':     'Rimska Pula i povijesne znamenitosti',
    'atr.arena.fig':     'Pulska arena, jedan od najočuvanijih rimskih amfiteatara na svijetu.',
    'atr.arena.p':       'Jedan od šest najvećih rimskih amfiteatara na svijetu i najočuvaniji u Hrvatskoj. Izgrađen u 1. stoljeću nove ere, prima 23.000 posjetitelja i danas ugošćuje Pulski filmski festival i velike koncerte. Obavezno posjetiti.',
    'atr.arena.loc':     'Centar Pule je udaljen ~20 min automobilom',
    'atr.forum.p':       'Središnji gradski trg rimske Pule, u kontinuiranoj upotrebi 2.000 godina. Okružen Augustovim hramom i Gradskom vijećnicom, bije srce starog grada.',
    'atr.august.p':      'Izvanredno očuvani rimski hram iz 1. stoljeća pr. Kr. posvećen božici Romi i caru Augustu. Nalazi se na Forumu.',
    'atr.arch.p':        'Slavoluk Sergijevaca ("Zlatna vrata"), trijumfalni luk iz 29.-27. pr. Kr. na ulazu u stari grad. Jedan od najstarijih i najočuvanijih rimskih slavoluka na svijetu.',
    'atr.hercules.p':    'Herkulova vrata, najstariji rimski spomenik u Puli iz 1. stoljeća pr. Kr. Jednolučna vrata s uklesanom glavom Herkula iznad luka.',
    'atr.kastel.p':      'Mletačka utvrda izgrađena u 17. stoljeću na mjestu starog rimskog Kapitola, s panoramskim pogledom na Pulu i luku. Smještaj Povijesnog muzeja Istre.',
    'atr.baptistery.p':  'Krstionica Sv. Trojstva, ranokršćanska rotunda iz 6. stoljeća, jedan od najljepših primjera ranobizantske arhitekture u Istri.',
    'atr.walls.p':       'Rimski i srednovjekovni gradski bedemi i vrata Pule, koji okružuju stari grad. Nekoliko kula i prolaza kroz vrata je sačuvano i može se razgledati.',
    'atr.cat.nature':    'Priroda i vanjske aktivnosti',
    'atr.np.badge':      'Nacionalni park',
    'atr.brijuni.p':     'Nacionalni park Brijuni, arhipelag od 14 otoka s rimskim ruševinama, safarijskim parkom s egzotičnim životinjama, netaknutim plažama i čuvenom ljetnom rezidencijom Tita. Do Brijuna se dolazi trajektom iz Fažane.',
    'atr.vizula.p':      'Slikovit poluotok blizu Medulina s arheološkim parkom koji otkriva ostatke rimske vile rustike i ranokršćanske bazilike, okružen šetačkim stazama i pogledom na more.',
    'atr.zlatni.p':      'Park-šuma Zlatni Rt u Rovinju, omiljena priobalna šuma sa šetačkim i biciklističkim stazama kroz borove i čemprese, koji završavaju na lijepim stjenovitim uvalama na Jadranu.',
    'atr.palud.p':       'Ornitološki rezervat Palud blizu Rovinja, jedno od najvažnijih močvarnih staništa u Hrvatskoj. Dom rijetkim pticama, vilinskim konjicima i raznolikoj flori. Skriveni dragulj za ljubitelje prirode.',
    'atr.sestrice.p':    'Otoci Dvije Sestrice, par malih nenaseljenih otočića uz obalu blizu Premanture. Popularno odredište za izlete brodom, ronjenje s maskom i mirno kupanje u bistroj vodi.',
    'atr.cat.hidden':    'Skriveni dragulji',
    'atr.fantazija.p':   'Kamenolom Fantazija, dramatični napušteni vapnenački kamenolom koji je postao jedinstvena prirodna atrakcija s tirkiznom vodom, okomitim stijenama i nadrealnim krajolikom savršenim za fotografije i kupanje.',
    'atr.dvigrad.p':     'Izvanredno očuvani srednovjekovni grad-duh u unutrašnjosti Istre, napušten u 17. stoljeću. Njegovi tornjevi, zidine i ruševine crkve izrastaju iz šume, jedno od najatmosfernijih mjesta u Istri.',
    'atr.standrija.p':   'Romantična razrušena utvrda na otoku Sv. Andrije, dostupna isključivo brodom. Zarasla tvrđava nudi mistično ozračje i prekrasne poglede na okolno more i obalu.',
    'atr.cat.events':    'Događanja i kultura',
    'atr.filmfest.p':    'Najstariji i najprestižniji filmski festival u Hrvatskoj, koji se svake godine u srpnju održava unutar Pulske arene. Gledanje filma pod zvijezdama u 2.000 godina starom amfiteatru nezaboravno je iskustvo.',
    'atr.pulanight.p':   'Pulska noć, popularno ljetno večernje događanje kada se ulice starog grada pune glazbom, nastupima, štandovima s hranom i kulturom. Živahna proslava baštine grada.',
    'atr.gourmet.p':     'Proslava istarske kuhinje, tartufi, maslinovo ulje, vino, plodovi mora i lokalni specijaliteti. Sezonski sajmovi i restoranski eventi omogućuju vam da okušate sve što Istarski poluotok nudi.',
    'atr.handmade.p':    'Sajam obrta posvećen lokalnim majstorima i ručno rađenim proizvodima iz cijele Istre, nakit, keramika, tekstil, prehrambeni proizvodi i tradicijski obrti. Odlično mjesto za autentične suvenire.',
    'atr.back':          '← Natrag na početnu',
    'atr.bch.btn':       'Istraži rt Kamenjak',

    /* TOWNS page */
    'twn.hero':          'Obližnji gradovi',
    'twn.intro':         'Vila Sanja savršeno je smještena za istraživanje južnog vrha Istre i šire okolice. U nastavku su gradovi i mjesta najbliža Premanturi, udaljenosti mjerene od Vile Sanja.',
    'twn.medulin.desc':  'Najbliže odmaralište s dugom pješčanom plažom, živahnom šetnicom, restoranima i supermarketom. Odlično za večernju šetnju ili veću kupovinu.',
    'twn.banjole.desc':  'Mirno ribarsko selo na južnoj istarskoj obali. Mala luka, nekoliko konoba i opuštena atmosfera, idealno za kratku vožnju biciklom od Vile Sanja.',
    'twn.liznjan.desc':  'Malo selo s domaćim ugođajem, okruženo maslinicima i vinogradima. U blizini nekoliko šljunčanih uvala i obale zaljeva Ližnjan-Medulin.',
    'twn.pula.desc':     'Glavni grad Istre, dom jednog od najočuvanijih rimskih amfiteatara na svijetu. Vrijedi posjetiti i: Forum, Augustov hram, Slavoluk i stari grad. Međunarodna zračna luka u blizini.',
    'twn.stinjan.desc':  'Priobalno predgrađe sjeverozapadno od Pule s popularnom plažom i kampom. Lak pristup sadržajima Pule uz ostanak uz more.',
    'twn.muntic.desc':   'Malo istarsko seoce u unutrašnjosti okruženo oranicama i tipičnim istarskim krajolikom. Uvid u sporiji, ruralni dio poluotoka.',
    'twn.valbandon.desc':'Primorsko naselje blizu Fažane s mirnim zaljevom, kampovima i lakim pristupom trajektu za Brijune. Popularno kod obitelji i jedriličara.',
    'twn.fazana.desc':   'Šarmantni ribarski gradić i glavno polazište za Nacionalni park Brijuni. Lijepa riječna šetnica, restorani s ribibnim svježivim morskim plodovima i živahna lokalna tržnica.',
    'twn.brijuni.desc':  'Arhipelag nacionalnog parka od 14 otoka tik uz Fažanu, poznat po safarijskom parku, rimskim ruševinama i bivšoj ljetnoj rezidenciji jugoslavenskog lidera Tita. Do Brijuna se stiže trajektom iz Fažane.',
    'twn.vodnjan.desc':  'Poznat po izvanredno dobro sačuvanim mumificiranim svecima u Crkvi sv. Blaža, jedna od najneobičnijih atrakcija Istre. Stari grad obiluje venecijanskom arhitekturom i trgovinama s tartufima.',
    'twn.peroj.desc':    'Mirno selo zanimljive povijesti, u 17. stoljeću naselile su ga crnogorske obitelji, a zadržalo je vlastitu pravoslavnu crkvu. U blizini plaže Peroj i pogleda na Brijune.',
    'twn.soon.h2':    'Više sadržaja uskoro',
    'twn.soon.p':     'Pripremamo vodič kroz najbliže gradove do Premanture, uključujući Pulu (rimski amfiteatar, 20 min), Rovinj (45 min), Poreč (1 sat), Motovun i druge istarske gradiće na brdima.',
    'twn.back':       '← Natrag na početnu',
    'twn.bch.btn':    'Istraži rt Kamenjak',

    /* SHARED - Map links */
    'map.view':       ' Pogledaj na karti',
    'map.venue':      ' Pogledaj mjesto na karti',
    'map.area':       ' Pogledaj područje na karti',
    'bch.map.cape':   ' Pogledaj Rt Kamenjak na karti',
    'bch.map.mali':   ' Pogledaj Mali Portić na karti',

    /* BOOKING page */
    'bk.hero':         'Rezervirajte boravak',
    'bk.title':        'Kako biste željeli rezervirati?',
    'bk.sub':          'Odaberite opciju koja vam najviše odgovara - drago nam je ugostiti vas na bilo koji način!',
    'bk.online.title': 'Rezervirajte putem Booking.com',
    'bk.online.desc':  'Sigurna, trenutna online rezervacija. Upravljajte rezervacijom u bilo koje vrijeme.',
    'bk.online.l1':    'Trenutna potvrda',
    'bk.online.l2':    'Sigurno plaćanje',
    'bk.online.l3':    'Jednostavan otkaz',
    'bk.online.l4':    'Najbolje dostupne cijene',
    'bk.online.btn':   'Rezerviraj na Booking.com',
    'bk.direct.title': 'Kontaktirajte nas izravno',
    'bk.direct.desc':  'Preferirate osobni pristup? Javite nam se za posebne zahtjeve, fleksibilne datume ili pitanja.',
    'bk.direct.l1':    'Osobna usluga',
    'bk.direct.l2':    'Fleksibilni dogovori',
    'bk.direct.l3':    'Posebni zahtjevi dobrodošli',
    'bk.direct.l4':    'Govorimo HR, EN i DE',
    'bk.direct.btn':   'Stranica za kontakt',
  },

  /* ─────────────────────────────────────────────── GERMAN ── */
  de: {
    'nav.home':        'Startseite',
    'nav.accom':       'Unterkunft',
    'nav.duplex':      'Duplex-Wohnung',
    'nav.apartment':   'Apartment',
    'nav.room':        'Zimmer',
    'nav.reviews':     'Bewertungen',
    'nav.about':       'Über uns',
    'nav.rules':       'Hausregeln',
    'nav.contact':     'Kontakt',
    'nav.booknow':     'Buchen!',

    'idx.hero.title':  'Vila Sanja',
    'idx.hero.sub':    'Ihre Ruheoase an der Adria',
    'idx.hero.desc':   'Komfortable Apartments und Zimmer in Premantura, Istrien. Klimaanlage, private Balkone, kostenfreies WLAN und Parkplatz. Nur wenige Minuten vom Meer und Kap Kamenjak.',
    'idx.hero.cta':    'Urlaub buchen',
    'idx.hero.scroll': 'Nach unten',

    'idx.about.title': 'Willkommen in der Vila Sanja',
    'idx.about.p1':    'Vila Sanja ist eine Familienvilla in Premantura, nur 300 m vom Dorfzentrum und nahe am Meer. Wir bieten eine Duplex-Wohnung für 6, ein Apartment für 4 und ein gemütliches Zimmer für 2 - alle mit privaten Balkonen, Klimaanlage und kostenfreiem WLAN.',
    'idx.about.p2':    'Die Villa ist von Grün umgeben, mit einem ruhigen Innenhof und privatem Parkplatz. Genießen Sie das mediterrane Flair und das Beste, was Istrien zu bieten hat!',
    'idx.about.btn':   'Mehr über uns erfahren',

    'idx.feat.title':       'Warum Vila Sanja wählen?',
    'idx.feat.sub':         'Alles, was Sie für einen perfekten Urlaub in Istrien brauchen',
    'idx.card.villa.title': 'Die Villa',
    'idx.card.villa.desc':  'Moderne Apartments umgeben von Grün, mit Privatparkplatz und entspannendem Innenhof.',
    'idx.card.beach.title': 'Strände in der Nähe',
    'idx.card.beach.desc':  'Nur wenige Schritte von der Adria und dem Eingang zum Naturpark Kap Kamenjak.',
    'idx.card.rooms.title': 'Zimmer & Apartments',
    'idx.card.rooms.desc':  'Komfortable, klimatisierte Einheiten für Familien, Paare und Alleinreisende.',
    'idx.card.rooms.btn':   'Alle ansehen',
    'idx.card.rev.title':   'Gäste lieben uns',
    'idx.card.rev.desc':    'Über 100 zufriedene Gäste und eine Bewertung von 8,1. Unsere Besucher kommen immer wieder - lesen Sie, was sie sagen!',
    'idx.card.rev.btn':     'Bewertungen lesen',

    'idx.card.villa.btn':   'Mehr erfahren',
    'idx.card.beach.btn':   'Strände entdecken',

    'idx.card.host.title':  'Lernen Sie Ihre Gastgeber kennen',
    'idx.card.host.desc':   'Sanja und Matej heißen Sie persönlich willkommen, sprechen Deutsch und Englisch und sind immer für Sie da.',
    'idx.card.host.btn':    'Über uns',

    'idx.card.home.title':  'Eine Vila, kein Hotel',
    'idx.card.home.desc':   'Schattiger Innenhof, Gartenblick, ruhige istrische Abende. Ein echtes Familienhaus, in dem Sie entschleunigen, aufatmen und wirklich ankommen können.',

    'idx.stat.types':   'Unterkunftsarten',
    'idx.stat.guests':  'Zufriedene Gäste',
    'idx.stat.dist':    'Vom Dorfzentrum',
    'idx.stat.rating':  'Gästebewertung',

    'idx.rev.title':    'Was unsere Gäste sagen',
    'idx.rev.sub':      'Von Reisenden aus aller Welt geschätzt',
    'idx.rev.btn':      'Alle Bewertungen lesen',

    'idx.info.loc.title':   'Standort',
    'idx.info.loc.addr':    'Selo Varoš 70 D, 52100 Premantura, Kroatien',
    'idx.info.loc.link':    'Karte anzeigen →',
    'idx.info.rules.title': 'Hausregeln',
    'idx.info.rules.desc':  'Einfache Richtlinien für einen angenehmen Aufenthalt.',
    'idx.info.rules.link':  'Regeln lesen →',
    'idx.info.rev.title':   'Bewertungen',
    'idx.info.rev.desc':    'Hunderte positive Bewertungen zufriedener Reisender.',
    'idx.info.rev.link':    'Bewertungen anzeigen →',
    'idx.info.ct.title':    'Kontakt',
    'idx.info.ct.desc':     'Haben Sie eine Frage oder einen Sonderwunsch? Melden Sie sich!',
    'idx.info.ct.link':     'Kontakt aufnehmen →',

    'idx.host.title':  'Lernen Sie Ihre Gastgeber kennen',
    'idx.host.p1':     'Wir sind für Sie da - willkommen in unserer Villa! Wir bemühen uns, unsere Preise erschwinglich zu halten und jeden Gast wie zu Hause fühlen zu lassen. Innenhof, Garten und Parkplatz stehen zur Verfügung. Ruhige Umgebung, alles Nötige in der Nähe.',
    'idx.host.langs':  'Gesprochene Sprachen: Deutsch, Englisch',

    'abt.hero':        'Über Vila Sanja',
    'abt.host.title':  'Gastgeber: Sanja Volner & Matej Abramović',
    'abt.host.intro':  'Wir sind Mutter und Sohn und kümmern uns gemeinsam um das Haus.',
    'abt.host.p1':     'Vila Sanja liegt an einem sehr guten Standort, sehr nah am Zentrum und nicht weit vom Meer. Der Eingang zu Kap Kamenjak ist ebenfalls in der Nähe. Wir haben eine Duplex-Wohnung für 6 Personen, ein Apartment für 4 Personen und ein Zimmer mit Bad und Balkon. Wir sind stets darum bemüht, dass sich die Gäste wohlfühlen, und immer erreichbar.',
    'abt.host.p2':     'Die gesamte Villa ist von Grün umgeben, und Parkplätze stehen im Innenhof zur Verfügung. Wir versuchen, unsere Preise fair zu halten. Ruhige Umgebung - hier schläft man gut, und alles, was man braucht, ist in der Nähe. Herzlich willkommen!',
    'abt.host.p3':     'Wir wohnen auf dem Anwesen, das bedeutet, wir sind immer da. Brauchen Sie eine lokale Empfehlung oder irgendeine Hilfe - wir sind für Sie da.',
    'abt.host.langs':  'Gesprochene Sprachen: Deutsch, Englisch',
    'abt.chip.green':  'Grün & Ruhig',
    'abt.chip.onsite': 'Immer vor Ort',
    'abt.chip.wifi':   'Kostenfreies WLAN',
    'abt.chip.park':   'Privatparkplatz',
    'abt.chip.pet':    'Haustiere erlaubt',
    'abt.chip.ac':     'Klimaanlage',
    'abt.chip.fam':    'Familienfreundlich',
    'abt.love.title':  'Warum Gäste die Vila Sanja lieben',
    'abt.love.1':      'Ausgezeichnete Lage - nah am Zentrum und am Meer',
    'abt.love.2':      'Private Balkone, Klimaanlage, kostenfreies WLAN',
    'abt.love.3':      'Ruhige, grüne Umgebung',
    'abt.love.4':      'Kostenfreier Privatparkplatz im Innenhof',
    'abt.love.5':      'Familien- und haustierfreundlich',
    'abt.love.6':      'Gastgeber stets für Hilfe erreichbar',
    'abt.love.langs':  'Gesprochene Sprachen',
    'abt.surr.title':  'Umgebung des Objekts',
    'abt.tbl.nearby':  'In der Nähe',
    'abt.tbl.rest':    'Restaurants & Cafés',
    'abt.tbl.beach':   'Strände in der Nähe',
    'abt.tbl.attr':    'Beliebte Sehenswürdigkeiten',
    'abt.tbl.trans':   'Öffentliche Verkehrsmittel',
    'abt.tbl.air':     'Nächstgelegene Flughäfen',
    'abt.tbl.note':    'Die kürzesten geschätzten Entfernungen zu Fuß oder mit dem Fahrzeug; tatsächliche Entfernungen können abweichen.',
    'abt.fac.title':   'Ausstattung der Vila Sanja',
    'abt.fac.rating':  'Ausgezeichnete Ausstattung. Gästebewertung: 4,4/5',
    'abt.fac.pop':     'Am beliebtesten:',
    'abt.fac.t1':  'Ideal für Ihren Aufenthalt','abt.fac.t2':  'Badezimmer',      'abt.fac.t3':  'Schlafzimmer',
    'abt.fac.t4':  'Aussicht',                  'abt.fac.t5':  'Außenbereich',   'abt.fac.t6':  'Küche',
    'abt.fac.t7':  'Internet',                  'abt.fac.t8':  'Parkplatz',       'abt.fac.t9':  'Dienstleistungen',
    'abt.fac.t10': 'Medien & Technologie',      'abt.fac.t11': 'Haustiere',       'abt.fac.t12': 'Allgemein',
    'abt.fac.t13': 'Sicherheit',                'abt.fac.t14': 'Gesprochene Sprachen',

    'abt.pop.wifi':'✓ Kostenfreies WLAN', 'abt.pop.fam':'✓ Familienzimmer', 'abt.pop.nosmo':'✓ Nichtraucherzimmer',
    'abt.f1.l1':'Kostenfreier Parkplatz', 'abt.f1.l2':'Privates Badezimmer',  'abt.f1.l3':'Klimaanlage',
    'abt.f1.l4':'Haustiere erlaubt',      'abt.f1.l5':'Balkon / Terrasse',    'abt.f1.l6':'Familienzimmer',     'abt.f1.l7':'Flachbild-TV',
    'abt.f2.l1':'Toilettenpapier, Handtücher','abt.f2.l2':'Badewanne oder Dusche','abt.f2.l3':'Privates Bad & WC','abt.f2.l4':'Haartrockner',
    'abt.f3.l1':'Bettwäsche',             'abt.f3.l2':'Kleiderschrank',
    'abt.f4.l1':'Blick auf den Innenhof', 'abt.f4.l2':'Stadtblick',           'abt.f4.l3':'Gartenblick',
    'abt.f5.l1':'Außenkamin',             'abt.f5.l2':'Außenspeisebereich',   'abt.f5.l3':'Außenmöbel',
    'abt.f5.l4':'Sonnenterrasse',         'abt.f5.l5':'Balkon, Terrasse, Garten',
    'abt.f6.l1':'Esstisch',               'abt.f6.l2':'Kochgeschirr',         'abt.f6.l3':'Wasserkocher',       'abt.f6.l4':'Kühlschrank',
    'abt.f7.l1':'Kostenfreies WLAN in allen Einheiten',
    'abt.f8.l1':'Kostenfreier Privatparkplatz vor Ort',
    'abt.f9.l1':'Privater Check-in/out',  'abt.f9.l2':'Express Check-in/out',
    'abt.f10.l1':'Flachbild-TV',          'abt.f10.l2':'Kabelfernsehen',
    'abt.f11.l1':'Haustiere willkommen (Gebühren möglich)',
    'abt.f12.l1':'Klimaanlage',           'abt.f12.l2':'Fliesenboden',        'abt.f12.l3':'Heizung',
    'abt.f12.l4':'Privater Eingang',      'abt.f12.l5':'Nichtraucherzimmer',  'abt.f12.l6':'Bügeleisen',
    'abt.f13.l1':'Feuerlöscher',          'abt.f13.l2':'Schlüsselzugang',
    'abt.f14.l1':'Deutsch',               'abt.f14.l2':'Englisch',

    'acc.hero':       'Unterkunft',
    'acc.title':      'Wählen Sie Ihren perfekten Aufenthalt',
    'acc.sub':        'Alle Unterkünfte verfügen über Klimaanlage, Flachbild-TV, WLAN, privates Bad und Balkon. Apartments haben eine voll ausgestattete Küche.',
    'acc.duplex.cap': '4 + 2 Personen | Zwei Etagen',
    'acc.duplex.desc':'Geräumige Duplex-Wohnung auf zwei Etagen, perfekt für größere Familien oder Gruppen. Voll ausgestattete Küche, zwei Balkone und großzügiger Wohnbereich.',
    'acc.apt.cap':    '2 + 2 Personen',
    'acc.apt.desc':   'Komfortables Apartment mit voll ausgestatteter Küche, privatem Bad und sonnigem Balkon - ideal für Paare oder kleine Familien.',
    'acc.room.cap':   '2 Personen',
    'acc.room.desc':  'Gemütliches, frisch renoviertes Zimmer mit privatem Bad und Balkon. Mit Mini-Kühlschrank, Wasserkocher und allem Notwendigen.',
    'acc.btn':        'Details ansehen',
    'acc.incl.title':  'In allen Einheiten enthalten',
    'acc.incl.sub':    'Alles, was Sie für einen komfortablen Aufenthalt brauchen',
    'accom.chip.ac':   'Klimaanlage',
    'accom.chip.wifi': 'Kostenloses WLAN',
    'accom.chip.tv':   'Flachbild-TV',
    'accom.chip.bath': 'Privates Badezimmer',
    'accom.chip.balc': 'Privater Balkon',
    'accom.chip.park': 'Kostenloser Parkplatz',
    'accom.chip.pet':  'Haustiere erlaubt',
    'accom.chip.heat': 'Heizung',

    'dpl.hero':   'Duplex-Wohnung',
    'dpl.h2':     'Geräumiges Apartment auf zwei Etagen',
    'dpl.desc':   'Unsere größte Unterkunft, die Duplex-Wohnung, erstreckt sich über zwei Etagen und ist perfekt für Familien oder Gruppen bis zu 6 Personen. Genießen Sie eine voll ausgestattete Küche, großzügigen Wohnraum und zwei private Balkone.',
    'dpl.gal':    'Galerie',
    'dpl.btn':    'Dieses Apartment buchen',
    'dpl.l1': 'Bis zu 4 + 2 Personen',         'dpl.l2': 'Zwei Etagen, geräumig',
    'dpl.l3': 'Küche mit Essbereich',           'dpl.l4': 'Zwei private Balkone',
    'dpl.l5': 'Klimaanlage & Heizung',          'dpl.l6': 'Privates Bad mit Haartrockner',
    'dpl.l7': 'Flachbild-TV, WLAN',             'dpl.l8': 'Kleiderschrank, Bettwäsche inklusive',
    'dpl.l9': 'Kostenfreier Privatparkplatz',   'dpl.l10': 'Haustiere willkommen (Gebühren möglich)',

    /* DUPLEX - Detailed section */
    'dpl.dtl.h2':      'Wohnungsdetails',
    'dpl.dtl.desc':    'Dieses klimatisierte 73 m² große Duplex-Apartment mit privatem Eingang verfügt über 2 separate Schlafzimmer, ein Wohnzimmer und 2 Badezimmer mit Dusche und Haartrockner. Die voll ausgestattete Küche bietet Herd, Backofen, Kühlschrank, Wasserkocher, Kaffee-/Teemaschine und Kochgeschirr. Eine Terrasse mit Meerblick, Flachbildfernseher mit Kabel- und Satellitenkanälen und kostenloses WLAN runden das Apartment ab. Das Apartment bietet Platz für bis zu 6 Personen.',
    'dpl.dtl.sleep':   'Schlafplätze',
    'dpl.dtl.room1':   'Schlafzimmer 1',   'dpl.dtl.bed1': '1 großes Doppelbett',
    'dpl.dtl.room2':   'Schlafzimmer 2',   'dpl.dtl.bed2': '2 Einzelbetten',
    'dpl.dtl.room3':   'Wohnzimmer',       'dpl.dtl.bed3': '1 Schlafsofa',
    'dpl.dtl.kitch.h': 'Küche',
    'dpl.dtl.k1': 'Kühlschrank',           'dpl.dtl.k2': 'Herd & Backofen',
    'dpl.dtl.k3': 'Wasserkocher & Kaffeemaschine', 'dpl.dtl.k4': 'Kochgeschirr',
    'dpl.dtl.k5': 'Küchentisch & Essbereich',      'dpl.dtl.k6': 'Reinigungsmittel',
    'dpl.dtl.bath.h':  'Badezimmer (×2)',
    'dpl.dtl.b1': 'Dusche',                'dpl.dtl.b2': 'Haartrockner',
    'dpl.dtl.b3': 'Handtücher',            'dpl.dtl.b4': 'Toilettenpapier',
    'dpl.dtl.b5': 'Zusätzliches WC',
    'dpl.dtl.view.h':  'Aussicht',
    'dpl.dtl.v1': 'Meerblick',             'dpl.dtl.v2': 'Gartenblick',
    'dpl.dtl.v3': 'Stadtblick',            'dpl.dtl.v4': 'Sehenswürdigkeitsblick',
    'dpl.dtl.v5': 'Innenhofblick',
    'dpl.dtl.amen.h':  'Ausstattung',
    'dpl.dtl.a1':  'Balkon & Terrasse',                    'dpl.dtl.a2':  'Klimaanlage & Heizung',
    'dpl.dtl.a3':  'Flachbildfernseher (Kabel & Satellit)','dpl.dtl.a4':  'Privater Eingang',
    'dpl.dtl.a5':  'Bügeleisen & Bügelbrett',             'dpl.dtl.a6':  'Kaffee-/Teemaschine',
    'dpl.dtl.a7':  'Radio',                               'dpl.dtl.a8':  'Außenmöbel & Essbereich',
    'dpl.dtl.a9':  'Gepflasterter Innenhof',              'dpl.dtl.a10': 'Kleiderschrank',
    'dpl.dtl.a11': 'Schlafsofa',                          'dpl.dtl.a12': 'Wäscheständer & Kleiderständer',
    'dpl.dtl.a13': 'Sitzbereich & Essbereich',            'dpl.dtl.a14': 'Separates Gebäude - Obergeschoss (nur Treppe)',
    'dpl.dtl.a15': 'Handdesinfektionsmittel',

    'apt.hero':   'Einzimmer-Apartment',
    'apt.h2':     'Komfortabel & Gut ausgestattet',
    'apt.desc':   'Dieses helle Apartment ist ideal für Paare oder kleine Familien bis zu vier Personen. Es verfügt über eine voll ausgestattete Küche, einen privaten Balkon und alles, was Sie für einen entspannten Urlaub in Premantura brauchen.',
    'apt.gal':    'Galerie',
    'apt.btn':    'Dieses Apartment buchen',
    'apt.l1': 'Bis zu 2 + 2 Personen',          'apt.l2': 'Küche mit Essbereich',
    'apt.l3': 'Privater Balkon',                'apt.l4': 'Klimaanlage & Heizung',
    'apt.l5': 'Privates Bad mit Haartrockner',  'apt.l6': 'Flachbild-TV, kostenfreies WLAN',
    'apt.l7': 'Kühlschrank, Wasserkocher, Kochgeschirr','apt.l8': 'Kleiderschrank, Bettwäsche inklusive',
    'apt.l9': 'Kostenfreier Privatparkplatz',   'apt.l10': 'Haustiere willkommen (Gebühren möglich)',

    /* ONE-BEDROOM - Detailed section */
    'apt.dtl.h2':      'Wohnungsdetails',
    'apt.dtl.desc':    'Dieses klimatisierte 35 m² große Apartment mit privatem Eingang verfügt über ein separates Schlafzimmer, Wohnzimmer und Bad mit Dusche und Haartrockner. Die voll ausgestattete Küche bietet Herd, Backofen, Kühlschrank, Wasserkocher und Kochgeschirr. Eine Terrasse mit Meer- und Gartenblick, Flachbildfernseher mit Kabel- und Satellitenkanälen und kostenlosem WLAN runden das Apartment ab.',
    'apt.dtl.sleep':   'Schlafplätze',
    'apt.dtl.room1':   'Schlafzimmer',    'apt.dtl.bed1': '1 großes Doppelbett',
    'apt.dtl.room2':   'Wohnzimmer',      'apt.dtl.bed2': '1 Schlafsofa',
    'apt.dtl.kitch.h': 'Küche',
    'apt.dtl.k1': 'Kühlschrank',                   'apt.dtl.k2': 'Herd & Backofen',
    'apt.dtl.k3': 'Wasserkocher',                  'apt.dtl.k4': 'Kochgeschirr',
    'apt.dtl.k5': 'Küchentisch',                   'apt.dtl.k6': 'Reinigungsmittel',
    'apt.dtl.bath.h':  'Badezimmer',
    'apt.dtl.b1': 'Dusche',                        'apt.dtl.b2': 'Haartrockner',
    'apt.dtl.b3': 'Handtücher',                    'apt.dtl.b4': 'Toilettenpapier',
    'apt.dtl.view.h':  'Aussicht',
    'apt.dtl.v1': 'Meerblick',                     'apt.dtl.v2': 'Gartenblick',
    'apt.dtl.v3': 'Stadtblick',                    'apt.dtl.v4': 'Sehenswürdigkeitsblick',
    'apt.dtl.v5': 'Innenhofblick',
    'apt.dtl.amen.h':  'Ausstattung',
    'apt.dtl.a1':  'Balkon & Terrasse',                    'apt.dtl.a2':  'Klimaanlage & Heizung',
    'apt.dtl.a3':  'Flachbildfernseher (Kabel & Satellit)','apt.dtl.a4':  'Privater Eingang',
    'apt.dtl.a5':  'Bügeleisen & Bügelbrett',             'apt.dtl.a6':  'Außenmöbel & Essbereich',
    'apt.dtl.a7':  'Gepflasterter Innenhof',              'apt.dtl.a8':  'Kleiderschrank',
    'apt.dtl.a9':  'Schlafsofa',                          'apt.dtl.a10': 'Wäscheständer',
    'apt.dtl.a11': 'Sitzbereich',                         'apt.dtl.a12': 'Separates Gebäude',
    'apt.dtl.a13': 'Obere Etage - nur Treppe',            'apt.dtl.a14': 'Rauchen erlaubt',

    'rm.hero':   'Doppelzimmer mit Balkon',
    'rm.h2':     'Gemütliches Zimmer im Herzen von Premantura',
    'rm.desc':   'Genießen Sie Ihren Aufenthalt in unserem frisch renovierten Zimmer. Erleben Sie lokales Leben, entspannen Sie auf Ihrem privaten Balkon und genießen Sie moderne Ausstattung in ruhiger Lage nahe Stränden, Geschäften und Cafés.',
    'rm.gal':    'Galerie',
    'rm.btn':    'Dieses Zimmer buchen',
    'rm.l1': '15 m², Zimmer für 2 Personen',    'rm.l2': 'Privater Balkon',
    'rm.l3': 'Privates Bad mit Dusche',         'rm.l4': 'Haartrockner & Handtücher',
    'rm.l5': 'Klimaanlage & Heizung',           'rm.l6': 'Flachbild-TV, kostenfreies WLAN',
    'rm.l7': 'Kühlschrank & Wasserkocher',      'rm.l8': 'Kleiderschrank, Bettwäsche inklusive',
    'rm.l9': 'Privater Eingang',                'rm.l10': 'Kostenfreier Parkplatz',

    /* ROOM - Detailed section */
    'rm.dtl.h2':      'Zimmerdetails',
    'rm.dtl.desc':    'Dieses klimatisierte Doppelzimmer von 15 m² verfügt über ein privates Bad mit Dusche und Haartrockner sowie eine Terrasse mit Gartenblick. Das Zimmer bietet einen Flachbildfernseher mit Kabelkanälen, privaten Eingang, Kühlschrank, Wasserkocher, Kochgeschirr und kostenloses WLAN.',
    'rm.dtl.sleep':   'Schlafplatz',
    'rm.dtl.room1':   'Doppelzimmer',      'rm.dtl.bed1': '1 großes Doppelbett',
    'rm.dtl.bath.h':  'Badezimmer',
    'rm.dtl.b1': 'Dusche',                 'rm.dtl.b2': 'Haartrockner',
    'rm.dtl.b3': 'Handtücher',             'rm.dtl.b4': 'Toilettenpapier',
    'rm.dtl.view.h':  'Aussicht',
    'rm.dtl.v1': 'Gartenblick',            'rm.dtl.v2': 'Stadtblick',
    'rm.dtl.v3': 'Sehenswürdigkeitsblick', 'rm.dtl.v4': 'Innenhofblick',
    'rm.dtl.amen.h':  'Ausstattung',
    'rm.dtl.a1':  'Balkon & Terrasse',                  'rm.dtl.a2':  'Klimaanlage & Heizung',
    'rm.dtl.a3':  'Flachbildfernseher (Kabel)',         'rm.dtl.a4':  'Privater Eingang',
    'rm.dtl.a5':  'Bügeleisen',                        'rm.dtl.a6':  'Außenmöbel & Essbereich',
    'rm.dtl.a7':  'Gepflasterter Innenhof',            'rm.dtl.a8':  'Kleiderschrank',
    'rm.dtl.a9':  'Kühlschrank',                       'rm.dtl.a10': 'Wasserkocher & Kochgeschirr',
    'rm.dtl.a11': 'Wäscheständer & Kleiderständer',    'rm.dtl.a12': 'Sitzbereich',
    'rm.dtl.a13': 'Fliesen-/Marmorböden',              'rm.dtl.a14': 'Bettwäsche inklusive',
    'rm.dtl.a15': 'Steckdose am Bett',                 'rm.dtl.a16': 'Separates Gebäude - Obergeschoss (nur Treppe)',
    'rm.dtl.a17': 'Handdesinfektionsmittel',

    'rev.hero':       'Gästebewertungen',
    'rev.stat1':      'Zufriedene Gäste',
    'rev.stat2':      'Gesamtbewertung',
    'rev.stat3':      'Lagebewertung',
    'rev.stat4':      'Sauberkeit',
    'rev.title':      'Was unsere Gäste sagen',
    'rev.sub':        'Echte Bewertungen von echten Reisenden - wir freuen uns von Ihnen zu hören!',
    'rev.cta.title':  'Bereit, eigene Erinnerungen zu schaffen?',
    'rev.cta.sub':    'Schließen Sie sich Hunderten zufriedener Gäste an, die Vila Sanja für ihren Istrien-Urlaub gewählt haben.',
    'rev.cta.btn':    'Aufenthalt buchen',

    'ct.hero':        'Kontakt',
    'ct.title':       'Nehmen Sie Kontakt auf',
    'ct.sub':         'Wir freuen uns von Ihnen zu hören. Schreiben Sie uns jederzeit!',
    'ct.block1':      'Vila Sanja',
    'ct.owners':      'Eigentümer:',
    'ct.block2':      'Lage',
    'ct.block3':      'Warum bei uns übernachten?',
    'ct.why1':        'Familiäre Atmosphäre und persönlicher Umgang mit jedem Gast',
    'ct.why2':        'Ruhige Lage, nahe Stränden und Naturpark Kap Kamenjak',
    'ct.why3':        'Kostenfreier Privatparkplatz und WLAN',
    'ct.why4':        'Terrasse und Außenbereich zum Entspannen',
    'ct.why5':        'Ideal für Familien, Paare und Naturliebhaber',
    'ct.why6':        'Gastgeber sprechen Deutsch und Englisch',
    'ct.why.p':       'Kontaktieren Sie uns noch heute und buchen Sie Ihren Urlaub in Premantura!',
    'ct.book.btn':    'Aufenthalt buchen',

    'rl.hero':        'Hausregeln',
    'rl.title':       'Hausordnung & Informationen',
    'rl.checkin.h':   'Check-in & Check-out Zeiten',
    'rl.checkin.p1':  'Check-in:',
    'rl.checkin.p2':  'Check-out:',
    'rl.checkin.note1':'Eine obligatorische Abreisekontrolle mit dem Objektmanagement ist erforderlich. Bitte koordinieren Sie Ihre Abreisezeit im Voraus.',
    'rl.checkin.note2':'Gäste müssen beim Check-in einen gültigen Lichtbildausweis vorlegen. Bitte informieren Sie Vila Sanja vorab über Ihre voraussichtliche Ankunftszeit.',
    'rl.children.h':  'Kinder & Betten',
    'rl.children.p1': 'Kinder jeden Alters sind willkommen.',
    'rl.children.p2': 'Um korrekte Preise und Belegungsinformationen zu sehen, geben Sie bitte die Anzahl und das Alter der Kinder in Ihrer Gruppe an.',
    'rl.children.h4': 'Kinderbett und Zusatzbett',
    'rl.children.l1': 'Alter 0-5: Kinderbett auf Anfrage (kostenlos)',
    'rl.children.l2': 'Keine Zusatzbetten verfügbar',
    'rl.children.l3': 'Alle Kinderbetten unterliegen der Verfügbarkeit',
    'rl.age.h':       'Altersbeschränkung',
    'rl.age.p':       'Mindestalter beim Check-in: 18 Jahre.',
    'rl.pets.h':      'Haustiere',
    'rl.pets.p':      'Haustiere sind erlaubt. Es können zusätzliche Gebühren anfallen - bitte kontaktieren Sie uns vorab.',
    'rl.pay.h':       'Zahlungsinformationen',
    'rl.pay.p':       'Die Zahlung wird direkt mit den Gastgebern vereinbart. Bitte halten Sie Bargeld für eventuelle Zusatzkosten bereit.',
    'rl.quiet.h':     'Ruhezeiten & Partys',
    'rl.quiet.p1':    'Ruhezeiten:',
    'rl.quiet.p2':    'Partys und Veranstaltungen sind nicht gestattet.',
    'rl.safety.h':    'Gesundheit & Sicherheit',
    'rl.safety.l1':   'Verstärkte Reinigungs- und Sicherheitsmaßnahmen sind in Kraft',
    'rl.safety.l2':   'Maßnahmen zum physischen Abstand gelten',
    'rl.safety.l3':   'Stellen Sie sicher, dass Ihre Buchung den örtlichen Vorschriften entspricht',
    'rl.safety.l4':   'Dieses Objekt kann nicht für Quarantänezwecke genutzt werden',
    'rl.faq.title':   'Häufig gestellte Fragen',
    'rl.faq.q1':      'Welche Unterkunftsarten gibt es in Vila Sanja?',
    'rl.faq.a1':      'Vila Sanja bietet drei Optionen: Duplex-Wohnung (bis 4+2), Einzimmer-Apartment (bis 2+2), Doppelzimmer mit Balkon (2 Personen).',
    'rl.faq.q2':      'Wie weit ist Vila Sanja vom Zentrum Premantura entfernt?',
    'rl.faq.a2':      'Vila Sanja liegt etwa 200-300 Meter vom Dorfzentrum Premantura entfernt.',
    'rl.faq.q3':      'Wie weit ist der nächste Strand?',
    'rl.faq.a3':      'Der nächste Strand ist etwa 600-900 Meter von Vila Sanja entfernt. Der Eingang zum Naturpark Kap Kamenjak ist ebenfalls in der Nähe.',
    'rl.faq.q4':      'Was kosten die Unterkünfte in Vila Sanja?',
    'rl.faq.a4':      'Die Preise variieren je nach Aufenthaltsdaten, Unterkunftsart und Gruppengröße. Aktuelle Verfügbarkeit und Preise auf Booking.com.',
    'rl.faq.q5':      'Ist Parken möglich?',
    'rl.faq.a5':      'Ja, kostenfreier Privatparkplatz steht auf dem Gelände im Innenhof zur Verfügung.',

    /* NAV - Near Us */
    'nav.nearus':   'In der Nähe',
    'nav.beaches':  'Rt Kamenjak',
    'nav.attr':     'Sehenswürdigkeiten',
    'nav.towns':    'Nahe Städte',

    /* PREMANTURA hub page */
    'prem.hero':               'Premantura & Umgebung',
    'prem.intro.p1':           'Premantura ist ein kleines, charmantes Fischerdorf an der äußersten Spitze der Halbinsel Istrien, umgeben von den kristallklaren Gewässern der Adria. Es ist die Heimat des Kaps Kamenjak, einem der schönsten Naturschutzgebiete Kroatiens, und bietet einen gemächlichen mediterranen Lebensstil abseits des Trubels.',
    'prem.intro.p2':           'Entdecken Sie, was Premantura und seine Umgebung so besonders macht:',
    'prem.card.beach.title':   'Strände am Kap Kamenjak',
    'prem.card.beach.desc':    'Über 30 versteckte Buchten, kristallklares Wasser, Klippenspringen, Wassersport und die legendäre Safari Bar. Alles für einen perfekten Strandtag.',
    'prem.card.beach.btn':     'Strände entdecken →',
    'prem.card.attr.title':    'Lokale Sehenswürdigkeiten',
    'prem.card.attr.desc':     'Antike Ruinen, mittelalterliche Festungen, Dinosaurier-Pfade, Aquaparks und mehr, Premantura und die Pula-Riviera bieten jede Menge zu sehen und zu erleben.',
    'prem.card.attr.btn':      'Sehenswürdigkeiten ansehen →',
    'prem.card.towns.title':   'Nahe Städte',
    'prem.card.towns.desc':    'Von Pulas römischer Pracht bis zur Bergmagie von Rovinj und Motovun, entdecken Sie das Beste Istriens in bequemer Fahrdistanz.',
    'prem.card.towns.btn':     'Städte entdecken →',
    'prem.stat1':              'Versteckte Buchten',
    'prem.stat2':              'Länge Kap Kamenjak',
    'prem.stat3':              'Vom Flughafen Pula',
    'prem.stat4':              'Orchideenarten im Park',
    'prem.about.title':        'Über das Dorf',
    'prem.about.p1':           'Premantura liegt am südlichsten Punkt Istriens, nur 14 km vom internationalen Flughafen Pula entfernt. Das Dorf hat rund 400 Einwohner und bewahrt die ruhige, authentische Atmosphäre einer traditionellen kroatischen Küstensiedlung, Kopfsteinpflaster, Fischerboote und frische Meeresfrüchte.',
    'prem.about.p2':           'Der Eingang zum Naturpark Kap Kamenjak ist nur eine kurze Fahrt oder Radtour entfernt, was Premantura zur idealen Basis für Naturliebhaber, Strandbesucher und all jene macht, die Istrien in eigenem Tempo erkunden möchten.',
    'prem.about.p3':           'Die Vila Sanja befindet sich direkt im Dorfzentrum, ideal gelegen für all das und noch mehr.',
    'prem.chk1':               'Supermarkt, Bäckerei & Apotheke im Dorf',
    'prem.chk2':               'Restaurants und Cafés an der Uferpromenade',
    'prem.chk3':               'Pula Stadtzentrum ~20 Min. mit dem Auto',
    'prem.chk4':               'Eingang Kap Kamenjak ~5 Min. mit dem Auto',
    'prem.chk5':               'Rovinj ~45 Min., Poreč ~1 Std. mit dem Auto',
    'prem.chk6':               'Ruhig & sicher, ideal für Familien',

    /* BEACHES page */
    'bch.hero':      'Rt Kamenjak',
    'bch.crumb':     'Rt Kamenjak',
    'bch.intro.h2':  'Kap Kamenjak - Istriens wilder Südzipfel',
    'bch.intro.p':   'Kap Kamenjak (Rt Kamenjak) ist ein Naturschutzgebiet an der südlichsten Spitze Istriens, nur 5 Minuten mit dem Auto von der Vila Sanja entfernt. Es erstreckt sich rund 5 km in die Adria und beherbergt über 30 abgelegene Buchten, kristallklares türkisfarbenes Wasser, dramatische Klippen, üppige mediterrane Vegetation und einige der schönsten Strandlokale Kroatiens. Ob entspanntes Sonnenbaden, Klippenspringen, Kajakfahren oder ein Cocktail beim Sonnenuntergang, Kamenjak hat alles.',
    'bch.intro.fig': 'Luftaufnahme der türkisfarbenen Buchten von Kap Kamenjak, die sich in die Adria erstrecken.',
    'bch.badge.rocky': 'Felsbuchten (30+)',
    'bch.badge.cliff': 'Klippenspringen',
    'bch.badge.sandy': 'Sandstrand: Mali Portić',
    'bch.badge.bars':  '8+ Strandbars',
    'bch.badge.park':  'Geschützter Naturpark',
    'bch.entry.h3':  'Einfahrt & Parken',
    'bch.entry.p':   'Fußgänger und Radfahrer haben freien Eintritt. Für Fahrzeuge ist eine Tageskarte erforderlich, erhältlich an der Einfahrtschranke (aktuelle Saisonpreise auf kamenjak.hr). Die Straße im Park beginnt als Asphalt und geht dann in unbefestigten Schotter über; das Tempolimit beträgt 20 km/h. Parkplätze sind nahe jeder Bucht ausgeschildert, und am Safari Bar gibt es einen großen Parkplatz.',
    'bch.entry.l1':  'Nehmen Sie die Karte am Eingang, sie zeigt jede Bucht, Bar und Einrichtung',
    'bch.entry.l2':  'Das Mobilfunksignal im Park ist unzuverlässig, laden Sie vorab eine Offline-Karte herunter',
    'bch.entry.l3':  'Das Tor öffnet früh morgens; wer auf dem Höhepunkt der Saison vor 10 Uhr kommt, trifft deutlich weniger Trubel',
    'bch.what.h2':   'Welche Strände erwarten Sie',
    'bch.rocky.fig': 'Eine typische Felsbucht im Karst von Kamenjak, klares Wasser, weißer Kies und vollkommene Abgeschiedenheit.',
    'bch.rocky.h3':  'Fels- und Kiesbuchten',
    'bch.rocky.p1':  'Die meisten Strände von Kamenjak sind felsig mit kleinen weißen Kiesabschnitten, typische istrische Karstküste. Das Wasser ist außergewöhnlich klar und dicht unter der Oberfläche tief, mit mehreren Metern Sichtweite an ruhigen Tagen.',
    'bch.rocky.tip': 'Wasserschuhe werden für einen bequemen Ein- und Ausstieg an Felsenbuchten dringend empfohlen.',
    'bch.sand.fig':  'Mali Portić, der einzige Sandstrand von Kap Kamenjak, schattig und familienfreundlich.',
    'bch.sand.h3':   'Mali Portić - Der Sandstrand',
    'bch.sand.p1':   'Der einzige echte Sandstrand am Kap. Er ist klein und natürlich beschattet, mit einer Strandbar direkt vor Ort. Beliebt bei Familien mit Kleinkindern, kommen Sie früh, um in der Hauptsaison einen Platz zu sichern.',
    'bch.sand.tip':  'Einer der wenigen Orte auf Kamenjak, wo Sie keine Wasserschuhe benötigen.',
    'bch.cliff.fig': 'Klippenspringen an einem der vielen Sprungpunkte von Kamenjak, die Höhen reichen von einfach bis anspruchsvoll.',
    'bch.cliff.h3':  'Klippensprung-Spots',
    'bch.cliff.p1':  'Kamenjak ist bekannt für seine Klippensprung-Bereiche mit mehreren Höhenstufen, von anfängerfreundlichen niedrigen Absätzen bis zu ernsthaften Sprüngen, die den Puls in die Höhe treiben. Einheimische und erfahrene Springer kommen hier den ganzen Sommer über zusammen.',
    'bch.cliff.tip': 'Prüfen Sie immer die Wassertiefe unten, bevor Sie springen. Tauchen Sie niemals kopfüber von einer Klippe.',
    'bch.fam.fig':   'Eine geschützte Schotterkleinstbucht nahe dem Safari Bar, ruhig und ideal für Kinder.',
    'bch.fam.h3':    'Familienfreundliche Spots',
    'bch.fam.p1':    'Mehrere Kiesbuchten bieten einen flachen Einstieg, der für Kinder geeignet ist. Suchen Sie nach Stränden in der Nähe des Safari Bar-Bereichs und Mali Portić. Das seichte, ruhige Wasser auf der Westseite des Kaps ist in der Regel sanfter als die exponierten östlichen Klippen.',
    'bch.fam.tip':   'Nehmen Sie die Eintrittskarte mit Karte, sie kennzeichnet die sanftesten Strände mit Familiensymbolen.',
    'bch.high.h2':   'Sehenswerte Highlights',
    'bch.safari.fig': 'Die legendäre Safari Bar, Holztische eingebettet in exotische mediterrane Vegetation am Meer.',
    'bch.safari.p1': 'Der ikonischste Ort auf Kap Kamenjak, und wohl eine der meistfotografierten Bars in Kroatien. Eingebettet in exotische mediterrane Vegetation, fühlt es sich an wie ein Dschungel-Versteck am Meer. Holztische sind in privaten, belaubten "Boxen" versteckt, und der Blick über die Adria ist atemberaubend.',
    'bch.safari.l1': 'Cheesecake früh bestellen, er ist schnell ausverkauft',
    'bch.safari.l2': 'Große Seilschaukeln, perfekt für Fotos',
    'bch.safari.l3': 'Hundefreundlich mit Wasserspendern vor Ort',
    'bch.safari.l4': 'Großer Parkplatz in der Nähe, am einfachsten mit dem Auto erreichbar',
    'bch.safari.l5': 'Besonders zauberhaft beim Sonnenuntergang',
    'bch.swing.fig': 'Die ikonischen Seilschaukeln der Safari Bar, ein beliebter Fotomotiv für Besucher.',
    'bch.cave.h3':   'Legendäre Felsenbuchten',
    'bch.cave.p1':   'Die dramatische Karstküste aus Kalkstein ist das Markenzeichen von Kamenjak. Viele Buchten sind nur nach einem kurzen Klettern erreichbar, was sie selbst in der Hochsaison herrlich einsam hält. Kristallklares türkisfarbenes Wasser trifft auf weißen Kalkstein - eine der fotogenischsten Küstenlandschaften der Adria.',
    'bch.cave.tip':  'Kommen Sie vor 10 Uhr, um sich die schönsten Buchten zu sichern. Wasser und Proviant mitbringen — an abgelegenen Stellen gibt es keine Einrichtungen.',
    'bch.cave.fig':  'Kristallklares türkisfarbenes Wasser zwischen weißen Kalksteinklippen an Kap Kamenjak.',
    'bch.dino.fig':  'Fossilierte Dinosaurier-Fußabdrücke, direkt im Küstenfels von Kap Kamenjak erhalten.',
    'bch.dino.h3':   'Dinosaurier-Fußabdruckpfad',
    'bch.dino.p1':   'Ein 15-20-minütiger Wanderweg durch bewaldetes Gelände führt zu fossilierten Dinosaurier-Fußabdrücken, die direkt im Küstenfels erhalten sind. Lehrreiche Tafeln entlang der Route erklären das prähistorische Leben in Istrien.',
    'bch.dino.tip':  'Der Weg ist uneben und nicht für Kinderwagen geeignet. Tragen Sie festes Schuhwerk, Flip-Flops genügen nicht.',
    'bch.act.h2':    'Aktivitäten am Kap',
    'bch.act.swim.h4':   'Schwimmen & Schnorcheln',
    'bch.act.swim.p':    'Das Wasser um Kamenjak gehört zu den klarsten in der Adria. Sichtweiten von mehreren Metern sind normal. Bringen Sie eine Schnorchelmaske, der felsige Meeresgrund ist Heimat von Seeigeln, Fischen und gelegentlich Tintenfischen.',
    'bch.act.kayak.h4':  'Kajak- & SUP-Verleih',
    'bch.act.kayak.p':   'Kajaks und Stand-up-Paddleboards können direkt am Kap gemietet werden. Das Paddeln zwischen den Buchten ist eine der schönsten Möglichkeiten, versteckte Strände zu entdecken, die zu Fuß kaum erreichbar sind.',
    'bch.act.kayak.fig': 'Das Paddeln zwischen den Buchten ist eine der besten Möglichkeiten, die versteckten Strände von Kamenjak zu entdecken.',
    'bch.act.cycle.h4':  'Radfahren',
    'bch.act.cycle.p':   'Die Einfahrt mit dem Fahrrad ist kostenlos. Das Gelände ist stellenweise anspruchsvoll, Schotterpisten und einige Hügel, daher empfiehlt sich ein Hybrid- oder Mountainbike. Fahren Sie früh morgens, um der Mittagshitze zu entgehen. Gute Kondition erforderlich.',
    'bch.act.aqua.h4':   'Aquapark',
    'bch.act.aqua.p':    'Ein aufblasbarer Wasserpark wird saisonal am Kap aufgebaut, großer Spaß für Kinder und Teenager. Aktuelle Saison-Termine und Standort erfahren Sie am Parkeingang.',
    'bch.act.sunset.fig':'Goldene Stunde am Kap Kamenjak, einer der schönsten Sonnenuntergangsplätze Istriens.',
    'bch.nat.h2':    'Natur & Tierwelt',
    'bch.nat.intro': 'Kap Kamenjak ist nicht nur wegen seiner Küste ein Naturschutzgebiet, sondern auch wegen seiner außergewöhnlichen Artenvielfalt. Bitte bleiben Sie auf markierten Wegen und pflücken Sie keine Pflanzen.',
    'bch.nat.fig':   'Wildorchideen in Blüte am Kap Kamenjak, zwei der 30+ Arten hier sind nirgendwo sonst auf der Erde zu finden.',
    'bch.nat.flora.h3': 'Außergewöhnliche Flora & Fauna',
    'bch.nat.l1':    '30+ Orchideenarten, darunter zwei endemische Arten dieses Kaps. Der Frühling ist die beste Zeit, sie in Blüte zu sehen.',
    'bch.nat.l2':    '~50 Schmetterlingsarten, eines der artenreichsten Schmetterlingshabitate Istriens. Suchen Sie in sonnigen Lichtungen zwischen den Kiefern.',
    'bch.nat.l3':    'Haifischeier (Meerjungfrauen-Geldbörsen), lederartige schwarze Beutel, die manchmal angeschwemmt werden, ein Zeichen für gesundes Meeresleben in der Nähe.',
    'bch.nat.l4':    'Seevögel & Eichhörnchen, verschiedene Seevögel brüten entlang der Klippen; Eichhörnchen werden gelegentlich im Kiefernwald gesichtet.',
    'bch.nat.note':  'Alle Pflanzen am Kap stehen unter gesetzlichem Schutz, bitte alles so lassen, wie Sie es vorgefunden haben.',
    'bch.tips.h2':   'Praktische Tipps für Ihren Besuch',
    'bch.tips.banner':    'Kaufen Sie in Premantura ein, bevor Sie das Kap betreten. Im Dorf gibt es einen Supermarkt und eine Bäckerei. Essen und Trinken im Park sind an den Bars erhältlich, die Auswahl ist jedoch begrenzt und die Preise höher, besonders zu Stoßzeiten.',
    'bch.tips.sun.h4':    'Sonnenschutz',
    'bch.tips.sun.p':     'Die meisten Buchten haben wenig oder gar keinen Schatten. Bringen Sie Sonnencreme mit hohem Lichtschutzfaktor, einen Hut und einen Sonnenschirm mit. Meiden Sie den Strand zwischen 12:00 und 15:00 Uhr im Juli und August.',
    'bch.tips.shoes.h4':  'Schuhwerk',
    'bch.tips.shoes.p':   'Wasserschuhe für felsige Strandabschnitte, und festes Schuhwerk wenn Sie den Dinosaurierpfad begehen oder die Innenwege erkunden möchten. Flip-Flops sind für die Bars in Ordnung.',
    'bch.tips.mobile.h4': 'Mobilfunk & Karten',
    'bch.tips.mobile.p':  'Das Mobilfunksignal ist in vielen Teilen des Kaps schwach oder nicht vorhanden. Laden Sie eine Offline-Karte herunter, bevor Sie ankommen, und nehmen Sie eine Papierkarte an der Einfahrtschranke.',
    'bch.tips.time.h4':   'Die besten Besuchszeiten',
    'bch.tips.time.p':    'Früher Morgen (vor 10 Uhr) oder später Nachmittag sind die besten Zeiten, kühler, ruhiger, und das Licht für Fotos ist beim Sonnenuntergang wunderschön. Wochentage sind im Juli-August weniger überfüllt als Wochenenden.',
    'bch.tips.bring.h4':  'Was mitnehmen',
    'bch.tips.bring.l1':  'Viel Wasser',
    'bch.tips.bring.l2':  'Snacks aus dem Dorf',
    'bch.tips.bring.l3':  'Wasserdichte Handyhülle',
    'bch.tips.bring.l4':  'Schnorchelmaske',
    'bch.tips.bring.l5':  'Sonnenschirm',
    'bch.tips.getting.h4':'Anreise von der Vila Sanja',
    'bch.tips.getting.p': 'Der Eingang zum Kap Kamenjak ist etwa 5 Minuten mit dem Auto von der Vila Sanja entfernt. Folgen Sie den Schildern für "Rt Kamenjak" vom Dorf aus. Mit dem Fahrrad ist es möglich, erfordert aber Kondition, die Strecke im Park hat unebenes Gelände.',
    'bch.cta.p':     'Mit einem Aufenthalt in der Vila Sanja sind Sie nur wenige Minuten von all dem entfernt.',
    'bch.cta.book':  'Aufenthalt buchen →',
    'bch.back':      'Zurück zu Premantura',
    'bch.cta.btn':   'Kontaktieren Sie uns zur Reiseplanung',

    /* ATTRACTIONS page */
    'atr.hero':          'Lokale Sehenswürdigkeiten',
    'atr.crumb':         'Lokale Sehenswürdigkeiten',
    'atr.intro':         'Premantura liegt nur 14 km von Pula entfernt, einer der kulturell und historisch reichsten Städte Kroatiens. Hier finden Sie einen Leitfaden zu den besten Sehenswürdigkeiten der Region, von 2.000 Jahre alten römischen Monumenten über wilde Naturparks bis zu weltbekannten Filmfestivals.',
    'atr.cat.roman':     'Römisches Pula & historische Stätten',
    'atr.arena.fig':     'Die Pula-Arena, eines der besterhaltenen römischen Amphitheater der Welt.',
    'atr.arena.p':       'Eines der sechs größten römischen Amphitheater der Welt und das besterhaltene in Kroatien. Im 1. Jahrhundert n. Chr. erbaut, fasst es 23.000 Besucher und beherbergt heute das Pula Film Festival und große Konzerte. Ein Muss.',
    'atr.arena.loc':     'Stadtzentrum Pula · ~20 Min. mit dem Auto',
    'atr.forum.p':       'Der zentrale Platz des römischen Pula, seit 2.000 Jahren ununterbrochen in Nutzung. Flankiert vom Augustustempel und dem Rathaus, das Herzstück der Altstadt.',
    'atr.august.p':      'Ein bemerkenswert gut erhaltener römischer Tempel aus dem 1. Jahrhundert v. Chr., gewidmet der Göttin Roma und Kaiser Augustus. Liegt am Forum.',
    'atr.arch.p':        'Der Bogen der Sergier ("Goldenes Tor"), ein Triumphbogen aus 29-27 v. Chr. am Eingang zur Altstadt. Einer der ältesten und besterhaltenen römischen Bögen der Welt.',
    'atr.hercules.p':    'Das Herkulestor, das älteste römische Denkmal in Pula aus dem 1. Jahrhundert v. Chr. Ein einbogiges Tor mit einem gemeißelten Herkuleskopf über dem Bogen.',
    'atr.kastel.p':      'Die venezianische Festung, im 17. Jahrhundert an der Stelle des ursprünglichen römischen Kapitols erbaut, mit Panoramablick über Pula und den Hafen. Beherbergt das Historische Museum Istriens.',
    'atr.baptistery.p':  'Baptisterium der Heiligen Dreifaltigkeit, eine frühchristliche Rotunde aus dem 6. Jahrhundert, eines der schönsten Beispiele frühbyzantinischer Architektur in Istrien.',
    'atr.walls.p':       'Die römischen und mittelalterlichen Stadtmauern und -tore von Pula, die die Altstadt umschließen. Mehrere Türme und Torpassagen sind erhalten und können besichtigt werden.',
    'atr.cat.nature':    'Natur & Outdoor',
    'atr.np.badge':      'Nationalpark',
    'atr.brijuni.p':     'Der Nationalpark Brijuni, ein Archipel aus 14 Inseln mit römischen Ruinen, einem Safaripark mit exotischen Tieren, unberührten Stränden und Titos berühmter Sommerresidenz. Mit der Fähre von Fažana erreichbar.',
    'atr.vizula.p':      'Eine malerische Halbinsel bei Medulin mit einem Archäologiepark, der Überreste einer römischen Villa rustica und einer frühchristlichen Basilika freigelegt hat, umgeben von Wanderwegen und Meerblick.',
    'atr.zlatni.p':      'Waldpark Goldenes Kap in Rovinj, ein beliebter Küstenwald mit Wander- und Radwegen durch Kiefern und Zypressen, die in schönen Felsbuchten an der Adria enden.',
    'atr.palud.p':       'Palud-Sumpf, ein ornithologisches Reservat bei Rovinj, eines der wichtigsten Feuchtbiotope Kroatiens. Heimat seltener Vögel, Libellen und vielfältiger Flora. Ein verborgenes Juwel für Naturliebhaber.',
    'atr.sestrice.p':    'Die Zwei-Schwestern-Inseln, ein Paar kleiner unbewohnter Inseln vor der Küste bei Premantura. Ein beliebtes Ziel für Bootsausflüge, Schnorcheln und ruhiges Schwimmen in klarem Wasser.',
    'atr.cat.hidden':    'Versteckte Schätze',
    'atr.fantazija.p':   'Fantazija-Steinbruch, ein dramatischer verlassener Kalksteinbruch, der zu einer einzigartigen Naturattraktion geworden ist: türkisfarbenes Wasser, senkrechte Felswände und eine surreale Landschaft, perfekt für Fotos und Schwimmen.',
    'atr.dvigrad.p':     'Eine bemerkenswert gut erhaltene mittelalterliche Geisterstadt in Zentralistrien, im 17. Jahrhundert verlassen. Ihre Türme, Mauern und Kirchenruinen erheben sich aus dem Wald, eine der stimmungsvollsten Stätten Istriens.',
    'atr.standrija.p':   'Eine romantische Burgruine auf der Insel Sv. Andrija, nur per Boot zugänglich. Die überwucherte Festung bietet mystische Atmosphäre und wunderschöne Ausblicke auf das umliegende Meer und die Küste.',
    'atr.cat.events':    'Events & Kultur',
    'atr.filmfest.p':    'Kroatiens ältestes und renommiertestes Filmfestival, das jeden Juli in der Pula-Arena stattfindet. Einen Film unter den Sternen in einem 2.000 Jahre alten Amphitheater zu sehen ist ein unvergessliches Erlebnis.',
    'atr.pulanight.p':   'Pula Nacht, eine beliebte Sommerabendveranstaltung, bei der sich die Altstadtstraßen mit Musik, Künstlern, Essensständen und Kultur füllen. Ein lebendiges Fest des Stadterbes.',
    'atr.gourmet.p':     'Eine Feier der istrischen Küche, Trüffel, Olivenöl, Wein, Meeresfrüchte und lokale Köstlichkeiten. Saisonale Märkte und Restaurantevents lassen Sie das Beste der istrischen Halbinsel kosten.',
    'atr.handmade.p':    'Eine Handwerksmesse für lokale Handwerker und handgemachte Produkte aus ganz Istrien, Schmuck, Keramik, Textilien, Lebensmittelprodukte und traditionelles Handwerk. Ein großartiger Ort für authentische Souvenirs.',
    'atr.back':          '← Zurück zu Premantura',
    'atr.bch.btn':       'Strände erkunden',

    /* TOWNS page */
    'twn.hero':          'Nahe Städte',
    'twn.intro':         'Die Vila Sanja ist ideal gelegen, um die südliche Spitze Istriens und darüber hinaus zu erkunden. Nachfolgend finden Sie die Orte und Dörfer, die Premantura am nächsten liegen, Entfernungen von der Vila Sanja aus gemessen.',
    'twn.medulin.desc':  'Der nächste Ferienort mit einem langen Sandstrand, einer belebten Promenade, Restaurants und einem Supermarkt. Ideal für einen Abendspaziergang oder einen größeren Einkauf.',
    'twn.banjole.desc':  'Ein ruhiges Fischerdorf an der südlichen istrischen Küste. Kleiner Hafen, einige Konobas und entspannte Atmosphäre, ideal für eine kurze Radtour von der Vila Sanja.',
    'twn.liznjan.desc':  'Ein kleines Dorf mit lokalem Charme, umgeben von Olivenhainen und Weinbergen. In der Nähe mehrerer Kiesbuchten und der Küstenlinie der Bucht von Ližnjan-Medulin.',
    'twn.pula.desc':     'Die Hauptstadt Istriens, Heimat eines der besterhaltenen römischen Amphitheater der Welt. Ebenfalls sehenswert: das Forum, der Augustustempel, der Triumphbogen und die Altstadt. Internationaler Flughafen in der Nähe.',
    'twn.stinjan.desc':  'Ein Küstenvorort nordwestlich von Pula mit einem beliebten Strand und Campingplatz. Einfacher Zugang zu Pulas Annehmlichkeiten bei Unterkunft am Wasser.',
    'twn.muntic.desc':   'Ein kleines istrisches Binnenlanddorf, umgeben von Ackerland und typischer istrischer Landschaft. Ein Einblick in die ruhigere, ländliche Seite der Halbinsel.',
    'twn.valbandon.desc':'Eine Küstensiedlung bei Fažana mit einer ruhigen Bucht, Campingplätzen und einfachem Zugang zur Brijuni-Fähre. Beliebt bei Familien und Seglern.',
    'twn.fazana.desc':   'Ein charmantes Fischerstädtchen und die wichtigste Abfahrtsstelle für den Nationalpark Brijuni. Schöne Hafenpromenade, frische Meeresfrüchte-Restaurants und ein lebhafter lokaler Markt.',
    'twn.brijuni.desc':  'Ein Nationalpark-Archipel aus 14 Inseln vor Fažana, bekannt für seinen Safaripark, römische Ruinen und als ehemaliger Sommersitz des jugoslawischen Staatschefs Tito. Mit der Fähre von Fažana erreichbar.',
    'twn.vodnjan.desc':  'Bekannt für seine außergewöhnlich gut erhaltenen mumifizierten Heiligen in der Kirche des Hl. Blasius, eine der ungewöhnlichsten Sehenswürdigkeiten Istriens. Die Altstadt besticht durch venezianische Architektur und Trüffelläden.',
    'twn.peroj.desc':    'Ein ruhiges Dorf mit interessanter Geschichte, im 17. Jahrhundert von montenegrinischen Familien besiedelt, mit eigener orthodoxer Kirche. In der Nähe des Strandes von Peroj und mit Blick auf die Brijuni-Inseln.',
    'twn.soon.h2':    'Weitere Inhalte folgen bald',
    'twn.soon.p':     'Wir bereiten einen Leitfaden zu den besten Städten in der Nähe von Premantura vor, darunter Pula (Römisches Amphitheater, 20 Min.), Rovinj (45 Min.), Poreč (1 Std.), Motovun und andere istrische Bergstädte.',
    'twn.back':       '← Zurück zu Premantura',
    'twn.bch.btn':    'Strände erkunden',

    /* SHARED - Map links */
    'map.view':       ' Auf der Karte anzeigen',
    'map.venue':      ' Veranstaltungsort auf der Karte',
    'map.area':       ' Gebiet auf der Karte',
    'bch.map.cape':   ' Rt Kamenjak auf der Karte anzeigen',
    'bch.map.mali':   ' Mali Portić auf der Karte anzeigen',

    /* BOOKING page */
    'bk.hero':         'Aufenthalt buchen',
    'bk.title':        'Wie möchten Sie buchen?',
    'bk.sub':          'Wählen Sie die Option, die am besten zu Ihnen passt - wir freuen uns auf Ihren Besuch!',
    'bk.online.title': 'Über Booking.com buchen',
    'bk.online.desc':  'Sichere, sofortige Online-Buchung. Verwalten Sie Ihre Reservierung jederzeit.',
    'bk.online.l1':    'Sofortige Bestätigung',
    'bk.online.l2':    'Sichere Zahlung',
    'bk.online.l3':    'Einfache Stornierung',
    'bk.online.l4':    'Beste verfügbare Preise',
    'bk.online.btn':   'Auf Booking.com buchen',
    'bk.direct.title': 'Direkt kontaktieren',
    'bk.direct.desc':  'Bevorzugen Sie persönlichen Service? Kontaktieren Sie uns für Sonderwünsche, flexible Termine oder Fragen.',
    'bk.direct.l1':    'Persönlicher Service',
    'bk.direct.l2':    'Flexible Absprachen',
    'bk.direct.l3':    'Sonderwünsche willkommen',
    'bk.direct.l4':    'Wir sprechen EN & DE',
    'bk.direct.btn':   'Kontaktseite ansehen',
  }
};

/* ── Engine ── */
function applyLang(lang) {
  if (!LANG_DATA[lang]) lang = 'en';
  const T = LANG_DATA[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    /* Cache original English HTML before first substitution */
    if (!('i18nOrig' in el.dataset)) el.dataset.i18nOrig = el.innerHTML;

    if (lang === 'en') {
      el.innerHTML = el.dataset.i18nOrig;   /* restore original markup */
    } else {
      const v = T[el.dataset.i18n];
      if (v !== undefined) el.textContent = v;
    }
  });

  /* Update the nav dropdown label */
  const toggle = document.getElementById('lang-current');
  if (toggle) {
    const label = Array.from(toggle.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
    if (label) label.textContent = lang.toUpperCase();
  }

  /* Highlight active language in dropdown */
  document.querySelectorAll('.lang-option').forEach(a =>
    a.classList.toggle('active', a.dataset.lang === lang)
  );

  try { localStorage.setItem('vs-lang', lang); } catch (e) {}
  document.documentElement.lang = lang;
}

function parseRatingText(text) {
  if (!text) return null;
  const regexes = [
    /(\d+(?:\.\d+)?)\s*(?:\/\s*5|out of 5|stars?)/i,
    /overall rating(?: is|:)?\s*(\d+(?:\.\d+)?)/i,
    /rating(?: is|:)?\s*(\d+(?:\.\d+)?)/i,
  ];
  for (const rx of regexes) {
    const match = text.match(rx);
    if (match) return match[1];
  }
  return null;
}

function attemptUpdateGuestRatingFromElfsight() {
  const target = document.getElementById('guest-rating-value');
  if (!target) return false;
  const app = document.querySelector('.elfsight-app-8ae2e8e5-09be-43ec-853b-b421f041f45c');
  if (!app) return false;

  const rating = parseRatingText(app.textContent || '');
  if (rating) {
    if (target.firstChild && target.firstChild.nodeType === Node.TEXT_NODE) {
      target.firstChild.textContent = rating;
    } else {
      target.insertBefore(document.createTextNode(rating), target.firstChild);
    }
    target.dataset.updated = 'true';
    return true;
  }

  const iframes = app.querySelectorAll('iframe');
  for (const iframe of iframes) {
    try {
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!doc?.body) continue;
      const innerRating = parseRatingText(doc.body.textContent || '');
      if (innerRating) {
        if (target.firstChild && target.firstChild.nodeType === Node.TEXT_NODE) {
          target.firstChild.textContent = innerRating;
        } else {
          target.insertBefore(document.createTextNode(innerRating), target.firstChild);
        }
        target.dataset.updated = 'true';
        return true;
      }
    } catch (error) {
      // cross-origin iframe access may be blocked
    }
  }
  return false;
}

function scheduleGuestRatingUpdate(retries = 12, delay = 500) {
  if (attemptUpdateGuestRatingFromElfsight()) return;
  if (retries > 0) {
    setTimeout(() => scheduleGuestRatingUpdate(retries - 1, delay), delay);
  }
}

function observeElfsightRating() {
  const app = document.querySelector('.elfsight-app-8ae2e8e5-09be-43ec-853b-b421f041f45c');
  if (!app) return;
  const observer = new MutationObserver(() => {
    if (attemptUpdateGuestRatingFromElfsight()) observer.disconnect();
  });
  observer.observe(app, { childList: true, subtree: true, characterData: true });
}

document.addEventListener('DOMContentLoaded', () => {
  let lang = 'en';
  try { lang = localStorage.getItem('vs-lang') || 'en'; } catch (e) {}
  applyLang(lang);

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        menuToggle.click();
      }
    });
    const syncMenuState = () => {
      const isOpen = nav.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      if (!isOpen) {
        document.querySelectorAll('nav .dropdown').forEach(item => {
          item.classList.remove('mob-open', 'lang-open');
          const toggle = item.querySelector('.dropdown-toggle');
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
          item.querySelector('.dropdown-menu').style.display = '';
        });
      }
    };
    syncMenuState();
    window.addEventListener('pageshow', () => {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
      const header = document.getElementById('site-header');
      if (header) header.style.transform = '';
      syncMenuState();
    });
    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape') return;
      const wasOpen = nav.classList.contains('active');
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
      syncMenuState();
      if (wasOpen) menuToggle.focus();
    });
    window.matchMedia('(max-width: 1200px)').addEventListener('change', () => {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
      document.querySelectorAll('nav .dropdown-menu').forEach(menu => { menu.style.display = ''; });
      document.querySelectorAll('nav .lang-open, nav .mob-open').forEach(item => {
        item.classList.remove('lang-open', 'mob-open');
      });
      const header = document.getElementById('site-header');
      if (header) header.style.transform = '';
      syncMenuState();
    });
    new MutationObserver(syncMenuState).observe(nav, { attributes: true, attributeFilter: ['class'] });
  }

  const langToggle = document.getElementById('lang-current');
  if (langToggle) {
    const langLi = langToggle.closest('li.dropdown');
    langToggle.setAttribute('aria-haspopup', 'true');
    langToggle.setAttribute('aria-expanded', 'false');
    langToggle.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      langLi.classList.toggle('lang-open');
      langToggle.setAttribute('aria-expanded', String(langLi.classList.contains('lang-open')));
    });

    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', e => {
        e.preventDefault();
        applyLang(opt.dataset.lang);
        langLi.classList.remove('lang-open');
        const mT = document.querySelector('.menu-toggle');
        const mN = document.querySelector('nav');
        if (mT) mT.classList.remove('active');
        if (mN) mN.classList.remove('active');
      });
    });

    document.addEventListener('click', e => {
      if (!langLi.contains(e.target)) {
        langLi.classList.remove('lang-open');
        langToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  scheduleGuestRatingUpdate();
  observeElfsightRating();

  // Back to top button
  const bttBtn = document.getElementById('back-to-top-btn');
  if (bttBtn) {
    window.addEventListener('scroll', function() {
      bttBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    bttBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile navbar hide on scroll (only on small screens)
  (function() {
    var hdr = document.getElementById('site-header');
    if (!hdr) return;
    var lastY = window.scrollY;
    window.addEventListener('scroll', function() {
      if (window.innerWidth > 1200) { hdr.style.transform = ''; return; }
      var y = window.scrollY;
      const interacting = document.querySelector('nav.active') || document.documentElement.classList.contains('consent-open');
      hdr.style.transform = (!interacting && y > lastY && y > 80) ? 'translateY(-100%)' : '';
      lastY = y;
    }, { passive: true });
  })();

  // Copyright year auto-update
  document.querySelectorAll('.footer-copy').forEach(function(el) {
    el.innerHTML = el.innerHTML.replace(/\b20\d{2}\b/, new Date().getFullYear());
  });

  // Clipboard permissions can fail or change while this page is open.
  document.querySelectorAll('.copy-email-btn').forEach(function(btn) {
    let pending = false;
    let resetTimer;
    const status = document.createElement('span');
    status.className = 'copy-status';
    status.setAttribute('role', 'status');
    btn.after(status);
    btn.addEventListener('click', async function() {
      if (pending) return;
      pending = true;
      clearTimeout(resetTimer);
      const icon = btn.querySelector('i');
      const labels = {
        en: ['Email copied.', 'Copy unavailable. Select and copy the email address.'],
        hr: ['E-adresa kopirana.', 'Kopiranje nije dostupno. Označite i kopirajte e-adresu.'],
        de: ['E-Mail-Adresse kopiert.', 'Kopieren nicht verfügbar. E-Mail-Adresse markieren und kopieren.']
      };
      const text = labels[document.documentElement.lang] || labels.en;
      try {
        await navigator.clipboard.writeText(btn.dataset.email || '');
        btn.classList.add('copied');
        if (icon) icon.className = 'fa-solid fa-check';
        status.textContent = text[0];
      } catch (error) {
        btn.classList.remove('copied');
        if (icon) icon.className = 'fa-solid fa-copy';
        status.textContent = text[1];
        const link = btn.parentNode.querySelector('a[href^="mailto:"]');
        if (link) {
          const range = document.createRange();
          range.selectNodeContents(link);
          const selection = window.getSelection();
          selection.removeAllRanges();
          selection.addRange(range);
        }
      } finally {
        pending = false;
        resetTimer = setTimeout(() => {
          btn.classList.remove('copied');
          if (icon) icon.className = 'fa-solid fa-copy';
          status.textContent = '';
        }, 4000);
      }
    });
  });

  // Dark mode toggle
  let savedTheme = 'light';
  try { savedTheme = localStorage.getItem('vs-theme') || 'light'; } catch (e) {}
  document.documentElement.setAttribute('data-theme', savedTheme);

  const darkBtn = document.getElementById('dark-mode-btn');
  if (darkBtn) {
    updateDarkIcon(darkBtn, savedTheme);
    darkBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('vs-theme', next); } catch (e) {}
      updateDarkIcon(darkBtn, next);
    });
  }
});

/* === SWIPE SUPPORT === */
function addSwipe(el, onLeft, onRight) {
  var startX = null, startY = null;
  el.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });
  el.addEventListener('touchcancel', function() {
    startX = null; startY = null;
  }, { passive: true });
  el.addEventListener('touchend', function(e) {
    if (startX === null) return;
    var dx = e.changedTouches[0].clientX - startX;
    var dy = e.changedTouches[0].clientY - startY;
    startX = null; startY = null;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return; /* ignore taps and vertical scrolls */
    if (dx < 0) onLeft(); else onRight();
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', function() {
  /* ── Mobile nav dropdowns ── */
  function closeMobDropdowns() {
    document.querySelectorAll('nav li.dropdown.mob-open').forEach(function(li) {
      li.classList.remove('mob-open');
      li.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
    });
  }

  document.querySelectorAll('nav li.dropdown > a.dropdown-toggle').forEach(function(toggle) {
    if (toggle.id === 'lang-current') return; /* lang toggle has its own handler */
    toggle.setAttribute('aria-haspopup', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', function(e) {
      if (window.innerWidth > 1200) return; /* CSS hover handles desktop */
      var li = toggle.closest('li.dropdown');
      if (li.classList.contains('mob-open')) {
        /* second tap → navigate */
        return;
      }
      /* first tap → open submenu, stay on page */
      e.preventDefault();
      closeMobDropdowns();
      li.classList.add('mob-open');
      toggle.setAttribute('aria-expanded', 'true');
    });
  });

  /* Clear mob-open when the sidebar nav closes */
  var navEl = document.querySelector('nav');
  if (navEl) {
    new MutationObserver(function() {
      if (!navEl.classList.contains('active')) closeMobDropdowns();
    }).observe(navEl, { attributes: true, attributeFilter: ['class'] });
  }

  /* ── Room gallery ── */
  var galleryMain = document.querySelector('.gallery-main');
  if (galleryMain) {
    addSwipe(
      galleryMain,
      function() { var b = document.querySelector('.gallery-arrow.right'); if (b) b.click(); },
      function() { var b = document.querySelector('.gallery-arrow.left');  if (b) b.click(); }
    );
  }

  /* ── Lightbox ── */
  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    addSwipe(
      lightbox,
      function() { var b = document.getElementById('lbNext'); if (b) b.click(); },
      function() { var b = document.getElementById('lbPrev'); if (b) b.click(); }
    );
  }

  /* ── Index slideshow ── */
  var slideshowWrap = document.querySelector('.slideshow-wrap');
  if (slideshowWrap) {
    addSwipe(
      slideshowWrap,
      function() { if (slideshowWrap._slideNext) slideshowWrap._slideNext(); },
      function() { if (slideshowWrap._slidePrev) slideshowWrap._slidePrev(); }
    );
  }
});

/* === REVEAL ON SCROLL === */
(function () {
  const SELECTORS = [
    '.card', '.info-card', '.about-card', '.rule-card',
    '.contact-block', '.booking-card', '.host-box',
    '.attr-card', '.beach-tip-card', '.town-card',
    '.preman-hub-card', '.apt-sleep-card', '.apt-amen-col',
    '.about-flex', '.room-intro', '.zigzag-row',
    '.stats-bar', '.beach-highlight', '.faq-item',
    '.section-title', '.divider',
    '.features-bar .feat-chip',
  ].join(', ');

  function initReveal() {
    const els = Array.from(document.querySelectorAll(SELECTORS));
    if (!els.length) return;

    /* stagger siblings that share the same direct parent */
    const byParent = new Map();
    els.forEach(el => {
      const p = el.parentElement;
      if (!byParent.has(p)) byParent.set(p, []);
      byParent.get(p).push(el);
    });
    byParent.forEach(siblings => {
      if (siblings.length > 1) {
        siblings.forEach((el, i) => { el.style.transitionDelay = i * 75 + 'ms'; });
      }
    });

    els.forEach(el => el.classList.add('reveal'));

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add('visible');
        /* clear stagger delay once animation finishes so hover transitions stay snappy */
        el.addEventListener('transitionend', () => { el.style.transitionDelay = ''; }, { once: true });
        io.unobserve(el);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -24px 0px' });

    els.forEach(el => io.observe(el));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
})();

/* A slow, spatial ripple bends the floral artwork without moving its container. */
(function initFloralWind() {
  function init() {
    if (!document.querySelector('.deco')) return;
    const motion = window.matchMedia('(prefers-reduced-motion: no-preference)');
    let svg;
    function sync() {
      if (!motion.matches) {
        if (svg) svg.remove();
        svg = null;
        return;
      }
      if (!svg) {
        svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '0');
        svg.setAttribute('height', '0');
        svg.setAttribute('aria-hidden', 'true');
        svg.style.position = 'absolute';
        svg.style.pointerEvents = 'none';
        svg.innerHTML = `<defs>
          <filter id="floral-wind-left" x="-15%" y="-10%" width="130%" height="120%" color-interpolation-filters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.007" numOctaves="1" seed="8" result="wind">
              <animate attributeName="baseFrequency" values="0.012 0.007;0.009 0.009;0.014 0.006;0.012 0.007" dur="19s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.33;0.67;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="wind" scale="7" xChannelSelector="R" yChannelSelector="G">
              <animate attributeName="scale" values="7;12;6;10;7" dur="13s" repeatCount="indefinite"/>
            </feDisplacementMap>
          </filter>
          <filter id="floral-wind-right" x="-15%" y="-10%" width="130%" height="120%" color-interpolation-filters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.010 0.008" numOctaves="1" seed="21" result="wind">
              <animate attributeName="baseFrequency" values="0.010 0.008;0.014 0.006;0.009 0.010;0.010 0.008" dur="23s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.33;0.67;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="wind" scale="9" xChannelSelector="R" yChannelSelector="G">
              <animate attributeName="scale" values="9;6;11;7;9" dur="17s" repeatCount="indefinite"/>
            </feDisplacementMap>
          </filter>
        </defs>`;
        document.body.appendChild(svg);
      }
      if (document.hidden) svg.pauseAnimations();
      else svg.unpauseAnimations();
    }
    sync();
    motion.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

function updateDarkIcon(btn, theme) {
  const icon  = btn.querySelector('i');
  const label = btn.querySelector('.dm-label');
  if (theme === 'dark') {
    if (icon)  icon.className = 'fa-solid fa-sun';
    if (label) label.textContent = 'Light mode';
    btn.setAttribute('aria-label', 'Switch to light mode');
  } else {
    if (icon)  icon.className = 'fa-solid fa-moon';
    if (label) label.textContent = 'Dark mode';
    btn.setAttribute('aria-label', 'Switch to dark mode');
  }
}
