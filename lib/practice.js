// ─── Single source of truth ───────────────────────────────────────────────
// Edit here once; NAP, schema, llms.txt inputs, and page copy all update.

export const SITE = {
  url: "https://www.sunlanddentalcare.com",
  name: "Sunland Dental Care",
  tagline: "Implant-focused, minimally invasive dentistry in Sunland, CA since 1991",
};

export const NAP = {
  phone: "(818) 353-5520",
  phoneIntl: "+18183535520",
  street: "7902 Foothill Blvd",
  city: "Sunland",
  state: "CA",
  zip: "91040",
  hours: "Mon–Fri 9:00 AM – 5:00 PM",
  email: "mimisadr@yahoo.com",
  geo: { lat: 34.2586, lng: -118.3021 },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Sunland+Dental+Care+7902+Foothill+Blvd+Sunland+CA+91040",
};

export const DOCTOR = {
  name: "Dr. Mahvash Emami, DDS",
  shortName: "Dr. Emami",
  legalName: "Mahvash Emamisadr, DDS",
  title: "Implantology Specialist · Founder, Sunland Dental Care",
  yearsExperience: 40, // "four decades" per practice materials
  established: 1991,
  photo: "/images/dr-emami-portrait.webp",
  heroPhoto: "/images/dr-emami-hero.webp",
  quote:
    "We treat the mouth as the gateway to the body. When we eliminate infection in your gums, we are taking the pressure off your immune system and your heart.",
  // Real third-party profiles — machine-readable identity corroboration
  profiles: {
    usNews: "https://health.usnews.com/dentists/mahvash-emamisadr-1744700",
    healthgrades: "https://www.healthgrades.com/dentist/dr-mahvash-emamisadr-yqkjm",
    webmd:
      "https://doctor.webmd.com/doctor/mahvash-emami-sadr-948ff32a-34c9-4c5d-8803-348d238c4dc8-overview",
  },
};

export const PRACTICE_PROFILES = {
  yelp: "https://www.yelp.com/biz/sunland-dental-care-sunland-2",
  facebook: "https://www.facebook.com/SunlandDentalCare",
  // Add when available: Instagram, YouTube, Google Business Profile share link
};

export const REVIEWS = {
  google: "https://www.google.com/maps/search/?api=1&query=Sunland+Dental+Care+7902+Foothill+Blvd+Sunland+CA+91040",
  yelp: "https://www.yelp.com/biz/sunland-dental-care-sunland-2",
  blurb: "Nearly 200 patient reviews across Google and Yelp",
};

export const OFFER = {
  headline: "A complete dental implant for $2,000. Truly complete.",
  price: 2000,
  includes: [
    "Consultation and exam",
    "3D imaging and surgical planning",
    "Guided implant placement",
    "Final crown restoration",
  ],
  note: "One fixed price, no hidden fees — performed start to finish by Dr. Emami in the Sunland office.",
};

export const AREAS = [
  "Sunland-Tujunga", "Shadow Hills", "Lake View Terrace", "Sun Valley",
  "La Crescenta-Montrose", "La Cañada Flintridge", "Glendale", "Burbank",
  "Pasadena", "San Fernando", "North Hollywood", "Santa Clarita",
  "San Fernando Valley", "Los Angeles",
];

export const SERVICES = [
  { slug: "dental-implants", name: "Dental Implants", blurb: "Complete, fixed-price dental implants — 3D-guided planning, surgery, and restoration all under one roof." },
  { slug: "cosmetic-dentistry", name: "Cosmetic Dentistry", blurb: "Veneers, crowns, professional whitening, and full smile makeovers designed around your face and goals." },
  { slug: "invisalign", name: "Invisalign & Orthodontics", blurb: "Clear aligner therapy and orthodontic options to straighten teeth discreetly, on your schedule." },
  { slug: "general-dentistry", name: "General & Family Dentistry", blurb: "Cleanings, periodontal-focused hygiene, fillings, and conservative restorative care for every age." },
];

export const NAV = [
  { href: "/dental-implants", label: "Dental Implants" },
  { href: "/cosmetic-dentistry", label: "Cosmetic" },
  { href: "/invisalign", label: "Invisalign" },
  { href: "/general-dentistry", label: "General" },
  { href: "/pricing", label: "Pricing" },
  { href: "/dr-emami", label: "Dr. Emami" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];
