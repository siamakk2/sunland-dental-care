import Link from "next/link";
import { NAP, DOCTOR, SERVICES } from "../lib/practice";
import { Schema, graph, breadcrumbs, faqSchema, serviceSchema, webPage } from "../lib/schema";
import { PageHero, Reviewed, FaqBlock, Cta, ReviewStrip } from "../components/blocks";

export default function CityPage({ data, image = "/images/hero-hallway.webp", pos = "center 40%" }) {
  const path = `/${data.slug}`;
  return (
    <>
      <Schema>{graph(
        serviceSchema({ name: `Dental care for ${data.city}`, path, description: `Dental implants, cosmetic, Invisalign, and family dentistry for ${data.city}, CA patients — ${data.drive} from Sunland Dental Care.` }),
        webPage({ path, name: data.title }),
        faqSchema(data.faqs),
        breadcrumbs([{ name: "Home", path: "/" }, { name: data.city, path }]))}</Schema>

      <PageHero image={image} pos={pos}
        eyebrow={`Serving ${data.city} · ${data.drive}`}
        title={<>Dentist for <span className="text-brand">{data.short}</span></>}
        lead={data.lead} />
      <Reviewed />
      <ReviewStrip />

      <section className="mx-auto max-w-3xl space-y-6 px-4 py-12 text-lg text-ink-soft">
        {data.body.map(([h, p]) => (
          <div key={h}>
            <h2 className="pt-3 text-3xl font-bold text-ink">{h}</h2>
            <p className="mt-3">{p}</p>
          </div>
        ))}
        <div>
          <h2 className="pt-3 text-3xl font-bold text-ink">Care available to {data.short} patients</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {[...SERVICES.map((s) => [s.name, `/${s.slug}`]),
              ["Full-Arch / All-on-4 Implants", "/full-arch-implants"], ["Dentures", "/dentures"],
              ["Root Canals", "/root-canals"], ["Teeth Whitening", "/teeth-whitening"],
              ["Emergency Dentistry", "/emergency-dentist"], ["Insurance & Financing", "/insurance-financing"]].map(([n, href]) => (
              <li key={href}><Link className="font-semibold text-brand underline" href={href}>{n}</Link></li>
            ))}
          </ul>
        </div>
        <p className="rounded-2xl border border-line bg-parchment p-6 text-base">
          <strong className="text-ink">Getting here from {data.short}:</strong> {data.drive} to {NAP.street}, {NAP.city}, CA {NAP.zip}.
          Free parking. Open {NAP.hours}. <a className="font-semibold text-brand underline" href={NAP.mapsUrl}>Open in Maps →</a>
        </p>
      </section>

      <FaqBlock title={`${data.short} patient questions`} faqs={data.faqs} />
      <Cta title={`Book from ${data.short}`} body={`Call ${NAP.phone} — ${DOCTOR.shortName} personally reviews every new-patient consultation.`} />
    </>
  );
}
