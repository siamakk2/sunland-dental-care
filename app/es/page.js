import Link from "next/link";
import { NAP, DOCTOR, OFFER, AREAS } from "../../lib/practice";
import { Schema, graph, faqSchema, breadcrumbs, webPage } from "../../lib/schema";

export const metadata = {
  title: "Dentista en Sunland, CA — Implantes Dentales | Sunland Dental Care",
  description: "Sunland Dental Care es la consulta de la Dra. Mahvash Emami, DDS en Sunland, CA. Implante dental completo por $2,000, precio fijo. 40 años de experiencia. Se habla español. Llame al (818) 353-5520.",
  alternates: { canonical: "/es", languages: { "en-US": "/", "es-US": "/es" } },
};

const FAQS = [
  ["¿Hay un dentista que hable español cerca de Sunland?",
   "Sí. En Sunland Dental Care, ubicada en 7902 Foothill Blvd, Sunland, CA, atendemos a pacientes en español, inglés y farsi. Llame al (818) 353-5520 y con gusto le atendemos en su idioma."],
  ["¿Cuánto cuesta un implante dental?",
   "Un implante dental completo cuesta $2,000 con precio fijo: consulta, imágenes 3D, cirugía guiada y la corona final. Sin cargos ocultos y todo se realiza en nuestra oficina de Sunland."],
  ["¿Quién es la doctora?",
   "La Dra. Mahvash Emami, DDS, especialista en implantología con 40 años de experiencia clínica y miles de implantes colocados. Atiende a la comunidad de Sunland-Tujunga desde 1991 en la misma dirección."],
];

export default function Home() {
  return (
    <>
      <Schema>{graph(webPage({ path: "/es", name: "Dentista en Sunland, CA" }), faqSchema(FAQS), breadcrumbs([{ name: "Inicio", path: "/es" }]))}</Schema>
      <section className="border-b border-line bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-[1.08fr_.92fr] md:py-20">
          <div>
            <span className="accent-bar" aria-hidden="true"></span>
            <p className="chip">Consulta dental en Sunland-Tujunga · Desde {DOCTOR.established}</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] md:text-6xl">
              Cuatro décadas de odontología. Un solo estándar: <em className="text-brand">mínimamente invasiva.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium text-ink-soft">
              Sunland Dental Care es la consulta de la <Link href="/es/dra-emami" className="font-bold text-ink underline decoration-brand decoration-2 underline-offset-4 hover:text-brand">Dra. Mahvash Emami, DDS</Link> —
              especialista en implantología con {DOCTOR.yearsExperience} años de experiencia y miles de implantes colocados.
              Cada tratamiento empieza con el mismo principio: conservar lo sano y corregir solo lo necesario.
            </p>
            <p className="mt-6 text-base font-semibold text-ink">Se habla español · English · <span lang="fa">فارسی</span></p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={`tel:${NAP.phoneIntl}`} className="rounded-full bg-brand px-7 py-3.5 text-lg font-bold text-white shadow-lg shadow-brand/25 hover:bg-brand-dark">Llame al {NAP.phone}</a>
              <Link href="/es/implantes-dentales" className="rounded-full border-2 border-ink px-7 py-3.5 text-lg font-bold hover:border-brand hover:text-brand">Implantes por $2,000 →</Link>
            </div>
          </div>
          <div className="relative mx-auto w-72 md:w-80 lg:w-96">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand" aria-hidden="true"></div>
            <img src="/images/ph-reception.jpg" alt="Dra. Mahvash Emami, DDS en Sunland Dental Care"
                 className="arch relative w-full border border-line object-cover shadow-2xl"
                 style={{ aspectRatio: "5/6", objectPosition: "center 12%" }} />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">
          {[[`${DOCTOR.yearsExperience} años`,"De experiencia clínica"],[String(DOCTOR.established),"Atendiendo Sunland desde"],["Miles","Implantes colocados"],["$2,000","Implante completo, precio fijo"]].map(([v,l]) => (
            <div key={l} className="flex items-center gap-3">
              <dt className="display flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-brand text-center text-base font-bold leading-tight text-white">{v}</dt>
              <dd className="text-sm font-semibold text-ink">{l}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <span className="accent-bar" aria-hidden="true"></span>
        <h2 className="text-3xl font-bold md:text-4xl">Atención completa en una sola oficina</h2>
        <p className="mt-3 max-w-2xl text-ink-soft">Consulta, imágenes 3D, cirugía y restauración se realizan aquí mismo — sin mandarle de un especialista a otro por todo Los Ángeles.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[["Implantes dentales","/es/implantes-dentales","Implante completo a precio fijo — planificación 3D, cirugía guiada y corona, todo bajo un mismo techo."],
            ["Odontología cosmética","/es/servicios","Carillas, coronas, blanqueamiento profesional y diseño de sonrisa."],
            ["Ortodoncia e Invisalign","/es/servicios","Alineadores transparentes para enderezar los dientes con discreción."],
            ["Odontología general y familiar","/es/servicios","Limpiezas, tratamiento de encías, empastes y cuidado restaurador conservador."]].map(([n,h,d]) => (
            <Link key={h+n} href={h} className="group rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:border-brand/50 hover:shadow-md">
              <h3 className="text-xl font-bold group-hover:text-brand">{n}</h3>
              <p className="mt-2 text-sm text-ink-soft">{d}</p>
              <p className="mt-3 text-sm font-bold text-brand">Más información →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1fr_.8fr]">
          <div>
            <p className="eyebrow text-brand-bright">La filosofía</p>
            <blockquote className="display mt-4 text-2xl font-medium leading-snug md:text-3xl">
              "Tratamos la boca como la puerta de entrada al cuerpo. Al eliminar la infección de las encías, quitamos presión al sistema inmunológico y al corazón."
            </blockquote>
            <p className="mt-3 text-sm font-semibold">— Dra. Mahvash Emami, DDS</p>
            <p className="mt-6 text-cream/80">
              La odontología mínimamente invasiva significa detectar los problemas temprano con diagnóstico de alta
              magnificación e imágenes 3D, y tratarlos con la opción más conservadora que realmente funcione. Nunca se
              sacrifica estructura dental sana por conveniencia.
            </p>
            <Link href="/es/dra-emami" className="mt-6 inline-block rounded-full bg-brand px-5 py-2.5 font-bold text-white hover:bg-brand-dark">Conozca a la Dra. Emami →</Link>
          </div>
          <img src="/images/ph-op-2.jpg" alt="La Dra. Emami atendiendo a un paciente" className="rounded-2xl border border-line object-cover shadow-sm" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-3xl bg-brand px-6 py-12 text-white md:px-12">
          <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">Un implante dental completo por $2,000. Completo de verdad.</h2>
          <p className="mt-4 max-w-2xl text-white/85">Consulta y examen, imágenes 3D y planificación quirúrgica, colocación guiada del implante y su corona final — un precio fijo, sin cargos ocultos, realizado de principio a fin por la Dra. Emami.</p>
          <Link href="/es/implantes-dentales" className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-bold text-brand hover:bg-cream">Cómo funciona →</Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <span className="accent-bar" aria-hidden="true"></span>
        <h2 className="text-3xl font-bold">Atendemos Sunland y sus alrededores</h2>
        <p className="mt-3 max-w-2xl text-ink-soft">Ubicados en {NAP.street}, {NAP.city}, CA {NAP.zip}, en el corazón de Sunland-Tujunga — y vale la pena el viaje desde cualquier parte del área de Los Ángeles.</p>
        <ul className="mt-6 flex flex-wrap gap-2 text-sm">
          {AREAS.map((a) => <li key={a} className="rounded-full border border-line bg-white px-3 py-1">{a}</li>)}
        </ul>
      </section>

      <section className="border-t border-line bg-parchment/60">
        <div className="mx-auto max-w-4xl px-4 py-14">
          <h2 className="text-3xl font-bold">Preguntas frecuentes</h2>
          <dl className="mt-8 space-y-6">
            {FAQS.map(([q,a]) => <div key={q}><dt className="font-bold">{q}</dt><dd className="mt-2 text-ink-soft">{a}</dd></div>)}
          </dl>
          <Link href="/es/preguntas-frecuentes" className="mt-8 inline-block font-bold text-brand hover:underline">Ver todas las preguntas →</Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 text-center">
        <h2 className="text-3xl font-bold">¿Listo para hablar de su sonrisa?</h2>
        <p className="mx-auto mt-3 max-w-xl text-ink-soft">Llame a la oficina o envíe un mensaje — la Dra. Emami revisa personalmente cada consulta de paciente nuevo.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={`tel:${NAP.phoneIntl}`} className="rounded-full bg-brand px-6 py-3 font-bold text-white hover:bg-brand-dark">Llame al {NAP.phone}</a>
          <a href={`sms:${NAP.phoneIntl}`} className="rounded-full border-2 border-brand px-6 py-3 font-bold text-brand hover:bg-brand hover:text-white">Envíe un texto</a>
          <Link href="/es/contacto" className="rounded-full border border-ink/25 px-6 py-3 font-bold hover:border-brand hover:text-brand">Solicitar una cita</Link>
        </div>
      </section>
    </>
  );
}
