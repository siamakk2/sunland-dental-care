import Link from "next/link";
import { NAP, DOCTOR } from "../lib/practice";

export function EsHero({ eyebrow, title, lead, image, pos = "center" }) {
  return (
    <section className="border-b border-line bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-[1.1fr_.9fr] md:py-16">
        <div>
          <span className="accent-bar" aria-hidden="true"></span>
          <p className="chip">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
          {lead && <p className="mt-5 max-w-xl text-lg text-ink-soft">{lead}</p>}
        </div>
        <div className="relative mx-auto w-60 md:w-72 lg:w-80">
          <div className="absolute -left-7 top-10 h-24 w-24 rounded-full bg-brand" aria-hidden="true"></div>
          <img src={image} alt="" aria-hidden="true" className="arch relative w-full border border-line object-cover shadow-xl"
               style={{ aspectRatio: "4/5", objectPosition: pos }} />
        </div>
      </div>
    </section>
  );
}

export function EsProse({ children }) {
  return <section className="mx-auto max-w-3xl space-y-5 px-4 py-12 text-ink-soft [&_h2]:pt-4 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-ink [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-ink [&_strong]:text-ink [&_a]:font-semibold [&_a]:text-brand [&_a]:underline [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6">{children}</section>;
}

export function EsFaq({ faqs, title = "Preguntas frecuentes" }) {
  return (
    <section className="border-t border-line bg-parchment/60">
      <div className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-3xl font-bold">{title}</h2>
        <dl className="mt-8 space-y-6">
          {faqs.map(([q, a]) => <div key={q}><dt className="font-bold">{q}</dt><dd className="mt-2 text-ink-soft">{a}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}

export function EsCta({ title = "¿Listo para empezar?", body }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 text-center">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-ink-soft">{body || `Llame al ${NAP.phone} — se habla español. La Dra. Emami revisa personalmente cada consulta de paciente nuevo.`}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a href={`tel:${NAP.phoneIntl}`} className="rounded-full bg-brand px-6 py-3 font-bold text-white hover:bg-brand-dark">Llame al {NAP.phone}</a>
        <a href={`sms:${NAP.phoneIntl}`} className="rounded-full border-2 border-brand px-6 py-3 font-bold text-brand hover:bg-brand hover:text-white">Envíe un texto</a>
        <Link href="/es/contacto" className="rounded-full border border-ink/25 px-6 py-3 font-bold hover:border-brand hover:text-brand">Solicitar una cita</Link>
      </div>
    </section>
  );
}
