"use client";

import { useEffect, useRef, useState } from "react";
import { IMPLANT_VIDEO as V } from "../lib/video";
import OfferNote from "./OfferNote";

function stamp(s) {
  const m = Math.floor(s / 60), r = Math.floor(s % 60);
  return `${m}:${String(r).padStart(2, "0")}`;
}

export default function VideoFeature() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);

  // Honour the ?t= deep link that the SeekToAction in our VideoObject
  // advertises. If we publish seek targets in schema, they have to work.
  useEffect(() => {
    const t = Number(new URLSearchParams(window.location.search).get("t"));
    if (ref.current && Number.isFinite(t) && t > 0 && t < V.durationSeconds) {
      ref.current.currentTime = t;
    }
  }, []);

  const seek = (s) => {
    const el = ref.current;
    if (!el) return;
    el.currentTime = s;
    el.play?.().catch(() => {});
  };

  const onPlay = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      // Page path only — no patient or visitor detail.
      window.gtag("event", "video_play", { page_path: window.location.pathname });
    }
  };

  return (
    // scroll-mt clears the sticky header when arriving via #video or ?t=
    <section id="video" className="scroll-mt-24 border-y border-line bg-parchment/70">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-[auto_1fr] md:py-16">
        {/* Vertical 9:16. Height is capped against the viewport so the player
            never grows taller than the screen on a phone, and the width is
            derived from that height so it stays centred on desktop. */}
        <div className="mx-auto w-full max-w-[min(100%,20rem)] md:max-w-[17.5rem]">
          <video
            ref={ref}
            className="aspect-[9/16] max-h-[78svh] w-full rounded-3xl border border-line bg-ink object-cover shadow-lg"
            controls
            playsInline
            preload="metadata"
            poster={`/media/${V.slug}-poster.jpg`}
            onPlay={onPlay}
            title={V.name}
          >
            <source src={`/media/${V.slug}.mp4`} type="video/mp4" />
            <track kind="captions" srcLang="en" label="English" default src={`/media/${V.slug}.vtt`} />
            Your browser does not support embedded video. The transcript below covers everything the video says.
          </video>
        </div>

        <div>
          <span className="accent-bar" aria-hidden="true"></span>
          <h2 className="t-section font-bold">Watch: what the $2,000 implant actually covers</h2>
          <p className="t-lead mt-4 text-ink-soft">
            Thirty-seven seconds with Dr. Emami on what is included in a complete single
            implant — the consultation, the 3D imaging and planning, the guided placement,
            and the final crown — and why all of it happens in one office on Foothill Boulevard.
          </p>

          {/* The video says "all included" of the four standard stages. This
              states, right beside it, what sits outside that price. */}
          <OfferNote />

          <h3 className="mt-7 text-sm font-bold uppercase tracking-[.12em] text-ink-soft">In this video</h3>
          <ul className="mt-3 space-y-1.5">
            {V.chapters.map((c, i) => (
              <li key={c.start}>
                <button
                  type="button"
                  onClick={() => { seek(c.start); setActive(i); }}
                  className={`group flex w-full gap-3 rounded-lg px-2 py-1.5 text-left transition hover:bg-white ${active === i ? "bg-white" : ""}`}
                >
                  <span className="shrink-0 font-mono text-sm font-semibold text-brand">{stamp(c.start)}</span>
                  <span className="text-sm text-ink-soft group-hover:text-ink">{c.name}</span>
                </button>
              </li>
            ))}
          </ul>

          <details className="mt-7 rounded-2xl border border-line bg-white/70 p-5">
            <summary className="cursor-pointer font-semibold">Full transcript</summary>
            <div className="mt-4 space-y-3 text-sm text-ink-soft">
              {V.transcript.map((s) => (
                <p key={s.t}>
                  <span className="mr-2 font-mono font-semibold text-brand">{stamp(s.t)}</span>
                  {s.text}
                </p>
              ))}
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
