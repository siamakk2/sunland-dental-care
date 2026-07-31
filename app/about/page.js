import Link from "next/link";
import { DOCTOR, NAP } from "../../lib/practice";
import { Schema, graph, breadcrumbs } from "../../lib/schema";
import { PageHero, Cta, Prose } from "../../components/blocks";

export const metadata = {
  title: "About Sunland Dental Care — Serving Sunland-Tujunga Since 1991",
  description: `Established in 1991, Sunland Dental Care has provided three decades of continuous care to Sunland-Tujunga from the same Foothill Blvd office, led by implantology specialist ${DOCTOR.name}.`,
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <>
      <Schema>{graph(breadcrumbs([{ name: "Home", path: "/" }, { name: "About", path: "/about" }]))}</Schema>
      <PageHero eyebrow={`Est. ${DOCTOR.established} · Sunland-Tujunga`}
        title="A neighborhood practice, three generations deep"
        lead="From our first patient in the '90s to the grandchildren of those patients today, our stability is your guarantee of consistent, high-quality care." />
      <Prose>
        <h2>Thirty-five years on Foothill Boulevard</h2>
        <p>Sunland Dental Care opened its doors at {NAP.street} in {DOCTOR.established} and has never moved. In a city where practices change hands and names every few years, that continuity means your records, your history, and your doctor stay put — and treatment decisions are made by someone who expects to see you again for decades.</p>
        <h2>Led by Dr. Mahvash Emami, DDS</h2>
        <p>The practice is founded and led by <Link href="/dr-emami" className="font-semibold text-ink underline decoration-brand/40 underline-offset-2 hover:text-brand">{DOCTOR.name}</Link>, an implantology specialist with {DOCTOR.yearsExperience} years of clinical experience and thousands of implants placed. Her philosophy shapes everything here: conservative treatment, gums-first hygiene, and honest recommendations — including telling patients when they <em>don't</em> need work.</p>
        <h2>Everything in-house</h2>
        <p>Consultation, 3D imaging, implant surgery, restorations, cosmetic care, aligners, and family dentistry all happen in one office. No referral maze, no repeating your story to a new specialist, no stacked fees.</p>
      </Prose>
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <img src="/images/office-waiting.jpg" alt="Waiting area at Sunland Dental Care" className="h-56 w-full rounded-2xl border border-line object-cover md:h-72" />
          <img src="/images/office-operatory.jpg" alt="Treatment room at Sunland Dental Care" className="h-56 w-full rounded-2xl border border-line object-cover md:h-72" />
          <img src="/images/dr-emami-office.jpg" alt="Dr. Emami in the Sunland Dental Care office" className="col-span-2 h-56 w-full rounded-2xl border border-line object-cover md:col-span-1 md:h-72" />
        </div>
      </section>
      <Cta title="Come see the office for yourself" />
    </>
  );
}
