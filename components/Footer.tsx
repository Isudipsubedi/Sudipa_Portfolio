import Monogram from "./Monogram";
import { person } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink text-slate">
      <div className="frame flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <Monogram className="h-10 w-10" />
          <div>
            <p className="font-serif text-lg uppercase tracking-[0.3em] text-paper">{person.name}</p>
            <p className="text-xs">Accounting · Finance · Banking · Management</p>
          </div>
        </div>
        <div className="text-xs sm:text-right">
          <p className="italic">Su·dīpa — “a good lamp.” The mark: a flame over a balanced double rule.</p>
          <p className="num mt-1">© {new Date().getFullYear()} {person.name} · {person.domain}</p>
        </div>
      </div>
    </footer>
  );
}
