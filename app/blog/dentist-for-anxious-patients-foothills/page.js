import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "dentist-for-anxious-patients-foothills");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["What should I ask when booking if I'm afraid of the dentist?",
   "Say plainly: \"I have dental anxiety and it's been a long time.\" How the office responds tells you most of what you need to know. A good one will offer a shorter first visit, an exam-only appointment, or time to talk before anything happens."],
  ["Can I have a first visit with no treatment at all?",
   "Yes, and it's a reasonable request. An exam, a conversation, and a written plan you take home is a complete first appointment. Nothing has to be done that day."],
  ["Do I need sedation to get through dental work?",
   "Most patients don't. Thorough local anesthesia, a slower pace, and clear explanation handle the majority of anxiety. Sedation is available at some offices for specific procedures — at Sunland Dental Care it's offered for implant placement — but it isn't the starting point."],
  ["Will the dentist judge me for how long it's been?",
   "They shouldn't, and the good ones don't. You already know how long it's been; repeating it accomplishes nothing clinically. The visit is about where your mouth is today."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: the most useful question to ask when booking isn't about sedation — it's whether you can come in for an exam and conversation with no treatment that day.</strong> An office that says yes without hesitation is one that understands anxious patients. An office that pushes you toward a treatment appointment has told you something too.</p>

      <h2>Dental fear is the norm, not the exception</h2>
      <p>Surveys of American adults consistently find that a large majority report some degree of dental fear, with a substantial share describing it as severe. If you've been avoiding care, you are not an unusual case in that waiting room — you're most of it. The specifics vary: fear of pain, fear of judgment about how long it's been, fear of the bill, or a bad experience decades ago that set the whole thing.</p>

      <h2>What actually reduces fear (and what doesn't)</h2>
      <ul>
        <li><strong>Being told what happens before it happens.</strong> Most dental fear is fear of the unknown. Narration dissolves a surprising amount of it.</li>
        <li><strong>Genuinely adequate anesthesia and the patience to wait for it.</strong> Rushing the numbing is where bad experiences originate.</li>
        <li><strong>Permission to pause.</strong> Agreeing on a hand signal that actually stops the procedure returns control to you.</li>
        <li><strong>Honest triage.</strong> Hearing "this can wait, and this doesn't need anything at all" is enormously calming — and it's the opposite of what anxious patients expect.</li>
        <li><strong>What doesn't help:</strong> being told to relax, or a long list of urgent work delivered at the end of a first visit with a payment plan attached.</li>
      </ul>

      <h2>The financial half of the fear</h2>
      <p>For many people the dread isn't the drill — it's the invoice. Practices that publish fixed prices and give written estimates before treatment remove an entire category of anxiety. Read <Link href="/blog/dental-care-without-insurance">how to get care without insurance</Link> and <Link href="/pricing">how our pricing works</Link>.</p>

      <h2>Foothill communities: what to look for locally</h2>
      <p>Across Sunland, Tujunga, La Crescenta, Glendale, and Burbank, look for a single-doctor practice where the same person sees you every visit — continuity matters more for anxious patients than any amenity. <Link href="/dr-emami">Dr. Mahvash Emami, DDS</Link> has practiced at the same Foothill Boulevard address since 1991, and her patients' most repeated observation in reviews is that she talks them out of treatment they don't need. That disposition is precisely what makes a nervous patient safe.</p>
      <p>Whenever you're ready — even if it's only a phone question this week — here's <Link href="/new-patients">exactly what a first visit involves</Link>, and <Link href="/blog/afraid-of-the-dentist">what coming back after years away actually looks like</Link>.</p>
    </BlogPost>
  );
}
