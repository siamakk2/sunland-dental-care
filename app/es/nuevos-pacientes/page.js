import { NAP, DOCTOR } from "../../../lib/practice";
import { Schema, graph, breadcrumbs, faqSchema, webPage } from "../../../lib/schema";
import { EsHero, EsProse, EsFaq, EsCta } from "../../../components/EsPage";

export const metadata = {
  title: "Pacientes Nuevos — Qué Esperar en su Primera Visita",
  description: "Damos la bienvenida a pacientes nuevos en Sunland Dental Care, Sunland CA. Qué esperar en su primera visita con la Dra. Emami: examen completo, hallazgos honestos y precios exactos por escrito. Se habla español.",
  alternates: { canonical: "/es/nuevos-pacientes", languages: { "en-US": "/new-patients", "es-US": "/es/nuevos-pacientes" } },
};

const FAQS = [
  ["¿Qué pasa en la primera visita?", "Un examen completo con diagnóstico de alta magnificación y las imágenes necesarias, una conversación franca sobre lo que la Dra. Emami encuentra y un plan claro con precios exactos. Nada se programa hasta que usted lo entienda y esté de acuerdo."],
  ["¿Qué debo traer?", "Identificación con foto, su información de seguro si la tiene, una lista de sus medicamentos y cualquier radiografía o expediente dental previo al que tenga acceso. Si no puede conseguirlos, en la oficina tomamos lo necesario."],
  ["Tengo miedo al dentista. ¿Es esta la oficina adecuada?", "Muchos pacientes llegan después de años sin atención dental. Aquí el trato es sin prisa y honesto: le diremos qué es urgente, qué puede esperar y qué no necesita tratamiento — una distinción que los pacientes nerviosos agradecen especialmente."],
  ["¿Atienden en español?", "Sí. Atendemos a pacientes en español, inglés y farsi. Mencione su preferencia al llamar y con gusto le atendemos en su idioma."],
];

export default function Page() {
  return (
    <>
      <Schema>{graph(webPage({ path: "/es/nuevos-pacientes", name: "Pacientes nuevos" }), faqSchema(FAQS), breadcrumbs([{ name: "Inicio", path: "/es" }, { name: "Pacientes nuevos", path: "/es/nuevos-pacientes" }]))}</Schema>
      <EsHero eyebrow="Bienvenidos los pacientes nuevos" image="/images/ph-reception.jpg" pos="center 15%"
        title="Su primera visita, sin sorpresas"
        lead="La Dra. Emami revisa personalmente cada consulta de paciente nuevo. Esto es exactamente lo que puede esperar." />
      <EsProse>
        <h2>1. Una conversación de verdad</h2>
        <p>Su visita empieza por lo que le trajo: dolor, apariencia, mucho tiempo sin una limpieza o una segunda opinión. La Dra. Emami escucha primero.</p>
        <h2>2. Un examen completo y suave</h2>
        <p>Diagnóstico de alta magnificación e imágenes según se necesiten, con atención especial a la salud de las encías — la base de todo lo demás.</p>
        <h2>3. Hallazgos honestos</h2>
        <p>Sabrá qué es urgente, qué puede esperar y qué no necesita tratamiento. Nuestros pacientes suelen comentar que los convencimos de <em>no</em> hacerse trabajos que esperaban necesitar.</p>
        <h2>4. Un plan claro con precios exactos</h2>
        <p>Cada tratamiento recomendado viene con su costo exacto antes de programarse. Sin sorpresas en la recepción.</p>
      </EsProse>
      <EsFaq faqs={FAQS} title="Preguntas de pacientes nuevos" />
      <EsCta title="Programe su primera visita" body={`Llame al ${NAP.phone} — abierto de lunes a viernes de 9:00 AM a 5:00 PM. Se habla español.`} />
    </>
  );
}
