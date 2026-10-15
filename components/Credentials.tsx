import { competencies, coursework, education, honours, training } from "@/data/profile";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

/** A balance sheet, literally: education & recognition on one side, competencies & training on the other. */
export default function Credentials() {
  return (
    <section id="credentials" aria-labelledby="cred-title" className="bg-paper py-24 sm:py-32">
      <div className="frame">
        <SectionTitle index="04" label="Credentials" title={<span id="cred-title">The working balance sheet.</span>} />

        <div className="mt-14 grid border-t border-ink sm:mt-16 lg:grid-cols-2">
          {/* left column */}
          <Reveal className="lg:border-r lg:border-paper-line lg:pr-12">
            <Block title="Education">
              <ul className="divide-y divide-paper-line">
                {education.map((e) => (
                  <li key={e.title} className="grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6">
                    <div>
                      <p className="font-serif text-[22px] font-medium leading-snug text-ink">{e.title}</p>
                      <p className="mt-0.5 text-sm text-stone">{e.where}</p>
                    </div>
                    <p className="num text-sm text-stone sm:text-right">{e.note}</p>
                  </li>
                ))}
              </ul>
            </Block>
            <Block title="Recognition & leadership">
              <ul className="divide-y divide-paper-line">
                {honours.map((h) => <li key={h} className="py-3.5 text-[15px] leading-relaxed text-ink/85">{h}</li>)}
              </ul>
            </Block>
          </Reveal>

          {/* right column */}
          <Reveal delay={120} className="lg:pl-12">
            <Block title="Competencies">
              <dl className="divide-y divide-paper-line">
                {competencies.map((c) => (
                  <div key={c.area} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
                    <dt className="text-[15px] font-medium text-ink">{c.area}</dt>
                    <dd className="text-[15px] leading-relaxed text-stone">{c.items.join(", ")}</dd>
                  </div>
                ))}
              </dl>
            </Block>
            <Block title="Training" className="max-sm:hidden">
              <ul className="divide-y divide-paper-line">
                {training.map((t) => <li key={t} className="py-3.5 text-[15px] leading-relaxed text-stone">{t}</li>)}
              </ul>
            </Block>
          </Reveal>
        </div>

        <Reveal className="mt-10 border-t border-paper-line pt-6">
          <p className="text-sm leading-[1.9] text-stone"><span className="caps mr-3 text-gold-deep">BBA coursework</span>{coursework.join("  ·  ")}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Block({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`pt-8 ${className}`}>
      <h3 className="caps text-gold-deep">{title}</h3>
      <div className="mt-2">{children}</div>
    </div>
  );
}
