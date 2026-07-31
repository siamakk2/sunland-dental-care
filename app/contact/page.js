import { NAP, DOCTOR } from "../../lib/practice";
import { Schema, graph, breadcrumbs } from "../../lib/schema";
import { PageHero, Cta } from "../../components/blocks";

export const metadata = {
  title: "Contact & Location — Sunland Dental Care, Sunland CA",
  description: `Contact Sunland Dental Care: ${NAP.street}, ${NAP.city}, CA ${NAP.zip}. Call ${NAP.phone}. Open ${NAP.hours}. On Foothill Blvd in the heart of Sunland-Tujunga.`,
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <>
      <Schema>{graph(breadcrumbs([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]))}</Schema>
      <PageHero eyebrow="Contact & location" title="On Foothill Boulevard since 1991"
        lead="Call, email, or come by — the office is easy to find in the heart of Sunland-Tujunga." />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-3">
        <div className="rounded-2xl border border-line bg-white/60 p-6">
          <p className="eyebrow text-ink-soft">Phone</p>
          <a href={`tel:${NAP.phoneIntl}`} className="mt-2 block text-2xl font-semibold text-brand hover:underline">{NAP.phone}</a>
          <p className="mt-2 text-sm text-ink-soft">The fastest way to book. {NAP.hours}.</p>
        </div>
        <div className="rounded-2xl border border-line bg-white/60 p-6">
          <p className="eyebrow text-ink-soft">Address</p>
          <a href={NAP.mapsUrl} className="mt-2 block text-lg font-semibold hover:text-brand">{NAP.street}<br/>{NAP.city}, {NAP.state} {NAP.zip}</a>
          <p className="mt-2 text-sm text-ink-soft">Free parking; on Foothill Blvd between local shops — look for the Sunland Dental Care sign.</p>
        </div>
        <div className="rounded-2xl border border-line bg-white/60 p-6">
          <p className="eyebrow text-ink-soft">Email & hours</p>
          <a href={`mailto:${NAP.email}`} className="mt-2 block text-lg font-semibold hover:text-brand">{NAP.email}</a>
          <p className="mt-2 text-sm text-ink-soft">Mon–Fri 9:00 AM – 5:00 PM<br/>Sat–Sun Closed</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4">
        <iframe title="Map to Sunland Dental Care" className="h-96 w-full rounded-2xl border border-line"
          loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${encodeURIComponent('Sunland Dental Care 7902 Foothill Blvd Sunland CA 91040')}&output=embed`} />
      </section>
      <Cta title="We'll see you soon" body={`New patients welcome — ${DOCTOR.shortName} personally reviews every consultation.`} />
    </>
  );
}
