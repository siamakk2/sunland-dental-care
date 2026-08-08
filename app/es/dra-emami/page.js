import Link from "next/link";
import { NAP, DOCTOR, SITE } from "../../../lib/practice";
import { Schema, graph, breadcrumbs, faqSchema, webPage } from "../../../lib/schema";
import { EsProse, EsFaq, EsCta } from "../../../components/EsPage";

export const metadata = {
  title: "Conozca a la Dra. Mahvash Emami, DDS — 40 Años de Experiencia",
  description: "La Dra. Mahvash Emami, DDS es especialista en implantología en Sunland, CA con 40 años de experiencia clínica y miles de implantes colocados. Fundadora de Sunland Dental Care desde 1991.",
  alternates: { canonical: "/es/dra-emami", languages: { "en-US": "/dr-emami", "es-US": "/es/dra-emami" } },
};

const FAQS = [
  ["¿Cuántos años de experiencia tiene la Dra. Emami?", "La Dra. Mahvash Emami, DDS tiene 40 años de experiencia clínica y dirige Sunland Dental Care en la misma dirección de Foothill Boulevard desde 1991."],
  ["¿Cuál es su especialidad?", "Se enfoca en implantología — ha colocado miles de implantes dentales con planificación quirúrgica guiada en 3D — junto con odontología restauradora, cosmética y familiar conservadora."],
  ["¿La Dra. Emami realiza el procedimiento personalmente?", "Sí. La consulta, las imágenes 3D, la colocación guiada y la restauración final las realiza ella misma en la oficina de Sunland, sin enviarle a especialistas externos."],
];

export default function Page() {
  return (
    <>
      <Schema>{graph({ "@type": "ProfilePage", "@id": `${SITE.url}/es/dra-emami#page`, url: `${SITE.url}/es/dra-emami`, name: "Dra. Mahvash Emami, DDS", inLanguage: "es-US", mainEntity: { "@id": `${SITE.url}/#dr-emami` } }, faqSchema(FAQS), breadcrumbs([{ name: "Inicio", path: "/es" }, { name: "Dra. Emami", path: "/es/dra-emami" }]))}</Schema>
      <section className="border-b border-line bg-parchment/60">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-[.72fr_1fr]">
          <img src="/images/ph-reception.jpg" alt="Dra. Mahvash Emami, DDS, especialista en implantología en Sunland, CA"
               className="arch mx-auto w-full max-w-sm border border-line shadow-md" />
          <div>
            <span className="accent-bar" aria-hidden="true"></span>
            <p className="chip">Fundadora · Sunland Dental Care · Desde {DOCTOR.established}</p>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">Dra. Mahvash Emami, <span className="text-brand">DDS</span></h1>
            <p className="mt-2 text-lg text-ink-soft">Especialista en implantología · Fundadora de Sunland Dental Care</p>
            <p className="mt-6 max-w-xl text-ink-soft">
              En implantología no hay sustituto para la experiencia. La Dra. Emami ha dedicado cuatro décadas a perfeccionar
              el arte del implante dental — miles colocados, planificados en un entorno 3D antes de comenzar la cirugía y
              restaurados en la misma oficina donde ocurrió la primera consulta.
            </p>
            <a href={`tel:${NAP.phoneIntl}`} className="mt-7 inline-block rounded-full bg-brand px-6 py-3 font-bold text-white hover:bg-brand-dark">Pida su cita — {NAP.phone}</a>
          </div>
        </div>
      </section>
      <EsProse>
        <h2>La misma doctora. La misma dirección. Desde 1991.</h2>
        <p>La Dra. Emami abrió Sunland Dental Care en {NAP.street} en {DOCTOR.established}, y ha atendido a la comunidad de Sunland-Tujunga desde esa misma oficina — el tiempo suficiente para que los nietos de sus primeros pacientes se sienten hoy en las mismas sillas. Esa continuidad es poco común en Los Ángeles y define su forma de trabajar: cuando su dentista espera verle durante décadas, el único tratamiento que vale la pena es el que dura.</p>
        <p>Su enfoque clínico es la implantología. En {DOCTOR.yearsExperience} años ha colocado miles de implantes, y combina esa experiencia con cirugía guiada en 3D: cada caso se planifica digitalmente, milímetro a milímetro, antes de comenzar. El resultado es una colocación precisa, mínimamente invasiva y predecible, con una recuperación más rápida.</p>
        <p>Igual de importante es lo que decide no hacer. La Dra. Emami practica una odontología conservadora: diagnóstico de alta magnificación para detectar problemas temprano, la opción menos invasiva que realmente funcione y la costumbre — que sus pacientes mencionan seguido — de convencer a la gente de <em>no</em> hacerse tratamientos que no necesita.</p>
        <blockquote className="border-l-4 border-brand pl-6 text-2xl font-medium leading-snug text-ink">
          "Tratamos la boca como la puerta de entrada al cuerpo. Al eliminar la infección de las encías, quitamos presión al sistema inmunológico y al corazón."
        </blockquote>
        <p className="text-sm font-bold text-ink">— Dra. Mahvash Emami, DDS</p>
        <h2>Idiomas</h2>
        <p>La oficina atiende a pacientes en <strong>español</strong>, inglés y farsi — algo que importa cuando se trata de entender su plan de tratamiento, no solo de asentir con la cabeza.</p>
      </EsProse>
      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <img src="/images/ph-op-3.jpg" alt="La Dra. Emami con un paciente" className="h-64 w-full rounded-2xl border border-line object-cover md:h-80" />
          <img src="/images/ph-consult.jpg" alt="La Dra. Emami explicando un implante dental" className="h-64 w-full rounded-2xl border border-line object-cover md:h-80" />
          <img src="/images/ph-clinic-wide.jpg" alt="Interior de Sunland Dental Care" className="col-span-2 h-64 w-full rounded-2xl border border-line object-cover md:col-span-1 md:h-80" />
        </div>
      </section>
      <EsFaq faqs={FAQS} title="Sobre la Dra. Emami" />
      <EsCta title="Conózcala en persona" />
    </>
  );
}
