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
  email: "dremami@sunlanddentalcare.com",
  geo: { lat: 34.2586, lng: -118.3021 },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Sunland+Dental+Care+7902+Foothill+Blvd+Sunland+CA+91040",
};

// Flip to true ONLY after Dr. Emami has actually read and approved the content.
// While false, no page claims she authored or clinically reviewed anything.
export const CLINICAL_REVIEW_COMPLETE = false;

export const DOCTOR = {
  name: "Dr. Mahvash Emami, DDS",
  shortName: "Dr. Emami",
  legalName: "Mahvash Emamisadr, DDS",
  title: "Dentist with a clinical focus on implant dentistry · Founder, Sunland Dental Care",
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
  blurb: "Independently reviewed by patients on Google and on Yelp",
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
  note: "One fixed price for the standard single-implant treatment, performed start to finish by Dr. Emami in the Sunland office.",

  // Shown beside every price mention (EN + ES).
  qualifier: "This is the price for a standard single implant placed in a site that is ready for one. If your case first needs an extraction, bone grafting, a sinus lift, or periodontal treatment, those are quoted separately — and you receive the complete written number before any treatment begins.",
  qualifierEs: "Este es el precio de un implante único estándar colocado en un sitio que ya está listo. Si su caso requiere primero una extracción, injerto óseo, elevación de seno o tratamiento de encías, eso se cotiza por separado — y usted recibirá el número completo por escrito antes de comenzar cualquier tratamiento.",

  // status: "in" = included in $2,000 | "sep" = quoted separately | "ask" = confirmed per case
  // Rows marked "ask" are AWAITING PRACTICE CONFIRMATION. Flip to "in"/"sep" once Dr. Emami confirms.
  breakdown: [
    { item: "Consultation and examination", itemEs: "Consulta y examen", status: "in" },
    { item: "3D imaging and surgical planning", itemEs: "Imágenes 3D y planificación quirúrgica", status: "in" },
    { item: "Implant fixture (the titanium post)", itemEs: "El implante (poste de titanio)", status: "in" },
    { item: "Abutment (post-to-crown connector)", itemEs: "Pilar (conector entre poste y corona)", status: "ask" },
    { item: "Final crown", itemEs: "Corona final", status: "in" },
    { item: "Crown material", itemEs: "Material de la corona", status: "ask",
      note: "Confirmed with you before fabrication.", noteEs: "Se confirma con usted antes de fabricarla." },
    { item: "Tooth extraction, if the site still has a tooth", itemEs: "Extracción, si el sitio aún tiene un diente", status: "sep" },
    { item: "Bone grafting or sinus lift, if needed", itemEs: "Injerto óseo o elevación de seno, si se necesita", status: "sep" },
    { item: "Periodontal (gum) treatment, if needed first", itemEs: "Tratamiento de encías, si se necesita primero", status: "sep" },
    { item: "Sedation", itemEs: "Sedación", status: "sep" },
    { item: "Follow-up visits during healing", itemEs: "Visitas de seguimiento durante la cicatrización", status: "ask" },
  ],
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

export const MORE_SERVICES = [
  { slug: "periodontal-treatment", name: "Gum Disease & Periodontal Surgery" },
  { slug: "sedation-implant-dentistry", name: "Sedation for Implant Placement" },
  { slug: "emergency-dentist", name: "Emergency Dentistry" },
  { slug: "full-arch-implants", name: "Full-Arch / All-on-4 Implants" },
  { slug: "dentures", name: "Dentures" },
  { slug: "root-canals", name: "Root Canals" },
  { slug: "teeth-whitening", name: "Teeth Whitening" },
  { slug: "insurance-financing", name: "Insurance & Financing" },
];

export const NAV = [
  { href: "/services", label: "Services" },
  { href: "/dental-implants", label: "Dental Implants" },
  { href: "/invisalign", label: "Invisalign" },
  { href: "/pricing", label: "Pricing" },
  { href: "/dr-emami", label: "Dr. Emami" },
  { href: "/ask-dr-emami", label: "Ask Dr. Emami" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
