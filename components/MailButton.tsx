import { mailto } from "@/data/profile";

/** Discreet floating mail link: ink with a champagne hairline. Opens a prefilled email. */
export default function MailButton() {
  return (
    <a href={mailto} aria-label="Write an email to Sudipa"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full border border-gold/50 bg-ink/95 p-1.5 text-paper shadow-[0_10px_40px_-10px_rgba(0,0,0,.5)] backdrop-blur transition-colors duration-500 hover:border-gold sm:bottom-8 sm:right-8 sm:py-2.5 sm:pl-2.5 sm:pr-5">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-gold text-ink sm:h-9 sm:w-9">
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="m3.5 6 8.5 7 8.5-7" />
        </svg>
      </span>
      <span className="text-[13px] font-medium uppercase tracking-[0.14em] max-sm:hidden">Mail</span>
    </a>
  );
}
