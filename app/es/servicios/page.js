import Link from "next/link";
import { NAP, DOCTOR } from "../../../lib/practice";
import { Schema, graph, breadcrumbs, webPage } from "../../../lib/schema";
import { EsHero, EsCta } from "../../../components/EsPage";

export const metadata = {
  title: "Todos Nuestros Servicios Dentales — Sunland Dental Care",
  description: "Todos los servicios de Sunland Dental Care en Sunland, CA: implantes dentales, arcada completa, cirugía de encías, sedación para implantes, odontología cosmética, Invisalign, dentaduras, endodoncia, blanqueamiento y urgencias.",
  alternates: { canonical: "/es/servicios", languages: { "en-US": "/services", "es-US": "/es/servicios" } },
};

const GROUPS = [
  { g: "Implantes y reemplazo de dientes", b: "Planificados, colocados y restaurados por una sola doctora.", items: [
    ["Implantes dentales","/es/implantes-dentales","Implante completo — consulta, imágenes 3D, cirugía guiada y corona — por $2,000 fijo."],
    ["Implantes de arcada completa (All-on-4)","/es/implantes-dentales","Una arcada completa de dientes fijos sobre cuatro a seis implantes."],
    ["Dentaduras y sobredentaduras","/es/servicios","Dentaduras completas, parciales y sujetas a implantes que no se mueven."],
    ["Sedación para colocación de implantes","/es/servicios","Opciones de comodidad ofrecidas específicamente para la cirugía de implantes."]]},
  { g: "Salud de las encías", b: "La base sobre la que se construye todo lo demás.", items: [
    ["Enfermedad de las encías y cirugía periodontal","/es/servicios","Limpiezas profundas, terapia periodontal y cirugía de encías — realizadas aquí mismo."],
    ["Odontología general y familiar","/es/servicios","Limpiezas, higiene enfocada en las encías, empastes y cuidado conservador."],
    ["Endodoncia (tratamiento de conducto)","/es/servicios","Tratamiento que salva el diente natural y termina con el dolor."]]},
  { g: "Estética y ortodoncia", b: "Diseñado según su rostro, no según una plantilla.", items: [
    ["Odontología cosmética","/es/servicios","Carillas, coronas, resinas y diseño completo de sonrisa."],
    ["Blanqueamiento dental","/es/servicios","Blanqueamiento profesional supervisado, seguro para su esmalte."],
    ["Invisalign y ortodoncia","/es/servicios","Alineadores transparentes para adultos y adolescentes."]]},
  { g: "Urgencias y aspectos prácticos", b: "Cuando algo se rompe y cuando necesita saber el costo.", items: [
    ["Urgencias dentales","/es/contacto","Dolor de muela, diente roto o hinchazón — llame de inmediato."],
    ["Seguros y formas de pago","/es/precios","Verificación de seguro PPO y presupuestos exactos por escrito."],
    ["Pacientes nuevos","/es/nuevos-pacientes","Qué esperar en su primera visita."]]},
];

export default function Page() {
  return (
    <>
      <Schema>{graph(webPage({ path: "/es/servicios", name: "Todos los servicios" }), breadcrumbs([{ name: "Inicio", path: "/es" }, { name: "Servicios", path: "/es/servicios" }]))}</Schema>
      <EsHero eyebrow="Todo lo que hacemos" image="/images/ph-clinic-wide.jpg" pos="center 30%"
        title={<>Una oficina. <span className="text-brand">Una doctora.</span> Todas las etapas.</>}
        lead={`Desde una limpieza de rutina hasta una arcada completa de implantes — incluida la cirugía de encías y la sedación para implantes — todo lo realiza aquí la ${DOCTOR.name}.`} />
      <section className="mx-auto max-w-6xl px-4 py-12">
        {GROUPS.map((g) => (
          <div key={g.g} className="mb-12">
            <span className="accent-bar" aria-hidden="true"></span>
            <h2 className="text-3xl font-bold">{g.g}</h2>
            <p className="mt-2 text-ink-soft">{g.b}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {g.items.map(([n, href, d]) => (
                <Link key={n} href={href} className="group rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:border-brand/50 hover:shadow-md">
                  <h3 className="text-xl font-bold group-hover:text-brand">{n}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{d}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
      <EsCta title="¿No sabe qué necesita?" body={`Para eso es la consulta. Llame al ${NAP.phone} y describa lo que le pasa — recibirá una respuesta honesta sobre qué es urgente y qué no.`} />
    </>
  );
}
