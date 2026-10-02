import Link from "next/link";
import { DOCTOR, NAP, SITE, CLINICAL_REVIEW_COMPLETE } from "../lib/practice";
import { Schema, graph, breadcrumbs, faqSchema, articleSchema } from "../lib/schema";
import { FaqBlock, Cta } from "./blocks";

export default function BlogPost({ meta, faqs, children }) {
  const path = `/blog/${meta.slug}`;
  return (
    <>
      <Schema>{graph(articleSchema({ title: meta.title, path, description: meta.description, datePublished: meta.date }),
        ...(faqs ? [faqSchema(faqs)] : []),
        breadcrumbs([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: meta.title, path }]))}</Schema>
      <article>
        <header className="border-b border-line bg-parchment/60">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-[1.15fr_.85fr] md:py-16">
            <div>
            <span className="accent-bar" aria-hidden="true"></span>
            <p className="chip">{meta.tag}</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">{meta.title}</h1>
            <p className="mt-5 text-sm font-semibold text-ink-soft">
              {SITE.name} · {meta.read} read · Published{" "}
              {new Date(meta.date + "T12:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            {CLINICAL_REVIEW_COMPLETE && (
              <p className="mt-2 text-sm text-ink-soft">
                Clinically reviewed by <Link href="/dr-emami" className="font-semibold text-brand hover:underline">{DOCTOR.name}</Link>
              </p>
            )}
            </div>
            {meta.image && (
              <img src={meta.image} alt="" aria-hidden="true"
                   className="w-full rounded-3xl border border-line shadow-md" />
            )}
          </div>
        </header>
        <div className="mx-auto max-w-3xl space-y-5 px-4 py-12 text-lg text-ink-soft [&_h2]:pt-4 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-ink [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-ink [&_strong]:text-ink [&_a]:font-semibold [&_a]:text-brand [&_a]:underline [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6">
          {children}
        </div>
        <p className="mx-auto max-w-3xl px-4 pb-4 text-sm text-ink-soft">
          This article is general patient education, not dental advice, and it cannot account for your individual
          health history. Treatment suitability, risks, and alternatives differ from person to person and need an
          in-person examination. <Link href="/contact" className="font-semibold text-brand underline">Ask us about your own case</Link>.
        </p>
        {faqs && <FaqBlock title="Related questions" faqs={faqs} />}
        <Cta title="Talk to a dentist who'll give it to you straight" body={`Dr. Emami sees every new patient herself. Call ${NAP.phone} — English, Español, فارسی.`} />
      </article>
    </>
  );
}
