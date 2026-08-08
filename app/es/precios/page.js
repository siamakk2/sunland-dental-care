import Link from "next/link";
import { NAP, OFFER, DOCTOR } from "../../../lib/practice";
import { Schema, graph, breadcrumbs, faqSchema, webPage } from "../../../lib/schema";
import { EsHero, EsProse, EsFaq, EsCta } from "../../../components/EsPage";

export const metadata = {
  title: "Precios y Seguros — Sunland Dental Care, Sunland CA",
  description: "Precios dentales transparentes en Sunland, CA: implante completo por $2,000 fijo, sin cargos ocultos. Verificamos su seguro PPO y le damos un presupuesto exacto por escrito antes de empezar.",
  alternates: { canonical: "/es/precios", languages: { "en-US": "/pricing", "es-US": "/es/precios" } },
};

const FAQS = [
  ["¿Aceptan mi seguro dental?", `La oficina trabaja con la mayoría de los planes PPO. Llame al ${NAP.phone} con los datos de su plan y le verificamos la cobertura y su costo exacto antes de programar cualquier tratamiento.`],
  ["¿Y si no tengo seguro?", "Muchos de nuestros pacientes pagan directamente, atraídos justamente por precios transparentes como el implante completo de $2,000. Cada plan de tratamiento incluye un presupuesto exacto por escrito."],
  ["¿Sabré el costo total antes del tratamiento?", "Siempre. Es una regla de la consulta: precio exacto por escrito antes de programar nada. Sin sorpresas en la recepción desde 1991."],
  ["¿Ofrecen planes de pago?", `La oficina puede conversar arreglos de pago caso por caso. Llame al ${NAP.phone} y pregunte por las opciones actuales para su plan de tratamiento.`],
];

export default function Page() {
  return (
    <>
      <Schema>{graph(webPage({ path: "/es/precios", name: "Precios" }), faqSchema(FAQS), breadcrumbs([{ name: "Inicio", path: "/es" }, { name: "Precios", path: "/es/precios" }]))}</Schema>
      <EsHero eyebrow="Precios transparentes" image="/images/ph-implants-sign.jpg" pos="center"
        title="Sabrá el número antes de decidir"
        lead="Un tratamiento dental que no puede presupuestar es un tratamiento que va a posponer. Aquí la cobertura se verifica por adelantado, los presupuestos son exactos y por escrito, y el precio que le decimos es el precio que paga." />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-3xl bg-brand px-6 py-12 text-white md:px-12">
          <p className="eyebrow text-white/80">Nuestra oferta principal</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Un implante dental completo por $2,000. Completo de verdad.</h2>
          <ul className="mt-6 grid max-w-2xl gap-2 text-white/90 md:grid-cols-2">
            {["Consulta y examen","Imágenes 3D y planificación quirúrgica","Colocación guiada del implante","Corona final"].map((i) => (
              <li key={i} className="rounded-xl border border-white/25 px-4 py-3">{i}</li>
            ))}
          </ul>
          <p className="mt-4 max-w-2xl text-sm text-white/75">Un precio fijo, sin cargos ocultos, realizado de principio a fin por la Dra. Emami. Para comparar: en Los Ángeles un solo implante suele superar los $5,000.</p>
          <Link href="/es/implantes-dentales" className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-bold text-brand hover:bg-cream">Sobre el proceso →</Link>
        </div>
      </section>
      <EsProse>
        <h2>Por qué nuestros precios funcionan así</h2>
        <p>La mayoría de las facturas de implantes en Los Ángeles son tres facturas: la del dentista general, la del cirujano oral y la del dentista restaurador. La {DOCTOR.name} cumple los tres papeles en una sola oficina, y ese ahorro va al paciente. El precio es más bajo porque el proceso es mejor, no al revés.</p>
        <p>Para todos los demás servicios — limpiezas, empastes, carillas, alineadores — recibirá un presupuesto exacto en su consulta, antes de programar cualquier tratamiento.</p>
      </EsProse>
      <EsFaq faqs={FAQS} title="Preguntas sobre precios y seguros" />
      <EsCta title="Reciba un presupuesto exacto para su caso" />
    </>
  );
}
