"use client";
import { useEffect, useState } from "react";

/** Live, honest "data as art": days in practice since first finance role, plus Nepal FY progress. */
function nepalFY(now: Date) {
  // Nepal's fiscal year starts on Shrawan 1 (≈ 16–17 July). Approximated as 17 July.
  const y = now.getFullYear();
  const start = new Date(now >= new Date(y, 6, 17) ? y : y - 1, 6, 17);
  const end = new Date(start.getFullYear() + 1, 6, 17);
  const pct = (now.getTime() - start.getTime()) / (end.getTime() - start.getTime());
  const bs = start.getFullYear() + 57;
  return { label: `${bs}/${String((bs + 1) % 100).padStart(2, "0")}`, pct, q: Math.min(4, Math.floor(pct * 4) + 1) };
}

export default function PracticeClock({ since }: { since: string }) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => { setNow(new Date()); const t = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(t); }, []);
  const start = new Date(since + "T00:00:00");
  const ms = now ? now.getTime() - start.getTime() : 0;
  const days = Math.floor(ms / 86400000);
  const hh = now ? String(now.getHours()).padStart(2, "0") : "--";
  const mm = now ? String(now.getMinutes()).padStart(2, "0") : "--";
  const ss = now ? String(now.getSeconds()).padStart(2, "0") : "--";
  const fy = now ? nepalFY(now) : null;

  return (
    <dl className="grid grid-cols-2 border-t border-ink-line">
      <div className="border-r border-ink-line pr-5 pt-5 max-lg:pb-5">
        <dt className="caps text-slate">Days in practice</dt>
        <dd className="num mt-2 font-serif text-4xl text-paper sm:text-5xl" suppressHydrationWarning>{now ? days.toLocaleString("en-US") : "—"}</dd>
        <dd className="num mt-1 text-xs text-slate" suppressHydrationWarning>since Sep 2021 · {hh}:{mm}:{ss}</dd>
      </div>
      <div className="pl-5 pt-5 max-lg:pb-5">
        <dt className="caps text-slate">Nepal fiscal year</dt>
        <dd className="num mt-2 font-serif text-4xl text-paper sm:text-5xl" suppressHydrationWarning>{fy ? fy.label : "—"}</dd>
        <dd className="mt-3" aria-hidden>
          <div className="h-px w-full bg-ink-line"><div className="h-px bg-gold transition-[width] duration-1000" style={{ width: `${fy ? fy.pct * 100 : 0}%` }} /></div>
        </dd>
        <dd className="num mt-2 text-xs text-slate" suppressHydrationWarning>{fy ? `Q${fy.q} · ${Math.round(fy.pct * 100)}% elapsed` : ""}</dd>
      </div>
    </dl>
  );
}
