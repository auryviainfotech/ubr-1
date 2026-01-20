// NOTE: Next.js serves static assets from /public.
// Move your existing `photos/` folder into `public/photos/` so these paths work:
// Example: `public/photos/Balcony_cam_highres.jpg`
const balconyHero = "/photos/Balcony_cam_highres.jpg";
const elevationAerial = "/photos/Elevation_Aerial.png";
const swimmingPoolAerial = "/photos/Swimming Pool Aerial.jpg";
const rooftopLounge = "/photos/Rooftop_lounge_Final.png";
const sunkenSeating = "/photos/SunkenSeating+Koi Pond.jpg";
const terraceAmenity = "/photos/Ham_rooftop_amenity_mod-1.png";
const clubhouse = "/photos/Clubhouse_Recreational.jpg";
const elevatedWalkway = "/photos/Elevated Walkway.jpg";
const wavePool = "/photos/Wave_Pool.jpg";
const terraceEnhanced = "/photos/Terrace_2_EnhancedNew_Final.png";
const chessTerrace = "/photos/Chess_Terrace_expanded-Final-1.png";
const meditationRooftop = "/photos/Meditation_RoofTop_Sky.jpeg";
const poolEvening = "/photos/Swimming Pool 07-05-2025 21_21_10_270.jpg";
const brochureMain = "/photos/Codename Sky Habitat - Main Brochure.pdf";
const brochureWoj = "/photos/Urbanrise WOJ Broucher.pdf";

// Set your actual number here in full international format without "+".
// Example for Indian number 9876543210: "919876543210"
const phoneE164Digits = "919000298036";

export const phoneNumber = `+${phoneE164Digits}`; // for display

export const whatsappLink = `https://wa.me/${phoneE164Digits}?text=Hi%20I%20want%20details%20about%20Codename%20Sky%20Habitat`;

export const callLink = `tel:+${phoneE164Digits}`;

export const heroContent = {
  title: "Codename Sky Habitat",
  subtitle: "Luxury Sky Residences by Urbanrise",
  description:
    "Rise above the city at a landmark sky community with elevated experiences, resort-style amenities, and panoramic views of Hyderabad.",
  primaryCta: "Book a Site Visit",
  secondaryCta: "Download Brochure",
  heroImage: balconyHero,
  brochureMain,
};

export const statsHighlights = [
  { label: "Acres of Elevated Community", value: "8.5+" },
  { label: "Iconic Towers", value: "3" },
  { label: "Sky-High Floors", value: "30+" },
  { label: "Premium Residences", value: "2, 2.5 & 3 BHK" },
  { label: "Rooftop Experiences", value: "20+" },
  { label: "Skywalk Length", value: "400+ m" },
];

export const signatureExperiences = [
  {
    title: "Sky Lounge & Infinity Views",
    description:
      "Host under the stars at the rooftop lounge with curated seating, ambient lighting, and uninterrupted skyline vistas.",
    image: rooftopLounge,
  },
  {
    title: "Sunken Seating & Koi Pond",
    description:
      "Step into a tranquil sunken court with water features and lush greens – a rare luxury above the city bustle.",
    image: sunkenSeating,
  },
  {
    title: "Elevated Walkway & Terrace Life",
    description:
      "Stroll across the elevated skywalk connecting towers, landscaped terraces, and active recreation decks.",
    image: elevatedWalkway,
  },
];

export const amenitiesPreview = [
  "Resort-Style Swimming Pool",
  "Rooftop Skywalk & Viewing Decks",
  "Co-working & Business Lounge",
  "Indoor Games & Chess Terrace",
  "Fully Equipped Fitness Studio",
  "Kids’ Play & Learning Zones",
];

export const amenitiesFull = [
  "Grand double-height arrival lounge with concierge-style experience",
  "Designer clubhouse with indoor games, AV lounge & multipurpose hall",
  "Resort-style swimming pool with deck seating and cabanas",
  "Wave pool & leisure water features for weekend-style leisure",
  "Rooftop skywalk with viewing decks, lounges & landscaped pockets",
  "Sky-level meditation decks and sunrise yoga terraces",
  "Co-working terrace space & indoor business lounge",
  "Dedicated kids’ learning studio and indoor play areas",
  "Outdoor sports courts and jogging track",
  "Senior citizens’ courts and quiet garden pockets",
  "Banquet lawns with pre-function decks for celebrations",
  "Curated pet-friendly zones and walking loops",
];

export const unitPlans = [
  {
    type: "2 BHK",
    size: "1,150 – 1,250 sq.ft",
    facing: "City & clubhouse-facing options",
    description:
      "Smartly planned homes with efficient circulation, ideal for young families and investors.",
  },
  {
    type: "3 BHK",
    size: "1,550 – 1,850 sq.ft",
    facing: "Skyline, pool & garden-facing options",
    description:
      "Spacious sky residences with generous balconies, corner windows and premium finishes.",
  },
  {
    type: "3 BHK + Sky Deck",
    size: "1,950 – 2,150 sq.ft",
    facing: "Panoramic skyline & elevated amenity views",
    description:
      "Signature residences with extended sky decks designed for entertaining and everyday luxury.",
  },
];

export const masterPlanContent = {
  image: elevationAerial,
  title: "Master Plan Vision",
  description:
    "A thoughtfully layered master plan with vehicular-free podium, elevated amenities, and lush perimeter greens.",
};

export const galleryItems = [
  { src: swimmingPoolAerial, title: "Pool Deck & Leisure Terrace" },
  { src: rooftopLounge, title: "Rooftop Lounge & Sky Seating" },
  { src: terraceEnhanced, title: "Terrace Amenity Lounge" },
  { src: chessTerrace, title: "Chess Terrace & Social Courts" },
  { src: meditationRooftop, title: "Meditation Rooftop Sky Deck" },
  { src: terraceAmenity, title: "Curated Rooftop Experiences" },
  { src: clubhouse, title: "Clubhouse & Recreational Hub" },
  { src: poolEvening, title: "Evening Pool Ambience" },
  { src: wavePool, title: "Wave Pool & Water Experiences" },
];

export const locationAdvantage = {
  title: "Location Advantage",
  description:
    "Strategically positioned with effortless connectivity to IT corridors, social infrastructure, and future-ready growth zones.",
  points: [
    "Quick access to major IT and financial districts",
    "Close to leading international schools and colleges",
    "Proximity to shopping malls, fine dining and entertainment",
    "Easy connectivity to metro stations and arterial roads",
    "Healthcare hubs and multi-speciality hospitals nearby",
    "Emerging growth corridor with strong appreciation potential",
  ],
  mapPlaceholderLabel: "Google Maps Embed Placeholder",
};

export const contactDetails = {
  email: "skyhabitatbyurbanrise@gmail.com",
  phone: phoneNumber,
  whatsappLink,
  callLink,
};

export const brochures = {
  main: brochureMain,
  woj: brochureWoj,
};

