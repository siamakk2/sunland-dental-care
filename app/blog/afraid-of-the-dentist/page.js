import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS[5];
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Will the dentist lecture me about waiting so long?",
   "Not here. You already know how long it's been — repeating it helps nobody. The visit is about where your mouth is today and the calmest path forward, period."],
  ["Is it too late to fix my teeth?",
   "In 40 years, Dr. Emami has almost never met a mouth that was truly 'too late.' Modern dentistry — implants, dentures, periodontal therapy — rebuilds from starting points people are convinced are hopeless. The only unfixable mouth is the one that never comes in."],
  ["Can I just get an exam and walk away to think about it?",
   "Yes, and that's encouraged. A first visit is an exam, honest findings, and exact written pricing — nothing is scheduled until you decide. Sleeping on a treatment plan is a sign of a good office, not a problem."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: nothing bad happens at the first visit back.</strong> No lecture, no shame, no surprise drill. An exam, an honest conversation, exact prices in writing — and you decide what happens next. That's the whole event. But if you've been away five, ten, or twenty years, you already know the fear isn't really about the chair.</p>
      <h2>What keeps people away</h2>
      <p>It's rarely just pain-fear. It's embarrassment about what the dentist will find. It's dread of a lecture. It's the certainty that the bill will be a five-figure ambush. Nearly three-quarters of adults carry some dental fear — the patients in our chairs aren't different from you; they just came in.</p>
      <h2>What the first visit actually looks like</h2>
      <ol>
        <li><strong>A conversation first.</strong> What bothers you, what you want, what you're afraid of. Say "I'm nervous" out loud — it changes how the whole visit is paced.</li>
        <li><strong>A gentle, thorough exam.</strong> High-magnification diagnostics and imaging as needed. Looking, not drilling.</li>
        <li><strong>Honest findings, in plain language.</strong> What's urgent, what can wait, what needs nothing — and patients here are regularly told that last category is bigger than they feared.</li>
        <li><strong>Exact pricing, in writing, zero pressure.</strong> You take the plan home. Deciding later is normal.</li>
      </ol>
      <h2>Why this office, if you're the nervous type</h2>
      <p><Link href="/dr-emami">Dr. Emami</Link> opened this office in 1991 and has spent 40 years being the second opinion after somewhere scarier. The practice runs on minimally invasive care — fix only what needs fixing — which is precisely the philosophy an anxious patient needs. And the numbers are fixed and public, like the <Link href="/dental-implants">$2,000 complete implant</Link>, because financial ambush is its own kind of fear.</p>
      <p>Whenever you're ready — even if that's just a phone question this week — <Link href="/new-patients">here's exactly what to expect</Link>. You'll be met with kindness, not a lecture.</p>
    </BlogPost>
  );
}
