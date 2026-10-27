// ─── Practice video: single source of truth ───────────────────────────────
// The VideoObject schema, the video sitemap, the on-page embed, and the
// transcript all read from here. Keep schema and sitemap values identical.

import { SITE, NAP, DOCTOR } from "./practice";

export const IMPLANT_VIDEO = {
  slug: "dental-implants-sunland",
  // The page this video lives on. One canonical home — do not embed the same
  // file on a second page, or the indexing signals split between them.
  page: "/dental-implants",

  name: "A Complete Dental Implant for $2,000 — Sunland Dental Care",
  description:
    `${DOCTOR.name} explains what is included in the $2,000 complete single dental implant at ${SITE.name} in ${NAP.city}, California: the consultation, 3D imaging and surgical planning, guided placement, and the final crown — all performed in one office. The video also covers the practice's cosmetic work, including veneers, whitening, and smile makeovers.`,

  // Full ISO 8601 WITH time and offset. A bare date makes Search Console
  // report "missing a timezone" and drops the video from the Videos report.
  uploadDate: "2026-10-27T09:00:00-07:00",

  durationSeconds: 37, // 36.87s actual, rounded for ISO 8601
  durationISO: "PT37S",
  width: 1080,
  height: 1920, // vertical 9:16

  get contentUrl() { return `${SITE.url}/media/${this.slug}.mp4`; },
  get thumbnailUrl() { return `${SITE.url}/media/${this.slug}-poster.jpg`; },
  get captionsUrl() { return `${SITE.url}/media/${this.slug}.vtt`; },
  get pageUrl() { return `${SITE.url}${this.page}`; },

  // Key moments: surfaced by Google as chapter links, and they give an AI
  // assistant a structured index of the video without watching it.
  chapters: [
    { start: 0,    end: 6.5,  name: "What a complete $2,000 dental implant means" },
    { start: 6.5,  end: 13.5, name: `Meet ${DOCTOR.name}` },
    { start: 13.5, end: 19.5, name: "What is included: consultation, 3D imaging, guided placement, final crown" },
    { start: 19.5, end: 26.5, name: "Cosmetic dentistry: veneers, whitening, smile makeovers" },
    { start: 26.5, end: 30,   name: "Gentle, precise, minimally invasive" },
    { start: 30,   end: 37,   name: "Contact Sunland Dental Care" },
  ],

  // Verbatim, read from the video's own on-screen captions. Published on the
  // page so the content is readable by assistive technology and by language
  // models, which cannot watch the file.
  transcript: [
    { t: 0,    text: "A complete dental implant… for just $2,000? Truly complete." },
    { t: 6.5,  text: `Meet ${DOCTOR.shortName}, of ${SITE.name}. Forty years of dentistry… and thousands of implants placed.` },
    { t: 13.5, text: "Consultation, 3D imaging, guided placement, and your final crown… all included." },
    { t: 19.5, text: "And for the smile you've always wanted… veneers, whitening, and complete smile makeovers." },
    { t: 26.5, text: "Gentle. Precise. Minimally invasive." },
    { t: 30,   text: `$2,000 complete implant. Call ${NAP.phone}. ${NAP.street}, ${NAP.city}. English · Español · فارسی. sunlanddentalcare.com` },
  ],

  get transcriptText() { return this.transcript.map((s) => s.text).join(" "); },
};
