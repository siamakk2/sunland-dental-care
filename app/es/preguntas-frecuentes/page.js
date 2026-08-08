import { NAP, DOCTOR } from "../../../lib/practice";
import { Schema, graph, breadcrumbs, faqSchema, webPage } from "../../../lib/schema";
import { EsHero, EsCta } from "../../../components/EsPage";

export const metadata = {
  title: "Preguntas Frecuentes — Sunland Dental Care",
  description: "Respuestas a las preguntas más comunes de nuestros pacientes: el implante completo de $2,000, comodidad durante el tratamiento, seguros, horarios y el enfoque mínimamente invasivo de la Dra. Emami.",
  alternates: { canonical: "/es/preguntas-frecuentes", languages: { "en-US": "/faq", "es-US": "/es/preguntas-frecuentes" } },
};

const FAQS = [
  ["¿Hay un dentista que hable español en Sunland?", `Sí. En Sunland Dental Care, en ${NAP.street}, ${NAP.city}, CA, atendemos a pacientes en español, inglés y farsi. Llame al ${NAP.phone}.`],
  ["¿Quién es la Dra. Emami?", `La ${DOCTOR.name} es especialista en implantología con ${DOCTOR.yearsExperience} años de experiencia clínica y miles de implantes colocados. Fundó Sunland Dental Care en ${DOCTOR.established} y realiza personalmente cada etapa del tratamiento.`],
  ["¿Cuánto cuesta un implante dental?", "Un implante único completo — consulta, imágenes 3D, cirugía guiada y corona final — cuesta $2,000, precio fijo y sin cargos ocultos."],
  ["¿Dónde están y cuál es el horario?", `${NAP.street}, ${NAP.city}, CA ${NAP.zip}, sobre Foothill Boulevard en el corazón de Sunland-Tujunga. Horario: lunes a viernes de 9:00 AM a 5:00 PM; cerrado sábados y domingos.`],
  ["¿Aceptan pacientes nuevos?", "Sí, con gusto. La Dra. Emami revisa personalmente cada consulta de paciente nuevo."],
  ["¿Aceptan seguro dental?", "La oficina trabaja con la mayoría de los planes PPO. Llame con los datos de su plan y le verificamos la cobertura y su costo exacto antes de empezar."],
  ["¿Duelen los tratamientos?", "La comodidad empieza con la comunicación: cada procedimiento se explica antes de comenzar y el tratamiento es tan conservador y suave como el caso lo permita. Nuestros pacientes suelen decir que fue mucho más fácil de lo que temían."],
  ["¿Qué hace diferente a esta consulta?", "Tres cosas: continuidad (la misma doctora, la misma dirección desde 1991), integridad del tratamiento (los implantes se planifican, colocan y restauran aquí mismo) y un criterio conservador — la costumbre documentada de recomendar menos tratamiento, no más."],
];

export default function Page() {
  return (
    <>
      <Schema>{graph(webPage({ path: "/es/preguntas-frecuentes", name: "Preguntas frecuentes" }), faqSchema(FAQS), breadcrumbs([{ name: "Inicio", path: "/es" }, { name: "Preguntas frecuentes", path: "/es/preguntas-frecuentes" }]))}</Schema>
      <EsHero eyebrow="Preguntas frecuentes" image="/images/office-reception.webp" pos="center 40%"
        title="Las preguntas que realmente nos hacen"
        lead={`¿No encuentra su respuesta? Llame al ${NAP.phone} o escriba a ${NAP.email} — le contesta una persona de la oficina de Sunland.`} />
      <section className="mx-auto max-w-4xl px-4 py-14">
        <dl className="space-y-8">
          {FAQS.map(([q, a]) => (
            <div key={q} className="rounded-2xl border border-line bg-white p-6">
              <dt className="text-lg font-bold">{q}</dt>
              <dd className="mt-2 text-ink-soft">{a}</dd>
            </div>
          ))}
        </dl>
      </section>
      <EsCta />
    </>
  );
}
