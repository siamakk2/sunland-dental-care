import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "dentista-que-habla-espanol-sun-valley");
export const metadata = {
  title: meta.title, description: meta.description,
  alternates: { canonical: `/blog/${meta.slug}`, languages: { "es-US": `/blog/${meta.slug}` } },
};

const FAQS = [
  ["¿Hay un dentista que hable español cerca de Sun Valley?",
   "Sí. Sunland Dental Care, en 7902 Foothill Blvd, Sunland, CA 91040 — a unos diez minutos de Sun Valley — atiende a pacientes en español, inglés y farsi. Llame al (818) 353-5520 y con gusto le atendemos en su idioma."],
  ["¿Cuánto cuesta un implante dental?",
   "Un implante dental completo cuesta $2,000 con precio fijo: incluye la consulta, las imágenes 3D, la cirugía guiada y la corona final. Sin cargos ocultos. En Los Ángeles un solo implante suele superar los $5,000."],
  ["¿Atienden a pacientes sin seguro dental?",
   "Sí. Muchos de nuestros pacientes pagan directamente. Cada plan de tratamiento incluye un presupuesto exacto por escrito antes de programar nada, y la oficina puede conversar arreglos de pago para tratamientos grandes."],
  ["¿Puedo llevar a toda mi familia?",
   "Claro. Sunland Dental Care es una consulta familiar desde 1991 y atiende desde niños hasta abuelos — muchas familias del área traen ya a la tercera generación."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>La respuesta directa: sí — Sunland Dental Care atiende en español a unos diez minutos de Sun Valley, en 7902 Foothill Blvd, y publica sus precios en lugar de cotizarlos caso por caso.</strong> Entender su tratamiento no debería depender de su inglés, y asentir con la cabeza sin comprender no es consentimiento informado.</p>

      <h2>Por qué importa el idioma en el consultorio dental</h2>
      <p>Un plan de tratamiento dental incluye decisiones reales: qué es urgente, qué puede esperar, qué opciones existen y cuánto cuesta cada una. Cuando esa conversación ocurre en un idioma que no domina, es fácil aceptar tratamientos que no necesitaba — o rechazar los que sí. La <Link href="/dr-emami">Dra. Mahvash Emami, DDS</Link> lleva 40 años explicando tratamientos, y la oficina atiende en <strong>español, inglés y farsi</strong>.</p>

      <h2>Precios publicados, no cotizaciones sorpresa</h2>
      <p>El costo es la segunda barrera más común después del idioma. Aquí el precio del implante dental completo — consulta, imágenes 3D, cirugía guiada y corona final — es <strong>$2,000 fijo</strong>, publicado abiertamente. Para todo lo demás recibe un presupuesto exacto por escrito antes de programar. Vea <Link href="/es/precios">nuestros precios</Link>.</p>

      <h2>Todo en una sola oficina</h2>
      <p>En gran parte de Los Ángeles un implante significa tres consultorios distintos: el dentista general, el cirujano y el restaurador — tres facturas y tres veces que contar su historia. La Dra. Emami realiza todas las etapas ella misma en la oficina de Sunland. Vea <Link href="/es/implantes-dentales">cómo funciona el proceso</Link>.</p>

      <h2>Servicios para toda la familia</h2>
      <ul>
        <li>Limpiezas, empastes y tratamiento de encías</li>
        <li><Link href="/es/implantes-dentales">Implantes dentales</Link> y dentaduras sujetas a implantes</li>
        <li>Odontología cosmética: carillas, coronas y blanqueamiento</li>
        <li>Ortodoncia con alineadores transparentes</li>
        <li>Endodoncia (tratamiento de conducto) y urgencias dentales</li>
      </ul>

      <h2>Cómo llegar desde Sun Valley</h2>
      <p>Unos diez minutos por Sunland Boulevard hasta {""}7902 Foothill Blvd, Sunland, CA 91040. Estacionamiento gratuito. Horario de lunes a viernes, de 9:00 AM a 5:00 PM. Llame al <strong>(818) 353-5520</strong> — o vea la <Link href="/dentist-sun-valley">página para pacientes de Sun Valley</Link> y el <Link href="/es">sitio completo en español</Link>.</p>
    </BlogPost>
  );
}
