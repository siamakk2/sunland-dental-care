"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE, NAP, SERVICES, MORE_SERVICES, DOCTOR } from "../lib/practice";
import { CITIES } from "../lib/cities";

const T = {
  en: {
    langBar: <>We welcome patients in <strong>English</strong> · <strong>Español</strong> · <strong lang="fa">فارسی</strong></>,
    switch: "Español", switchHref: "/es", switchLabel: "Ver el sitio en español",
    nav: [["/services","Services"],["/dental-implants","Dental Implants"],["/invisalign","Invisalign"],["/pricing","Pricing"],["/dr-emami","Dr. Emami"],["/ask-dr-emami","Ask Dr. Emami"],["/faq","FAQ"],["/blog","Blog"],["/contact","Contact"]],
    services: "Services", areas: "Areas served", practice: "Practice",
    tagline: <>{DOCTOR.name} — implant-focused, minimally invasive dentistry serving Sunland-Tujunga and the Foothill communities since {DOCTOR.established}.</>,
    hours: "Mon–Fri 9:00 AM – 5:00 PM · Sat–Sun Closed",
    practiceLinks: [["/dr-emami","Meet Dr. Emami"],["/ask-dr-emami","Ask Dr. Emami"],["/about","About the Practice"],["/new-patients","New Patients"],["/faq","Patient FAQ"],["/blog","Dental Health Blog"],["/contact","Contact & Location"]],
    legal: [["/privacy-policy","Privacy Policy"],["/terms-of-use","Terms of Use"],["/hipaa-notice","Notice of Privacy Practices"],["/accessibility","Accessibility"]],
    disclaimer: "The content on this website is for general educational purposes only and is not dental advice. Viewing this site or contacting us does not create a dentist-patient relationship. Individual results vary. In an emergency, call 911.",
    call: "Call", text: "Text", book: "Book", menu: "Menu", close: "Close menu", open: "Open menu",
  },
  es: {
    langBar: <>Atendemos a pacientes en <strong>Español</strong> · <strong>English</strong> · <strong lang="fa">فارسی</strong></>,
    switch: "English", switchHref: "/", switchLabel: "View site in English",
    nav: [["/es/servicios","Servicios"],["/es/implantes-dentales","Implantes"],["/es/precios","Precios"],["/es/dra-emami","Dra. Emami"],["/es/preguntas-frecuentes","Preguntas"],["/es/contacto","Contacto"]],
    services: "Servicios", areas: "Zonas que atendemos", practice: "La consulta",
    tagline: <>{DOCTOR.name} — odontología mínimamente invasiva enfocada en implantes, al servicio de Sunland-Tujunga y las comunidades de Foothill desde {DOCTOR.established}.</>,
    hours: "Lun–Vie 9:00 AM – 5:00 PM · Sáb–Dom Cerrado",
    practiceLinks: [["/es/dra-emami","Conozca a la Dra. Emami"],["/es/nuevos-pacientes","Pacientes nuevos"],["/es/preguntas-frecuentes","Preguntas frecuentes"],["/es/contacto","Contacto y ubicación"]],
    legal: [["/privacy-policy","Política de Privacidad"],["/terms-of-use","Términos de Uso"],["/hipaa-notice","Aviso de Privacidad (HIPAA)"],["/accessibility","Accesibilidad"]],
    disclaimer: "El contenido de este sitio tiene fines educativos generales y no constituye asesoramiento dental. Visitar este sitio o contactarnos no crea una relación dentista-paciente. Los resultados varían. En una emergencia, llame al 911.",
    call: "Llamar", text: "Texto", book: "Cita", menu: "Menú", close: "Cerrar menú", open: "Abrir menú",
  },
};

const ES_SERVICES = [["/es/implantes-dentales","Implantes dentales"],["/es/servicios","Todos los servicios"],["/es/precios","Precios"]];

export function Header() {
  const pathname = usePathname();
  const es = pathname?.startsWith("/es");
  const t = T[es ? "es" : "en"];
  const [open, setOpen] = useState(false);

  // close the menu whenever the route changes
  useEffect(() => { setOpen(false); }, [pathname]);
  // lock background scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-ink px-3 py-1.5 text-center text-[11px] font-semibold text-cream md:text-xs">
        <span><span className="text-brand-bright">●</span> {t.langBar}</span>
        <Link href={t.switchHref} aria-label={t.switchLabel} className="rounded-full border border-cream/30 px-2.5 py-0.5 hover:border-brand-bright hover:text-brand-bright">
          🌐 {t.switch}
        </Link>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <Link href={es ? "/es" : "/"} className="flex shrink-0 items-center">
            <img src="/images/logo.png" alt="Sunland Dental Care" className="h-10 w-auto md:h-14" />
          </Link>

          <nav className="hidden items-center gap-5 text-sm lg:flex">
            {t.nav.map(([h, l]) => <Link key={h} href={h} className="hover:text-brand">{l}</Link>)}
          </nav>

          <div className="flex items-center gap-2">
            <a href={`tel:${NAP.phoneIntl}`} className="hidden rounded-full bg-brand px-4 py-2.5 text-sm font-bold text-white shadow-md hover:bg-brand-dark sm:inline-block">
              {NAP.phone}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.close : t.open}
              className="flex items-center gap-2 rounded-xl border-2 border-ink px-3 py-2 text-sm font-bold lg:hidden"
            >
              <span aria-hidden="true" className="relative block h-4 w-5">
                <span className={`absolute left-0 block h-0.5 w-5 bg-ink transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-ink transition-all ${open ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute left-0 block h-0.5 w-5 bg-ink transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
              {t.menu}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu panel */}
      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-ink/40 lg:hidden" onClick={() => setOpen(false)} aria-hidden="true" />
          <div id="mobile-menu" className="fixed inset-x-0 top-0 z-50 max-h-[92vh] overflow-y-auto border-b-4 border-brand bg-cream shadow-2xl lg:hidden">
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <img src="/images/logo.png" alt="" aria-hidden="true" className="h-10 w-auto" />
              <button type="button" onClick={() => setOpen(false)} aria-label={t.close}
                className="rounded-xl border-2 border-ink px-3 py-2 text-sm font-bold">✕</button>
            </div>
            <nav aria-label={t.menu} className="px-4 py-2">
              <ul className="divide-y divide-line">
                {t.nav.map(([h, l]) => (
                  <li key={h}>
                    <Link href={h} className="flex items-center justify-between py-3.5 text-lg font-semibold hover:text-brand">
                      {l} <span aria-hidden="true" className="text-brand">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="grid grid-cols-2 gap-3 border-t border-line px-4 py-4">
              <a href={`tel:${NAP.phoneIntl}`} className="rounded-full bg-brand px-4 py-3 text-center text-sm font-bold text-white">📞 {NAP.phone}</a>
              <a href={`sms:${NAP.phoneIntl}`} className="rounded-full border-2 border-brand px-4 py-3 text-center text-sm font-bold text-brand">💬 {t.text}</a>
            </div>
            <div className="px-4 pb-5">
              <Link href={t.switchHref} className="block rounded-full border border-line bg-white px-4 py-2.5 text-center text-sm font-semibold">
                🌐 {t.switch}
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export function Footer() {
  const es = usePathname()?.startsWith("/es");
  const t = T[es ? "es" : "en"];
  const svc = es ? ES_SERVICES : [...SERVICES.map((s) => [`/${s.slug}`, s.name]), ["/pricing","Pricing"], ...MORE_SERVICES.map((s) => [`/${s.slug}`, s.name])];
  return (
    <footer className="mt-20 bg-ink pb-14 text-cream md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div>
          <img src="/images/logo.png" alt="Sunland Dental Care" className="h-14 w-auto" />
          <p className="mt-3 text-sm text-cream/70">{t.tagline}</p>
          <p className="mt-4 text-sm">
            <a className="underline hover:text-brand-bright" href={NAP.mapsUrl}>{NAP.street}, {NAP.city}, {NAP.state} {NAP.zip}</a><br />
            <a className="font-bold text-brand-bright hover:underline" href={`tel:${NAP.phoneIntl}`}>{NAP.phone}</a><br />
            {t.hours}
          </p>
        </div>
        <div>
          <p className="eyebrow text-brand-bright">{t.services}</p>
          <ul className="mt-3 space-y-2 text-sm">
            {svc.map(([h, n]) => <li key={h}><Link className="text-cream/85 hover:text-brand-bright" href={h}>{n}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-brand-bright">{t.areas}</p>
          <ul className="mt-3 space-y-2 text-sm">
            {CITIES.map((c) => <li key={c.slug}><Link className="text-cream/85 hover:text-brand-bright" href={`/${c.slug}`}>{es ? `Dentista para ${c.short}` : `Dentist for ${c.short}`}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-brand-bright">{t.practice}</p>
          <ul className="mt-3 space-y-2 text-sm">
            {t.practiceLinks.map(([h, n]) => <li key={h}><Link className="text-cream/85 hover:text-brand-bright" href={h}>{n}</Link></li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/15 px-4 py-5 text-center text-xs text-cream/60">
        <nav aria-label="Legal" className="mb-3 flex flex-wrap justify-center gap-x-4 gap-y-2">
          {t.legal.map(([h, n]) => <Link key={h} className="hover:text-brand-bright" href={h}>{n}</Link>)}
        </nav>
        <p>© {new Date().getFullYear()} {SITE.name}. {DOCTOR.name}. All rights reserved.</p>
        <p className="mx-auto mt-3 max-w-3xl text-cream/45">{t.disclaimer}</p>
      </div>
    </footer>
  );
}

export function MobileBar() {
  const es = usePathname()?.startsWith("/es");
  const t = T[es ? "es" : "en"];
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-line bg-cream/95 backdrop-blur md:hidden">
      <a href={`tel:${NAP.phoneIntl}`} className="flex items-center justify-center gap-1 bg-brand py-3.5 text-sm font-bold text-white">📞 {t.call}</a>
      <a href={`sms:${NAP.phoneIntl}`} className="flex items-center justify-center gap-1 border-x border-line py-3.5 text-sm font-bold">💬 {t.text}</a>
      <Link href={es ? "/es/contacto" : "/contact"} className="flex items-center justify-center gap-1 py-3.5 text-sm font-bold">🗓️ {t.book}</Link>
    </nav>
  );
}
