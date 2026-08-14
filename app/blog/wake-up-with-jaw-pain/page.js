import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "wake-up-with-jaw-pain");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["How do I know if I grind my teeth at night?",
   "Common signs: waking with a tight or sore jaw, temple headaches in the morning, teeth that are sensitive without decay, flattened or chipped edges, and a partner who hears it. Dentists often spot the wear pattern before patients notice any symptom."],
  ["Can grinding damage dental work?",
   "Yes — it's a leading cause of cracked teeth, fractured fillings, chipped veneers, and failed crowns. It also stresses implants, which is why a night guard is often recommended after significant restorative work."],
  ["Does a night guard stop grinding?",
   "It doesn't stop the clenching, but it absorbs the force so your teeth aren't what's being ground down. Think of it as protecting the teeth rather than curing the habit."],
  ["Is jaw pain always from grinding?",
   "No. TMJ disorders, arthritis, an uneven bite, sinus problems, and rarely referred pain from other sources can all cause jaw discomfort. Morning-predominant pain points strongly toward nighttime activity, but an exam is what distinguishes them."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: waking with a sore jaw, temple headaches, or newly sensitive teeth usually means you're grinding or clenching in your sleep — a condition called bruxism that most people don't know they have.</strong> The damage happens quietly over years, and it's one of the few dental problems where the dentist usually notices before the patient does.</p>

      <h2>The pattern that gives it away</h2>
      <ul>
        <li>Pain that's <strong>worst on waking</strong> and eases through the morning</li>
        <li>Headaches at the <strong>temples</strong> — that's the temporalis, a chewing muscle</li>
        <li><strong>Sensitive teeth with no decay</strong>, from enamel worn thin</li>
        <li><strong>Flattened, chipped, or shortened</strong> edges, especially on the front teeth</li>
        <li>A jaw that <strong>feels tired</strong> or clicks</li>
        <li>Scalloped edges on the tongue or a ridge along the inside of the cheek</li>
      </ul>

      <h2>Why it matters more than the discomfort</h2>
      <p>Chewing muscles are capable of enormous force, and in sleep the reflexes that normally limit it are switched off. Applied nightly for years, that force cracks teeth, fractures fillings, wears enamel to the dentin, and stresses the bone around teeth and <Link href="/dental-implants">implants</Link>. A great deal of the emergency work in dentistry — cracked molars, broken crowns — traces back to grinding nobody ever addressed.</p>

      <h2>What actually helps</h2>
      <ol>
        <li><strong>A properly fitted night guard.</strong> A custom guard from your dentist distributes force and protects the teeth. Boil-and-bite versions from a pharmacy are better than nothing but fit poorly and can shift the bite over time.</li>
        <li><strong>Address the stress input.</strong> Bruxism strongly correlates with stress and disrupted sleep; the habit often eases when those do.</li>
        <li><strong>Check the bite.</strong> Sometimes a high spot on a filling or crown triggers grinding as the jaw searches for a comfortable position. Adjusting it can resolve the problem entirely.</li>
        <li><strong>Consider sleep evaluation.</strong> Bruxism is associated with sleep-disordered breathing, and treating that can reduce the grinding — worth raising with your physician if you snore or wake unrefreshed.</li>
        <li><strong>Repair the damage.</strong> Worn or cracked teeth need restoration, and doing that without a guard afterward is how the new work gets destroyed too.</li>
      </ol>

      <h2>What an exam involves</h2>
      <p>Wear facets are visible and read like a record — a dentist can often tell you which direction you grind and for roughly how long it's been happening. From there it's about protecting what remains and restoring what's already lost, in that order. At <Link href="/general-dentistry">Sunland Dental Care</Link>, the conservative approach applies here as everywhere: protect first, restore only what genuinely needs it.</p>
      <p>Morning jaw pain that's been going on for months deserves a look — <Link href="/contact">book an evaluation</Link>.</p>
    </BlogPost>
  );
}
