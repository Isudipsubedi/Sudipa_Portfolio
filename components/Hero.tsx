import Photo from "./Photo";
import { figures, mailto, person } from "@/data/profile";
import PracticeClock from "./PracticeClock";
import Reveal from "./Reveal";

export default function Hero() {
  const status = [person.role, person.school ? `${person.pursuit}, ${person.school}` : person.pursuit];
  return (
    <section id="top" aria-labelledby="hero-title" className="relative bg-ink text-paper">
      <div className="frame grid gap-10 pb-14 pt-24 sm:pt-32 lg:grid-cols-12 lg:gap-14 lg:pb-28">
        {/* copy: 7 columns */}
        <div className="flex flex-col lg:col-span-7">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="shrink-0 lg:hidden"><Photo name="portrait-avatar" alt="" width={480} height={480} priority className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/40" /></span>
              <p className="caps flex flex-wrap items-center gap-x-3 gap-y-1 text-gold">
                <span>{status[0]}</span><span aria-hidden className="text-slate">×</span><span>{status[1]}</span>
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 id="hero-title" className="mt-7 lg:mt-6 font-serif text-[clamp(1.6rem,8.4vw,3.6rem)] font-medium leading-[1.04] tracking-[-0.015em] lg:text-[clamp(2.6rem,3.7vw,3.5rem)]">
              <span className="block whitespace-nowrap">{person.headline[0]}</span>
              <em className="block font-normal italic text-paper/80 whitespace-nowrap">{person.headline[1]}</em>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 lg:mt-6 max-w-[34rem] text-base leading-[1.75] text-paper/70 sm:text-[17px]">{person.intro}</p>
          </Reveal>
          <Reveal delay={360} className="mt-9 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap [&>a]:justify-center">
            <a href="#experience" className="btn-gold">Experience <span aria-hidden>→</span></a>
            <a href={mailto} className="btn-line text-paper/80 hover:border-paper hover:text-paper">Write to me</a>
          </Reveal>
          <Reveal delay={480} className="mt-auto pt-12">
            <PracticeClock since={person.practiceSince} />
          </Reveal>
        </div>

        {/* portrait: ivory editorial print, top-aligned with the headline; desktop/tablet only */}
        <Reveal delay={200} className="hidden lg:col-span-5 lg:block">
          <figure className="relative ml-auto max-w-[420px]">
            <div className="relative">
              <div aria-hidden className="absolute -bottom-3 -right-3 h-full w-full border border-gold/45" />
              <Photo name="portrait-primary" smName="portrait-primary-sm" smWidth={480} alt="Portrait of Sudipa Subedi wearing a green embroidered saree" width={680} height={850} priority className="relative block aspect-[4/5] h-auto w-full object-cover object-top" />
            </div>
            <figcaption className="mt-6 flex items-baseline justify-between text-xs text-slate">
              <span className="caps">{person.name}</span>
              <span>{person.location}</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      {/* figures as hero graphics */}
      <div className="border-t border-ink-line">
        <dl className="frame grid grid-cols-3 divide-x divide-ink-line">
          {figures.map((f, i) => (
            <Reveal key={f.unit} delay={i * 120} className={`py-7 sm:py-10 ${i === 0 ? "pr-3 sm:pr-8" : "px-3 sm:px-8"}`}>
              <dt className="sr-only">{f.unit}</dt>
              <dd className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                <span className="num font-serif text-5xl font-medium leading-none text-gold sm:text-7xl">{f.value}</span>
                <span className="caps text-paper/80">{f.unit}</span>
              </dd>
              <dd className="mt-3 hidden text-sm text-slate sm:block">{f.label}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
