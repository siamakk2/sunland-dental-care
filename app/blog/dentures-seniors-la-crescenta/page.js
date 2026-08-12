import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "dentures-seniors-la-crescenta");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Why won't my lower denture stay in place?",
   "Because the lower jaw offers far less surface for suction than the upper, and the ridge shrinks over the years as bone recedes where teeth used to be. This is the single most common denture complaint, and implant support is the reliable fix."],
  ["How many implants does a snap-in denture need?",
   "Commonly two to four per arch. Two implants dramatically improve a lower denture's stability; four provides more support still. Your bone volume, evaluated with 3D imaging, determines what's appropriate."],
  ["Does Medicare cover dentures?",
   "Traditional Medicare generally does not cover routine dental care, including dentures. Some Medicare Advantage plans include limited dental benefits with annual caps. Verify your specific plan — and ask any office for exact written pricing regardless."],
  ["Is it too late to switch from dentures to implants?",
   "Often not, though years of denture wear cause bone loss that may require grafting. Patients who were told no years ago frequently qualify under modern 3D planning — it's worth a fresh evaluation rather than assuming the old answer still holds."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: a conventional denture is the least expensive option up front, but an implant-supported denture — snapping onto two to four implants — solves the slipping, restores real chewing power, and slows the bone loss that makes conventional dentures fit worse every year.</strong> For most older adults weighing the two, the deciding factor isn't the initial price. It's the lower jaw.</p>

      <h2>The lower denture problem</h2>
      <p>Upper dentures usually behave: the palate gives enough surface for suction. Lower dentures float. There's little surface area, the tongue works against them, and the ridge beneath keeps shrinking. Adhesive is a daily workaround, not a solution — and the reason so many people quietly stop wearing the lower one and chew on their gums instead.</p>

      <h2>What implant support changes</h2>
      <ul>
        <li><strong>It stays put.</strong> The denture clicks onto attachments and doesn't move while you eat or talk.</li>
        <li><strong>Chewing power multiplies.</strong> Steak, apples, corn — foods most denture wearers have quietly given up.</li>
        <li><strong>Bone is preserved</strong> where the implants sit, slowing the facial collapse that makes long-term denture wearers look older than they are.</li>
        <li><strong>No adhesive,</strong> and no worrying mid-conversation.</li>
      </ul>

      <h2>The honest cost comparison</h2>
      <p>A conventional denture costs less at the outset. Over ten to fifteen years, though, it needs relines as the ridge changes, then eventually replacement, and the bone underneath continues receding regardless. An implant-supported denture costs more initially and holds its fit far longer. Neither is wrong — but comparing only the first invoice makes the cheaper option look better than it will feel in year eight.</p>

      <h2>What a real evaluation involves</h2>
      <p>3D imaging to measure the bone you actually have, a periodontal check, a conversation about what you can no longer eat comfortably, and exact written pricing for each option — conventional, implant-supported, and where relevant <Link href="/full-arch-implants">full-arch fixed teeth</Link>. At <Link href="/dentures">Sunland Dental Care</Link>, <Link href="/dr-emami">Dr. Emami</Link> both makes the dentures and places the implants, so the recommendation isn't shaped by which procedure she'd have to refer out.</p>
      <p>About ten minutes west of La Crescenta-Montrose along Foothill Boulevard. See the <Link href="/dentist-la-crescenta">La Crescenta patient page</Link>, or read <Link href="/blog/dental-implants-for-seniors">whether 70 or 80 is too old for implants</Link>.</p>
    </BlogPost>
  );
}
