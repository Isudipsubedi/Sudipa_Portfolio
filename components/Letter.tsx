import Photo from "./Photo";
import { mailto, person } from "@/data/profile";
import Reveal from "./Reveal";

export default function Letter() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-ink py-24 text-paper sm:py-32">
      <div className="frame grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-3">
          <p className="caps text-gold"><span className="num">05</span> <span className="text-slate">— Correspondence</span></p>
          <Photo name="portrait-avatar" alt="" width={480} height={480} className="mt-10 hidden h-28 w-28 rounded-full object-cover ring-1 ring-gold/30 lg:block" />
        </Reveal>

        <Reveal delay={120} className="lg:col-span-6">
          <h2 id="contact-title" className="sr-only">Contact</h2>
          <div className="font-serif text-[22px] leading-[1.6] text-paper/90 sm:text-[26px]">
            <p className="italic text-paper/60">Dear reader,</p>
            <p className="mt-6">
              I&apos;m looking for roles in accounting, finance, banking, administration and management — teams where careful numbers and well-run operations shape real decisions.
            </p>
            <p className="mt-6">
              If you are building a finance function, advising a growing company, or simply wish to compare notes on corporate strategy, I would be glad to hear from you.
            </p>
            <p className="mt-10 italic text-paper/60">With regards,</p>
            <p className="mt-2 font-serif text-4xl italic text-gold">{person.name}</p>
          </div>
        </Reveal>

        <Reveal delay={240} className="lg:col-span-3 lg:pt-16">
          <ul className="divide-y divide-ink-line border-y border-ink-line">
            <li><a href={mailto} className="group flex items-center justify-between gap-4 py-5"><span className="min-w-0"><span className="caps block text-slate">Email</span><span className="mt-1 block break-all text-[15px] text-paper">{person.email}</span></span><span aria-hidden className="text-gold transition-transform duration-500 group-hover:translate-x-1">→</span></a></li>
            <li><a href={person.linkedin} target="_blank" rel="noreferrer noopener" className="group flex items-center justify-between py-5"><span><span className="caps block text-slate">LinkedIn</span><span className="mt-1 block text-[15px] text-paper">/in/sudipa-subedi</span></span><span aria-hidden className="text-gold transition-transform duration-500 group-hover:translate-x-1">↗</span></a></li>
            {person.whatsapp && <li><a href={`https://wa.me/${person.whatsapp}`} target="_blank" rel="noreferrer noopener" className="group flex items-center justify-between py-5"><span><span className="caps block text-slate">WhatsApp</span><span className="mt-1 block text-[15px] text-paper">Message directly</span></span><span aria-hidden className="text-gold transition-transform duration-500 group-hover:translate-x-1">↗</span></a></li>}
            <li><a href={person.resume} download className="group flex items-center justify-between py-5"><span><span className="caps block text-slate">Résumé</span><span className="mt-1 block text-[15px] text-paper">PDF · 2026</span></span><span aria-hidden className="text-gold transition-transform duration-500 group-hover:translate-y-0.5">↓</span></a></li>
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-slate">{person.availability}. References available upon request.</p>
        </Reveal>
      </div>
    </section>
  );
}
