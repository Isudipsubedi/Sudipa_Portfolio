import Reveal from "./Reveal";

export default function SectionTitle({ index, label, title, dark = false }: { index: string; label: string; title: React.ReactNode; dark?: boolean }) {
  return (
    <Reveal className="grid gap-6 lg:grid-cols-12">
      <p className={`caps lg:col-span-3 ${dark ? "text-gold" : "text-gold-deep"}`}>
        <span className="num">{index}</span> <span className={dark ? "text-slate" : "text-stone"}>— {label}</span>
      </p>
      <h2 className={`font-serif text-4xl font-medium leading-[1.08] sm:text-5xl lg:col-span-9 ${dark ? "text-paper" : "text-ink"}`}>{title}</h2>
    </Reveal>
  );
}
