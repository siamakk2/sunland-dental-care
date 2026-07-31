"use client";
import { useState } from "react";
import { NAP } from "../lib/practice";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", topic: "New patient appointment", message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const send = () => {
    const subject = `Website inquiry — ${form.topic}${form.name ? ` — ${form.name}` : ""}`;
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nTopic: ${form.topic}\n\n${form.message}`;
    window.location.href = `mailto:${NAP.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="rounded-3xl border border-line bg-white/70 p-6 shadow-sm md:p-8">
      <p className="eyebrow text-brand">Send a message</p>
      <h2 className="mt-2 text-2xl font-semibold">Request an appointment</h2>
      <p className="mt-2 text-sm text-ink-soft">
        Fill this in and press send — it opens an email to the office, ready to go.
        Prefer to talk? <a className="font-semibold text-brand hover:underline" href={`tel:${NAP.phoneIntl}`}>Call {NAP.phone}</a>.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-semibold">
          Your name
          <input value={form.name} onChange={set("name")} autoComplete="name"
            className="mt-1 w-full rounded-xl border border-line bg-cream px-4 py-3 font-normal outline-none focus:border-brand" placeholder="Full name" />
        </label>
        <label className="block text-sm font-semibold">
          Phone number
          <input value={form.phone} onChange={set("phone")} autoComplete="tel" inputMode="tel"
            className="mt-1 w-full rounded-xl border border-line bg-cream px-4 py-3 font-normal outline-none focus:border-brand" placeholder="(818) 555-0100" />
        </label>
      </div>
      <label className="mt-4 block text-sm font-semibold">
        What is this about?
        <select value={form.topic} onChange={set("topic")}
          className="mt-1 w-full rounded-xl border border-line bg-cream px-4 py-3 font-normal outline-none focus:border-brand">
          {["New patient appointment", "Dental implants / $2,000 complete implant", "Cosmetic dentistry", "Invisalign", "Cleaning & checkup", "Second opinion", "Something else"].map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="mt-4 block text-sm font-semibold">
        Message
        <textarea value={form.message} onChange={set("message")} rows={4}
          className="mt-1 w-full rounded-xl border border-line bg-cream px-4 py-3 font-normal outline-none focus:border-brand"
          placeholder="Tell us briefly what you need — and good times to reach you." />
      </label>
      <button onClick={send}
        className="mt-6 w-full rounded-full bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark md:w-auto">
        Send message
      </button>
      <p className="mt-3 text-xs text-ink-soft">Please don't include medical details in this form — save those for your visit.</p>
    </div>
  );
}
