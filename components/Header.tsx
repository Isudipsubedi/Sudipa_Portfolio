"use client";
import { useEffect, useState } from "react";
import Monogram from "./Monogram";
import { person } from "@/data/profile";

const tools = { href: "/tools/", label: "Tools" };
const nav = [
  { id: "thesis", label: "Thesis" },
  { id: "experience", label: "Experience" },
  { id: "expertise", label: "Expertise" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

export default function Header({ alwaysSolid = false }: { alwaysSolid?: boolean }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const on = () => {
      setSolid(window.scrollY > 40);
      const probe = window.innerHeight * 0.35;
      let cur = "";
      for (const n of nav) { const el = document.getElementById(n.id); if (el && el.getBoundingClientRect().top <= probe) cur = n.id; }
      setActive(cur);
    };
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ease-institutional ${solid || open || alwaysSolid ? "border-b border-ink-line bg-ink/95 backdrop-blur" : "border-b border-transparent bg-transparent"}`}>
      <div className="frame flex h-16 items-center justify-between text-paper sm:h-20">
        <a href="/" className="flex items-center gap-3" aria-label={`${person.name} — home`} onClick={() => setOpen(false)}>
          <Monogram className="h-9 w-9" />
          <span className="font-serif text-[15px] uppercase tracking-[0.3em]">{person.name}</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a key={n.id} href={`/#${n.id}`} aria-current={active === n.id ? "true" : undefined}
              className={`caps transition-colors duration-500 hover:text-paper ${active === n.id ? "text-paper" : "text-slate"}`}>{n.label}</a>
          ))}
          <a href={tools.href} className="caps text-gold/90 transition-colors duration-500 hover:text-gold">{tools.label}</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href={person.resume} download className="caps hidden border border-gold/60 px-4 py-2 text-gold transition-colors duration-500 hover:bg-gold hover:text-ink sm:inline-block">Résumé</a>
          <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-nav" className="caps py-2 text-paper lg:hidden">
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      <nav id="mobile-nav" aria-label="Mobile" className={`frame overflow-hidden transition-[max-height] duration-700 ease-institutional lg:hidden ${open ? "max-h-[420px]" : "max-h-0"}`}>
        <ul className="border-t border-ink-line py-4">
          {nav.map((n) => (
            <li key={n.id}><a href={`/#${n.id}`} onClick={() => setOpen(false)} className="block py-3 font-serif text-2xl text-paper">{n.label}</a></li>
          ))}
          <li><a href={tools.href} className="block py-3 font-serif text-2xl text-gold">{tools.label}</a></li>
          <li><a href={person.resume} download className="caps mt-3 inline-block border border-gold/60 px-4 py-2 text-gold">Download résumé</a></li>
        </ul>
      </nav>
    </header>
  );
}
