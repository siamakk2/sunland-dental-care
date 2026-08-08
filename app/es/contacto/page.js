import { NAP, DOCTOR } from "../../../lib/practice";
import { Schema, graph, breadcrumbs, webPage } from "../../../lib/schema";
import { EsHero, EsCta } from "../../../components/EsPage";
import ContactForm from "../../../components/ContactForm";

export const metadata = {
  title: "Contacto y Ubicación — Sunland Dental Care, Sunland CA",
  description: `Contacte a Sunland Dental Care: ${NAP.street}, ${NAP.city}, CA ${NAP.zip}. Llame al ${NAP.phone}. Lunes a viernes de 9 AM a 5 PM. Se habla español.`,
  alternates: { canonical: "/es/contacto", languages: { "en-US": "/contact", "es-US": "/es/contacto" } },
};

export default function Page() {
  return (
    <>
      <Schema>{graph(webPage({ path: "/es/contacto", name: "Contacto y ubicación" }), breadcrumbs([{ name: "Inicio", path: "/es" }, { name: "Contacto", path: "/es/contacto" }]))}</Schema>
      <EsHero eyebrow="Contacto y ubicación" image="/images/ph-coat-white.jpg" pos="center 20%"
        title="Sobre Foothill Boulevard desde 1991"
        lead="Llame, escriba o venga a vernos — la oficina es fácil de encontrar en el corazón de Sunland-Tujunga. Se habla español." />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-12 md:grid-cols-3">
        <div className="rounded-2xl border border-line bg-white p-6">
          <p className="eyebrow text-ink-soft">Teléfono</p>
          <a href={`tel:${NAP.phoneIntl}`} className="mt-2 block text-2xl font-bold text-brand hover:underline">{NAP.phone}</a>
          <p className="mt-2 text-sm text-ink-soft">La forma más rápida de agendar. Lun–Vie 9 AM – 5 PM.</p>
        </div>
        <div className="rounded-2xl border border-line bg-white p-6">
          <p className="eyebrow text-ink-soft">Dirección</p>
          <a href={NAP.mapsUrl} className="mt-2 block text-lg font-bold hover:text-brand">{NAP.street}<br />{NAP.city}, {NAP.state} {NAP.zip}</a>
          <p className="mt-2 text-sm text-ink-soft">Estacionamiento gratuito sobre Foothill Blvd.</p>
        </div>
        <div className="rounded-2xl border border-line bg-white p-6">
          <p className="eyebrow text-ink-soft">Correo y horario</p>
          <a href={`mailto:${NAP.email}`} className="mt-2 block text-lg font-bold hover:text-brand">{NAP.email}</a>
          <p className="mt-2 text-sm text-ink-soft">Lun–Vie 9:00 AM – 5:00 PM<br />Sáb–Dom Cerrado</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-10 md:grid-cols-[1.05fr_.95fr]">
        <ContactForm />
        <iframe title="Mapa a Sunland Dental Care" className="h-full min-h-96 w-full rounded-3xl border border-line"
          loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${encodeURIComponent('Sunland Dental Care 7902 Foothill Blvd Sunland CA 91040')}&output=embed`} />
      </section>
      <EsCta title="Le esperamos" body={`Pacientes nuevos bienvenidos — la ${DOCTOR.shortName} revisa personalmente cada consulta.`} />
    </>
  );
}
