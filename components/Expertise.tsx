import { expertise, industries } from "@/data/profile";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

export default function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="bg-ink py-24 text-paper sm:py-32">
      <div className="frame">
        <SectionTitle dark index="03" label="Expertise" title={<span id="expertise-title">What I can take on, <span className="italic text-paper/70">from day one.</span></span>} />
        <ul className="mt-16 grid gap-px border border-ink-line bg-ink-line sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((e, i) => (
            <Reveal as="li" key={e.title} delay={(i % 3) * 100} className="group bg-ink p-8 transition-colors duration-700 ease-institutional hover:bg-ink-2 sm:p-10">
              <span className="num font-serif text-lg italic text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 font-serif text-[26px] font-medium leading-tight">{e.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate">{e.body}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-8">
          <span className="caps shrink-0 text-gold">Industries served</span>
          <p className="text-[15px] leading-relaxed text-paper/75">{industries.join("  ·  ")}</p>
        </Reveal>
      </div>
    </section>
  );
}
