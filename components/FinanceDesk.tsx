"use client";
import { useMemo, useState } from "react";
import { emi, fd, npr, vat } from "@/lib/finance";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const toNum = (s: string) => Number(String(s).replace(/,/g, ""));

function Field({ label, value, onChange, suffix, step = "any" }: { label: string; value: string; onChange: (v: string) => void; suffix?: string; step?: string }) {
  return (
    <label className="block">
      <span className="caps text-stone">{label}</span>
      <span className="mt-2 flex items-baseline border-b border-ink/25 transition-colors duration-500 focus-within:border-ink">
        <input
          inputMode="decimal" type="number" min="0" step={step} value={value}
          onChange={(e) => onChange(e.target.value)}
          className="num w-full appearance-none bg-transparent py-2 font-serif text-2xl text-ink outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        {suffix && <span className="ml-2 shrink-0 text-sm text-stone">{suffix}</span>}
      </span>
    </label>
  );
}

function Result({ rows, hero }: { rows: [string, string][]; hero: [string, string] }) {
  return (
    <div className="mt-auto border-t border-ink pt-6" aria-live="polite">
      <p className="caps text-stone">{hero[0]}</p>
      <p className="num mt-2 break-words font-serif text-[34px] font-medium leading-none text-ink">{hero[1]}</p>
      <dl className="mt-5 space-y-2">
        {rows.map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between gap-4 text-sm">
            <dt className="text-stone">{k}</dt>
            <dd className="num text-ink">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Card({ n, title, note, children }: { n: string; title: string; note: string; children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col bg-paper p-8 sm:p-10">
      <p className="caps text-gold-deep">Schedule {n}</p>
      <h3 className="mt-3 font-serif text-[28px] font-medium leading-tight text-ink">{title}</h3>
      <p className="mt-2 text-sm text-stone">{note}</p>
      <div className="mt-8 flex flex-1 flex-col gap-6">{children}</div>
    </div>
  );
}

export default function FinanceDesk() {
  const [vAmt, setVAmt] = useState("100000");
  const [vRate, setVRate] = useState("13");
  const [vInc, setVInc] = useState(false);
  const v = useMemo(() => vat(toNum(vAmt) || 0, toNum(vRate) || 0, vInc), [vAmt, vRate, vInc]);

  const [lAmt, setLAmt] = useState("2500000");
  const [lRate, setLRate] = useState("11");
  const [lYrs, setLYrs] = useState("10");
  const l = useMemo(() => emi(toNum(lAmt) || 0, toNum(lRate) || 0, toNum(lYrs) || 0), [lAmt, lRate, lYrs]);

  const [fAmt, setFAmt] = useState("500000");
  const [fRate, setFRate] = useState("7");
  const [fYrs, setFYrs] = useState("3");
  const f = useMemo(() => fd(toNum(fAmt) || 0, toNum(fRate) || 0, toNum(fYrs) || 0, 4), [fAmt, fRate, fYrs]);

  return (
    <section id="desk" aria-labelledby="desk-title" className="bg-paper pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="frame">
        <SectionTitle index="Tools" label="Finance desk" title={<span id="desk-title">Three working schedules, <span className="italic text-stone">calculated live.</span></span>} />

        <div className="mt-16 grid gap-px border border-paper-line bg-paper-line sm:mt-20 lg:grid-cols-3">
          <Reveal className="h-full">
            <Card n="A" title="VAT" note="Nepal's standard rate is 13%.">
              <Field label="Amount" value={vAmt} onChange={setVAmt} suffix="NPR" />
              <div className="grid grid-cols-2 gap-6">
                <Field label="Rate" value={vRate} onChange={setVRate} suffix="%" />
                <fieldset>
                  <legend className="caps text-stone">Amount is</legend>
                  <div className="mt-3 flex border border-ink/25 text-xs" role="radiogroup">
                    {[["Excl.", false], ["Incl.", true]].map(([lab, val]) => (
                      <button key={String(lab)} type="button" role="radio" aria-checked={vInc === val} onClick={() => setVInc(val as boolean)}
                        className={`flex-1 py-2.5 font-medium uppercase tracking-[0.12em] transition-colors duration-500 ${vInc === val ? "bg-ink text-paper" : "text-stone hover:text-ink"}`}>
                        {lab as string}
                      </button>
                    ))}
                  </div>
                </fieldset>
              </div>
              <Result hero={["Total with VAT", npr(v.gross)]} rows={[["Amount before VAT", npr(v.net)], ["VAT", npr(v.tax)]]} />
            </Card>
          </Reveal>

          <Reveal delay={120} className="h-full">
            <Card n="B" title="Loan EMI" note="Equal monthly instalment, reducing balance.">
              <Field label="Loan amount" value={lAmt} onChange={setLAmt} suffix="NPR" />
              <div className="grid grid-cols-2 gap-6">
                <Field label="Interest" value={lRate} onChange={setLRate} suffix="% p.a." />
                <Field label="Tenure" value={lYrs} onChange={setLYrs} suffix="years" />
              </div>
              <Result hero={["Monthly EMI", npr(l.emi)]} rows={[["Total interest", npr(l.interest)], ["Total payment", npr(l.total)], ["Instalments", Number.isFinite(l.n) && l.n > 0 ? String(l.n) : "—"]]} />
            </Card>
          </Reveal>

          <Reveal delay={240} className="h-full">
            <Card n="C" title="Fixed deposit" note="Maturity value, compounded quarterly.">
              <Field label="Deposit" value={fAmt} onChange={setFAmt} suffix="NPR" />
              <div className="grid grid-cols-2 gap-6">
                <Field label="Interest" value={fRate} onChange={setFRate} suffix="% p.a." />
                <Field label="Term" value={fYrs} onChange={setFYrs} suffix="years" />
              </div>
              <Result hero={["Maturity value", npr(f.maturity)]} rows={[["Interest earned", npr(f.interest)], ["Effective annual yield", Number.isFinite(f.maturity) && toNum(fYrs) > 0 ? ((Math.pow(1 + (toNum(fRate) || 0) / 400, 4) - 1) * 100).toFixed(2) + "%" : "—"]]} />
            </Card>
          </Reveal>
        </div>
        <p className="mt-6 text-xs text-stone">For illustration only. Actual figures depend on your bank&apos;s terms and current tax rules; taxes on interest are not deducted.</p>
      </div>
    </section>
  );
}
