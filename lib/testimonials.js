// ─── Patient testimonials ─────────────────────────────────────────────────
// ONLY real, publicly published review text (Google/Yelp), quoted verbatim.
// Never edit, embellish, or invent. Truncated quotes end with "…".
// To add: copy the exact text and the reviewer's display name from the profile.

export const TESTIMONIALS = [
  {
    quote: "I'm currently having root canal done, and I have to say what a pleasant experience i had. I highly recommend this dentist",
    name: "Laura H.", source: "Google", rating: 5, treatment: "Root canal",
  },
  {
    quote: "I've gone here for years and dentist Mihvash and Dr.Holmera were absolutely amazing. They were kind and did a swift and great job with my extraction",
    name: "Melanie B.", source: "Google", rating: 5, treatment: "Extraction",
  },
  {
    quote: "I've been a patient here for a few years now and I'm really happy with this Dentist and the dental assistants! Great…",
    name: "Celine P.", source: "Google", rating: 5, treatment: "Long-term patient",
  },
  {
    quote: "I had a great experience at this dental clinic. The team was professional, kind, and made me feel comfortable throughout…",
    name: "Petro H.", source: "Google", rating: 5,
  },
];

// Set ONLY to the true current numbers shown on the Google Business Profile.
// Leave null until verified — inflated ratings risk a Google manual action.
export const AGGREGATE = null;
// export const AGGREGATE = { rating: 4.2, count: 101, source: "Google" };
