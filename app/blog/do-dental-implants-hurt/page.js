import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS[1];
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Is getting an implant worse than a tooth extraction?",
   "Usually the opposite. Most patients report implant placement as gentler than the extraction that preceded it — guided placement is precise and small, while extractions involve loosening a tooth from living bone."],
  ["How long does the pain last after implant surgery?",
   "Typical soreness peaks the first day or two and fades within a week, managed with over-the-counter pain relievers. Many patients return to work the next day."],
  ["What about people with dental anxiety?",
   "Say so up front — it changes how the visit is run. Slower pacing, full explanation before each step, and generous anesthesia make the difference. Fear of the unknown is most of dental fear; removing the unknown removes most of it."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: implant placement is done under local anesthesia, and most patients feel pressure — not pain — during the procedure, with a few days of manageable soreness after.</strong> After thousands of implants, the sentence Dr. Emami hears most often afterward is some version of "that was it?"</p>
      <h2>During the procedure</h2>
      <p>The site is thoroughly numbed before anything begins — you'll feel vibration and pressure, the way you would with a filling, but the nerves that carry sharp pain are off-duty. Because every case at <Link href="/dental-implants">Sunland Dental Care</Link> is planned in 3D beforehand, the surgical site is small and the procedure short; guided placement means no exploring, no guessing, no extra trauma.</p>
      <h2>That night and the week after</h2>
      <p>Expect the site to be tender when the anesthesia fades — most patients describe it as a bruise-like ache, handled with over-the-counter ibuprofen. Mild swelling for a day or two is normal. Most people work the next day and eat carefully on the other side for a few days. By the one-week mark, most forget which side the implant is on until they're reminded.</p>
      <h2>Why the fear outweighs the reality</h2>
      <p>Implant dread mostly borrows from old extraction and root-canal stories — procedures whose reputations are themselves decades out of date. Modern anesthesia, high-magnification technique, and 3D planning have quietly turned implant placement into one of dentistry's more predictable, lower-drama procedures. The osseointegration that follows — the bone fusing to the post over a few months — is completely painless; you won't feel it happening at all.</p>
      <p>If fear has been the thing standing between you and fixing your smile, read <Link href="/blog/afraid-of-the-dentist">what a first visit back actually looks like</Link> — and know that being nervous is common, normal, and accommodated here.</p>
    </BlogPost>
  );
}
