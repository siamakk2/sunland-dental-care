import { NAP, DOCTOR } from "../../lib/practice";
import { Schema, graph, breadcrumbs, faqSchema, serviceSchema, webPage } from "../../lib/schema";
import { PageHero, Reviewed, FaqBlock, Cta, Prose } from "../../components/blocks";

export const metadata = {
  title: "Emergency Dentist in Sunland, CA — Call (818) 353-5520",
  description: "Dental emergency in Sunland-Tujunga? Call Sunland Dental Care at (818) 353-5520. Urgent toothache, broken tooth, knocked-out tooth, or swelling — Dr. Emami's office makes room for urgent pain during office hours, Mon–Fri 9–5.",
  alternates: { canonical: "/emergency-dentist" },
};

const FAQS = [
  ["What should I do about a knocked-out tooth?",
   "Time matters most. Pick the tooth up by the crown (not the root), rinse it gently without scrubbing, and if possible place it back in the socket or keep it in milk. Then call the office immediately — a tooth replanted within about an hour has the best chance of being saved."],
  ["What counts as a dental emergency?",
   "Severe or worsening tooth pain, facial swelling, a knocked-out or broken tooth, uncontrolled bleeding, or an abscess. If you're unsure, call — describing your symptoms over the phone takes two minutes and gets you a straight answer on how urgent it is."],
  ["Do you see emergency patients the same day?",
   "During office hours (Mon–Fri 9–5) the office makes room for patients in urgent pain whenever possible. Call (818) 353-5520 first so the team can prepare for you and advise you before you arrive."],
  ["What if my emergency happens at night or on a weekend?",
   "Call the office line and follow the instructions provided. For facial swelling affecting breathing or swallowing, high fever with dental pain, or trauma with uncontrolled bleeding, go to the nearest emergency room first — those are medical emergencies."],
];

export default function Page() {
  return (
    <>
      <Schema>{graph(serviceSchema({ name: "Emergency Dentistry", path: "/emergency-dentist", description: "Urgent dental care in Sunland, CA for toothache, broken teeth, knocked-out teeth, and dental swelling." }), webPage({ path: "/emergency-dentist", name: "Emergency Dentist" }), faqSchema(FAQS), breadcrumbs([
        { name: "Home", path: "/" }, { name: "Emergency Dentist", path: "/emergency-dentist" }]))}</Schema>
      <PageHero image="/images/office-waiting.webp" pos="center 45%" eyebrow="Urgent dental care · Sunland-Tujunga"
        title={<>In pain? <span className="text-brand">Call now.</span></>}
        lead="Severe toothache, broken tooth, swelling — don't wait it out. Call the office and the team will tell you exactly what to do next, and make room for urgent pain during office hours." />
      <section className="mx-auto max-w-6xl px-4 pt-8">
        <a href={`tel:${NAP.phoneIntl}`} className="block rounded-3xl bg-brand px-6 py-8 text-center text-2xl font-bold text-white hover:bg-brand-dark md:text-3xl">
          📞 {NAP.phone} — tap to call
        </a>
        <p className="mt-3 text-center text-sm text-ink-soft">Office hours Mon–Fri 9:00 AM – 5:00 PM · {NAP.street}, {NAP.city}</p>
      </section>
      <Reviewed />
      <Prose>
        <h2>While you're on your way</h2>
        <p><strong>Toothache:</strong> rinse with warm salt water and take an over-the-counter pain reliever as directed. Don't place aspirin against the gum — it burns tissue.</p>
        <p><strong>Broken or chipped tooth:</strong> save any pieces, rinse your mouth gently, and use a cold compress on the outside of the cheek for swelling.</p>
        <p><strong>Knocked-out tooth:</strong> handle by the crown only, keep it moist (back in the socket or in milk), and get to the office within the hour if you can.</p>
        <p><strong>Swelling or abscess:</strong> this is infection — it will not resolve on its own. Call immediately; if swelling affects your breathing or swallowing, go to the ER first.</p>
        <h2>Why patients in pain come here</h2>
        <p>After {DOCTOR.yearsExperience} years, very little is new to Dr. Emami. Emergency visits focus on two things in order: getting you out of pain today, and giving you an honest plan — with exact pricing — for fixing the cause. Nothing gets sold to you while you're hurting.</p>
      </Prose>
      <FaqBlock title="Emergency questions" faqs={FAQS} />
      <Cta title="Save the number" body={`Put ${NAP.phone} in your phone now — if a dental emergency ever hits, you won't want to be searching.`} />
    </>
  );
}
