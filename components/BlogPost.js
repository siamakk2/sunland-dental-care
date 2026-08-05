import Link from "next/link";
import { DOCTOR, NAP } from "../lib/practice";
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
          <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
            <span className="accent-bar" aria-hidden="true"></span>
            <p className="chip">{meta.tag}</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">{meta.title}</h1>
            <p className="mt-5 text-sm font-semibold text-ink-soft">
              By <Link href="/dr-emami" className="text-brand hover:underline">{DOCTOR.name}</Link> · {meta.read} read ·
              Updated {new Date(meta.date + "T12:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </header>
        <div className="mx-auto max-w-3xl space-y-5 px-4 py-12 text-lg text-ink-soft [&_h2]:pt-4 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-ink [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-ink [&_strong]:text-ink [&_a]:font-semibold [&_a]:text-brand [&_a]:underline [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6">
          {children}
        </div>
        {faqs && <FaqBlock title="Related questions" faqs={faqs} />}
        <Cta title="Talk to a dentist who'll give it to you straight" body={`Dr. Emami personally reviews every new-patient consultation. Call ${NAP.phone} — English, Español, فارسی.`} />
      </article>
    </>
  );
}
