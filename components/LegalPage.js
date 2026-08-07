import { NAP, DOCTOR, SITE } from "../lib/practice";
import { Schema, graph, breadcrumbs, webPage } from "../lib/schema";

export const EFFECTIVE = "August 6, 2026";

export default function LegalPage({ title, path, intro, children }) {
  return (
    <>
      <Schema>{graph(webPage({ path, name: title }), breadcrumbs([{ name: "Home", path: "/" }, { name: title, path }]))}</Schema>
      <section className="border-b border-line bg-parchment/60">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <span className="accent-bar" aria-hidden="true"></span>
          <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
          <p className="mt-4 text-sm font-semibold text-ink-soft">Effective {EFFECTIVE} · Sunland Dental Care · {DOCTOR.name}</p>
          {intro && <p className="mt-4 text-lg text-ink-soft">{intro}</p>}
        </div>
      </section>
      <article className="mx-auto max-w-3xl space-y-4 px-4 py-12 text-ink-soft [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink [&_h3]:pt-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-ink [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_a]:font-semibold [&_a]:text-brand [&_a]:underline">
        {children}
        <div className="mt-10 rounded-2xl border border-line bg-white p-6">
          <h2 className="!pt-0 text-xl">Contact us about this notice</h2>
          <p className="mt-2">Sunland Dental Care · {DOCTOR.name}<br />
            {NAP.street}, {NAP.city}, {NAP.state} {NAP.zip}<br />
            Phone: <a href={`tel:${NAP.phoneIntl}`}>{NAP.phone}</a><br />
            Email: <a href={`mailto:${NAP.email}`}>{NAP.email}</a></p>
        </div>
      </article>
    </>
  );
}
