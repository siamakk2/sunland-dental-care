import { SITE, NAP, DOCTOR, OFFER, AREAS, SERVICES, PRACTICE_PROFILES } from "./practice";

const ID = {
  org: `${SITE.url}/#dentist`,
  person: `${SITE.url}/#dr-emami`,
  site: `${SITE.url}/#website`,
};

export const personSchema = {
  "@type": ["Person", "Dentist"],
  "@id": ID.person,
  name: DOCTOR.name,
  alternateName: [DOCTOR.legalName, "Dr. Mahvash Emami-Sadr", "Dr. Emami"],
  honorificSuffix: "DDS",
  jobTitle: "Dentist — Implantology Specialist",
  image: { "@type": "ImageObject", url: `${SITE.url}${DOCTOR.photo}`, caption: `${DOCTOR.name} at Sunland Dental Care` },
  worksFor: { "@id": ID.org },
  url: `${SITE.url}/dr-emami`,
  telephone: NAP.phoneIntl,
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "degree",
    name: "Doctor of Dental Surgery (DDS)",
  },
  knowsAbout: [
    "Dental implantology", "3D-guided implant surgery", "Minimally invasive dentistry",
    "Periodontal health", "Cosmetic dentistry", "Restorative dentistry", "Invisalign clear aligners",
  ],
  description: `${DOCTOR.name} is an implantology-focused dentist with ${DOCTOR.yearsExperience} years of clinical experience and thousands of dental implants placed. She has led Sunland Dental Care at ${NAP.street}, ${NAP.city}, CA since ${DOCTOR.established}.`,
  sameAs: Object.values(DOCTOR.profiles),
};

export const dentistSchema = {
  "@type": ["Dentist", "LocalBusiness"],
  "@id": ID.org,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/images/logo.png`,
  image: [`${SITE.url}${DOCTOR.heroPhoto}`, `${SITE.url}/images/office-waiting.jpg`],
  telephone: NAP.phoneIntl,
  email: NAP.email,
  foundingDate: String(DOCTOR.established),
  founder: { "@id": ID.person },
  employee: { "@id": ID.person },
  slogan: SITE.tagline,
  priceRange: "$$",
  currenciesAccepted: "USD",
  address: {
    "@type": "PostalAddress",
    streetAddress: NAP.street, addressLocality: NAP.city,
    addressRegion: NAP.state, postalCode: NAP.zip, addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: NAP.geo.lat, longitude: NAP.geo.lng },
  areaServed: [
    { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: NAP.geo.lat, longitude: NAP.geo.lng }, geoRadius: "80467" },
    ...AREAS.map((a) => ({ "@type": "City", name: a })),
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00", closes: "17:00",
  },
  sameAs: Object.values(PRACTICE_PROFILES),
  makesOffer: {
    "@type": "Offer",
    name: "Complete Single Dental Implant",
    price: OFFER.price, priceCurrency: "USD",
    description: `${OFFER.includes.join(", ")} — one fixed price, no hidden fees.`,
    itemOffered: { "@type": "MedicalProcedure", name: "Dental implant placement and restoration" },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dental services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, url: `${SITE.url}/${s.slug}` },
    })),
  },
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": ID.site,
  url: SITE.url,
  name: SITE.name,
  publisher: { "@id": ID.org },
};

export function breadcrumbs(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem", position: i + 1, name: it.name, item: `${SITE.url}${it.path}`,
    })),
  };
}

export function faqSchema(faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question", name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function graph(...extra) {
  return { "@context": "https://schema.org", "@graph": [dentistSchema, personSchema, websiteSchema, ...extra] };
}

export function Schema({ children }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(children) }} />
  );
}
