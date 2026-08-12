import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "all-on-4-cost-glendale");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["How much does All-on-4 cost near Glendale?",
   "Full-arch implant treatment in the Los Angeles area commonly runs $20,000–$30,000 or more per arch, depending on the materials used for the final teeth, whether extractions and grafting are needed, and how many offices are involved. Exact pricing requires 3D imaging and an exam."],
  ["Why do full-arch quotes vary by so much?",
   "Three reasons: the material of the final prosthesis (acrylic versus zirconia can differ by many thousands), whether extractions, grafting, and sedation are included or billed separately, and how many providers split the case. Two quotes are only comparable once you know all three."],
  ["Is All-on-4 cheaper than individual implants for every tooth?",
   "Substantially. Replacing a full arch tooth by tooth would require many more implants and crowns. Full-arch treatment supports an entire arch on roughly four to six implants, which is precisely why the technique exists."],
  ["Does insurance cover full-arch implants?",
   "Rarely in full. Some plans contribute toward extractions or the prosthesis, but annual maximums — often $1,000–$2,000 — cover a small fraction. Verify your specific plan before assuming either way."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: full-arch All-on-4 treatment in the Glendale area typically runs $20,000–$30,000 or more per arch — and the spread between quotes is driven almost entirely by materials, what's bundled, and how many offices are involved, not by the implants themselves.</strong></p>

      <h2>What you're actually paying for</h2>
      <p>A full-arch case includes several distinct components, and quotes differ mainly in which ones they name:</p>
      <ul>
        <li><strong>Extractions</strong> of remaining failing teeth, often the same day as surgery</li>
        <li><strong>Four to six implants</strong> per arch, angled to use available bone</li>
        <li><strong>A temporary prosthesis</strong> worn while the implants integrate</li>
        <li><strong>The final prosthesis</strong> — and this is the big variable. Acrylic-on-titanium and full zirconia can differ by many thousands per arch in both cost and longevity.</li>
        <li><strong>3D imaging, surgical guides, sedation, and follow-up</strong></li>
      </ul>

      <h2>Why the same case can differ by $10,000</h2>
      <p>Glendale has excellent implant providers, but the standard structure sends a case through multiple hands — a surgeon places, a restorative dentist finishes, a lab fabricates. Each has its own fee schedule and margin, and Brand-corridor medical overhead isn't cheap. None of that is overcharging; it's simply how a referral model prices out. When one dentist performs the planning, the surgery, and the restoration, those layers collapse.</p>

      <h2>How to compare two full-arch quotes honestly</h2>
      <ol>
        <li><strong>What material is the final prosthesis?</strong> If it isn't named, the quote is incomplete.</li>
        <li><strong>Are extractions, temporaries, sedation, and follow-up included?</strong> These commonly appear later as separate line items.</li>
        <li><strong>Who performs each stage?</strong> One doctor or three, and what happens if something needs adjusting in year two.</li>
        <li><strong>Is the number fixed in writing before treatment begins?</strong> This single question filters most surprises.</li>
      </ol>

      <h2>The Sunland alternative, fifteen minutes up the 210</h2>
      <p>At <Link href="/full-arch-implants">Sunland Dental Care</Link>, <Link href="/dr-emami">Dr. Mahvash Emami, DDS</Link> plans full-arch cases in 3D, places the implants, and delivers the final teeth herself — 40 years and thousands of implants, one office, one person accountable for the result. Full-arch pricing is quoted exactly and in writing after imaging, following the same transparency behind the published <Link href="/dental-implants">$2,000 complete single implant</Link>.</p>
      <p>She'll also tell you plainly if full-arch isn't your best option — sometimes saving remaining teeth or a well-made <Link href="/dentures">implant-supported denture</Link> serves a patient better for far less. See the <Link href="/dentist-glendale">Glendale patient page</Link>, or read <Link href="/blog/all-on-4-explained">All-on-4 explained</Link>.</p>
    </BlogPost>
  );
}
