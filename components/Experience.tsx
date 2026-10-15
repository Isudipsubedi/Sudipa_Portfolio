"use client";
import { useState } from "react";
import { ledger } from "@/data/profile";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

/** Experience as a ledger of engagements — details visible, not hidden behind toggles. */
export default function Experience() {
  const [all, setAll] = useState(false);
  return (
    <section id="experience" aria-labelledby="experience-title" className="bg-paper py-24 sm:py-32">
      <div className="frame">
        <SectionTitle index="02" label="Experience" title={<span id="experience-title">Five engagements, five sectors.<br className="hidden sm:block" /> <span className="italic text-stone">Every one of them balanced.</span></span>} />

        <ol className="mt-14 border-t border-ink sm:mt-16">
          {ledger.map((r, i) => (
            <Reveal as="li" key={r.ref} className={`border-b border-paper-line py-9 sm:py-11 ${!all && i > 1 ? "max-sm:hidden" : ""}`}>
              <article className="grid gap-x-10 gap-y-5 lg:grid-cols-12 lg:items-start">
                {/* left rail: reference, period, sector */}
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 lg:col-span-3 lg:flex-col lg:gap-2 lg:pt-2">
                  <span className="num text-xs text-stone">{r.ref}</span>
                  <span className="num text-sm text-ink">{r.period}</span>
                  <span className="caps text-gold-deep">{r.sector}</span>
                  {r.current && <span className="caps inline-flex items-center gap-2 text-ink"><span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />Current</span>}
                </div>

                {/* body */}
                <div className="lg:col-span-6">
                  <h3 className="font-serif text-[26px] font-medium leading-[1.15] text-ink sm:text-[30px]">{r.entity}</h3>
                  <p className="mt-1 text-[15px] text-stone">{r.role}</p>
                  <p className="mt-4 text-[17px] leading-relaxed text-ink/85">{r.mandate}</p>
                  <ul className="mt-4 space-y-2">
                    {r.detail.map((d) => (
                      <li key={d} className="flex gap-4 text-[15px] leading-relaxed text-stone">
                        <span aria-hidden className="mt-[0.7em] h-px w-4 shrink-0 bg-gold-deep" />{d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* scale figure */}
                <div className="flex items-baseline gap-4 lg:col-span-3 lg:block lg:pt-1 lg:text-right">
                  <p className="font-serif text-4xl font-medium leading-none text-ink sm:text-5xl">{r.scale}</p>
                  <p className="text-sm text-stone lg:mt-2">{r.scaleNote}</p>
                  <p className="caps hidden text-stone lg:mt-3 lg:block">{r.vector}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
        {!all && (
          <button type="button" onClick={() => setAll(true)} className="caps mt-8 w-full border border-ink py-4 text-ink sm:hidden">
            Show all {ledger.length} engagements
          </button>
        )}
      </div>
    </section>
  );
}
