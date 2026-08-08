import Link from "next/link";
import { NAP, DOCTOR, OFFER } from "../../../lib/practice";
import { Schema, graph, breadcrumbs, faqSchema, serviceSchema, webPage } from "../../../lib/schema";
import { EsHero, EsProse, EsFaq, EsCta } from "../../../components/EsPage";

export const metadata = {
  title: "Implantes Dentales en Sunland, CA — $2,000 Completo",
  description: "Implante dental completo por $2,000 con precio fijo: consulta, imágenes 3D, cirugía guiada y corona, todo realizado por la Dra. Mahvash Emami, DDS en Sunland, CA. Se habla español.",
  alternates: { canonical: "/es/implantes-dentales", languages: { "en-US": "/dental-implants", "es-US": "/es/implantes-dentales" } },
};

const FAQS = [
  ["¿Qué incluye el implante dental de $2,000?",
   "Todo lo necesario para un implante único: la consulta y el examen, las imágenes 3D y la planificación quirúrgica, la colocación guiada del implante y la corona final. Un precio fijo, sin cargos ocultos, todo realizado en la oficina de Sunland."],
  ["¿Por qué cuesta mucho menos que en otras oficinas de Los Ángeles?",
   "Porque en gran parte de Los Ángeles cada etapa se envía a un especialista distinto, y cada uno cobra sus propios honorarios. La Dra. Emami realiza todas las etapas personalmente en una sola oficina, lo que elimina esos costos — no la calidad."],
  ["¿Duele la cirugía de implante?",
   "La colocación se realiza con anestesia local y la mayoría de los pacientes siente presión, no dolor. Como cada caso se planifica en 3D antes de la cirugía, el sitio quirúrgico es pequeño y la recuperación más rápida de lo que la mayoría espera."],
  ["¿Cuánto duran los implantes dentales?",
   "Con encías sanas y buen cuidado en casa, un implante bien colocado está diseñado para durar décadas, y con frecuencia toda la vida. La salud de las encías es la base, por eso forma parte de cada plan de tratamiento."],
  ["¿Soy candidato para un implante dental?",
   "La mayoría de los adultos que han perdido uno o más dientes lo son. En la consulta se evalúa la densidad ósea, la salud de las encías y su salud general con imágenes 3D, y la Dra. Emami le dirá con honestidad si el implante no es la mejor opción para su caso."],
];

export default function Page() {
  return (
    <>
      <Schema>{graph(serviceSchema({ name: "Implantes Dentales", path: "/es/implantes-dentales", description: "Implante dental completo por $2,000 en Sunland, CA.", price: "2000" }), webPage({ path: "/es/implantes-dentales", name: "Implantes Dentales" }), faqSchema(FAQS), breadcrumbs([{ name: "Inicio", path: "/es" }, { name: "Implantes Dentales", path: "/es/implantes-dentales" }]))}</Schema>
      <EsHero eyebrow="Implantología · Cirugía guiada en 3D" image="/images/ph-consult.jpg" pos="center 22%"
        title={<>Un implante dental completo por <span className="text-brand">$2,000</span>. Completo de verdad.</>}
        lead="En implantología no hay sustituto para la experiencia. La Dra. Emami ha dedicado cuatro décadas y miles de implantes a perfeccionar un proceso preciso, mínimamente invasivo y con un precio honesto." />
      <EsProse>
        <h2>Qué significa "completo"</h2>
        <p>Muchos precios anunciados cubren solo el poste de titanio; la corona, las imágenes y la planificación llegan después como cargos aparte. Aquí el precio fijo cubre todo el proceso:</p>
        <ul>
          <li><strong>Consulta y examen</strong></li>
          <li><strong>Imágenes 3D y planificación quirúrgica</strong></li>
          <li><strong>Colocación guiada del implante</strong></li>
          <li><strong>Corona final</strong></li>
        </ul>
        <p>Un precio fijo, sin cargos ocultos, realizado de principio a fin por la Dra. Emami en la oficina de Sunland.</p>
        <h2>Planificado en 3D antes de la cirugía</h2>
        <p>Cada implante se planifica en un entorno virtual con imágenes 3D de su mandíbula. La Dra. Emami determina la posición, el ángulo y la profundidad exactos de forma digital — y entra a la cirugía con guías, no con suposiciones. El resultado: mayor precisión, un sitio quirúrgico más pequeño y una recuperación notablemente más rápida.</p>
        <h2>Una sola doctora, de principio a fin</h2>
        <p>En gran parte de Los Ángeles un implante significa tres oficinas: el dentista general, el cirujano oral y el dentista restaurador. Aquí, la {DOCTOR.name} realiza la consulta, la colocación y la restauración ella misma, en la misma oficina donde atiende desde {DOCTOR.established}. La continuidad es control de calidad.</p>
        <p>Vea también nuestros <Link href="/es/precios">precios</Link> y <Link href="/es/servicios">todos los servicios</Link>.</p>
      </EsProse>
      <EsFaq faqs={FAQS} title="Preguntas sobre implantes dentales" />
      <EsCta title="Descubra si un implante es adecuado para usted" body={`La consulta y las imágenes 3D están incluidas en el precio completo de $2,000. Llame al ${NAP.phone} — se habla español.`} />
    </>
  );
}
