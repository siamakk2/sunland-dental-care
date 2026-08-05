import { SITE } from "../lib/practice";
const paths = ["", "/dr-emami", "/about", "/dental-implants", "/cosmetic-dentistry", "/invisalign", "/general-dentistry", "/pricing", "/faq", "/new-patients", "/contact", "/emergency-dentist", "/full-arch-implants", "/dentures", "/root-canals", "/teeth-whitening", "/insurance-financing"];
export const dynamic = "force-static";
export default function sitemap() {
  return paths.map((p) => ({ url: `${SITE.url}${p}`, lastModified: new Date(), changeFrequency: "monthly", priority: p === "" ? 1 : 0.8 }));
}
