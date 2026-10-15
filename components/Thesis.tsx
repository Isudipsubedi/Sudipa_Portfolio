import { thesis } from "@/data/profile";
import Reveal from "./Reveal";

/** Warm ivory band — tonally distinct from the cool-white Experience ledger that follows. */
export default function Thesis() {
  return (
    <section id="thesis" aria-labelledby="thesis-title" className="bg-ivory py-24 sm:py-32">
      <div className="frame">
        <Reveal><p className="caps text-gold-deep"><span className="num">01</span> <span className="text-stone">— Thesis</span></p></Reveal>

        <Reveal delay={120}>
          <h2 id="thesis-title" className="mt-8 max-w-[15em] font-serif text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[1.08] tracking-[-0.01em] text-ink sm:mt-10">
            {thesis.statement[0]}{" "}
            <span className="italic text-stone">{thesis.statement[1]}</span>
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-10 border-t border-ivory-line pt-10 md:grid-cols-3 md:gap-12 sm:mt-16">
          {thesis.principles.map((p, i) => (
            <Reveal as="li" key={p.n} delay={i * 140}>
              <span className="font-serif text-2xl italic text-gold-deep">{p.n}.</span>
              <h3 className="mt-3 font-serif text-2xl font-medium leading-snug text-ink">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-stone">{p.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
