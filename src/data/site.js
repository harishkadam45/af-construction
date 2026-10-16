export const phone = { href: 'tel:+13104248000', label: '(310) 424-8000' };
export const instagram = 'https://www.instagram.com/alex_af_construction/';
export const yelp = 'https://www.yelp.com/biz/af-construction-los-angeles-4';
export const legalUpdated = 'October 16, 2026';

export const legal = [
 ['/privacy-policy/', 'Privacy Policy'],
 ['/terms-and-conditions/', 'Terms & Conditions'],
 ['/cookie-policy/', 'Cookie Policy'],
];

// Machine-readable files: shown as plain footer text (not links); crawlers find them via robots.txt and <head> tags
export const machineFiles = ['Sitemap', 'RSS', 'Robots.txt'];

export const nav = [
 ['/', 'Home'],
 ['/services/', 'Services'],
 ['/projects/', 'Projects'],
 ['/about/', 'About us'],
 ['/contact/', 'Contact us'],
];

export const services = [
 ['01','Design & planning','A thoughtful start. A stronger finish.',['Architectural design','Structural design','Permit processing']],
 ['02','Ground-up construction','Built with care, from the ground up.',['Excavation','Compaction','Foundations','Framing']],
 ['03','Home systems','The essentials behind a comfortable home.',['Electrical','Plumbing','Heating & air conditioning']],
 ['04','Cabinetry & improvements','Details that bring a space together.',['Custom cabinetry','Cabinet installation & repair','Home improvements']],
];

// Longer copy and a job-site photo for each service on the Services page
export const serviceDetails = {
 'Design & planning': ['finished-exterior-patio','Finished stucco exterior with black-framed windows','Every good build starts on paper. We work through architectural and structural design with you, then handle permit processing so your project starts on solid ground.'],
 'Ground-up construction': ['framing-crew','Crew framing a house in Pacific Palisades','From clearing and excavating the lot to compaction, foundations and framing, we manage the heavy work that turns an empty site into a home.'],
 'Home systems': ['concrete-pour','Crew pouring a concrete slab over rebar','Electrical, plumbing, heating and air conditioning: the systems you rely on every day, planned and installed to keep your home running comfortably.'],
 'Cabinetry & improvements': ['modern-kitchen','Modern kitchen with a marble waterfall island and custom cabinetry','Custom cabinetry, installation and repair, and the home improvements that make a space feel finished and truly yours.'],
};

// Photos and reels from https://www.instagram.com/alex_af_construction/
export const photos = [
 ['alex-new-build','Alex Nouri on site at a new ground-up home','New construction'],
 ['modern-kitchen','Modern kitchen with a marble waterfall island and custom cabinetry','Kitchen & cabinetry'],
 ['finished-exterior-patio','Finished stucco exterior with black-framed windows','Exterior finish'],
 ['framing-crew','Crew framing a house in Pacific Palisades','Framing'],
 ['lumber-framing','Lumber framing for a new structure','Framing'],
 ['concrete-pour','Crew pouring a concrete slab over rebar','Concrete & slab'],
 ['foundation-rebar','Rebar and forms prepared for a foundation','Foundations'],
 ['concrete-truck','Concrete mixer and pump on a job site','Concrete & slab'],
 ['hillside-excavation','Excavator working on a hillside site','Excavation'],
 ['lot-clearing','Excavator clearing a lot for new construction','Site clearing'],
 ['excavator-loading','Excavator loading debris on a job site','Excavation'],
 ['demolition-apartment','Excavator demolishing an apartment building','Demolition'],
];

export const reels = [
 ['Dd5l1ffByUD','New ground-up construction'],
 ['DXGZzjvjmcu','Kitchen design and build'],
 ['DCKvIsoudw8','Framing a house in Pacific Palisades'],
 ['DMp9rgAxSaV','Demolishing an apartment building'],
];

export const process = [
 ['01','Tell us your vision','Share your goals, your space, and the work you have in mind.'],
 ['02','Explore the possibilities','Talk through scope, design considerations, and the next steps with Alex.'],
 ['03','Bring it to life','Agree on a plan, then move toward a space made for the way you live.'],
];

// Verified business details, shared by page metadata, structured data and llms.txt
export const business = {
 name: 'AF Construction',
 owner: 'Alex Nouri',
 description: 'AF Construction is a Los Angeles general contractor led by Alex Nouri, offering design and planning, ground-up construction, electrical, plumbing, HVAC and custom cabinetry.',
 telephone: '+1-310-424-8000',
 locality: 'Los Angeles',
 region: 'CA',
 postalCode: '90001',
 country: 'US',
 geo: { latitude: 34.0522, longitude: -118.2437 },
 areaServed: ['Los Angeles', 'Pacific Palisades', 'Malibu', 'Los Angeles County'],
 hours: [
  { days: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '19:00' },
  { days: ['Saturday'], opens: '10:00', closes: '18:00' },
 ],
 image: '/images/projects/modern-kitchen.jpg',
};

// Intrinsic sizes of project photos, so browsers reserve space before they load
export const imageSizes = {
 'alex-new-build': [470, 790], 'modern-kitchen': [640, 476], 'finished-exterior-patio': [504, 896],
 'framing-crew': [432, 768], 'lumber-framing': [504, 896], 'concrete-pour': [504, 896],
 'foundation-rebar': [504, 896], 'concrete-truck': [504, 896], 'hillside-excavation': [432, 768],
 'lot-clearing': [1320, 2347], 'excavator-loading': [504, 896], 'demolition-apartment': [504, 896],
};

// Short, direct answers for people and answer engines (shown on the Services page)
export const faqs = [
 ['What services does AF Construction offer in Los Angeles?', 'AF Construction offers design and planning (architectural design, structural design and permit processing), ground-up construction (excavation, compaction, foundations and framing), home systems (electrical, plumbing, heating and air conditioning) and cabinetry and home improvements, including custom cabinetry and cabinet installation and repair.'],
 ['Does AF Construction build new homes from the ground up?', 'Yes. AF Construction handles ground-up construction, from clearing and excavating the lot through compaction, foundations and framing.'],
 ['Can AF Construction help with permits?', 'Yes. Permit processing is part of AF Construction’s design and planning service, alongside architectural and structural design.'],
 ['Which areas does AF Construction serve?', 'AF Construction is based in Los Angeles, California, and serves Los Angeles and the surrounding area, with recent job sites in Pacific Palisades and Malibu.'],
 ['How do I get a free estimate from AF Construction?', 'Call Alex at (310) 424-8000 for a free estimate. You can also prepare your project details on the Contact page and send them through Yelp.'],
 ['What are AF Construction’s business hours?', 'AF Construction is open Monday to Friday from 7 am to 7 pm and Saturday from 10 am to 6 pm. It is closed on Sunday.'],
 ['Who runs AF Construction?', 'AF Construction is led by Alex Nouri, who works directly with clients from the first conversation through planning and construction.'],
];
