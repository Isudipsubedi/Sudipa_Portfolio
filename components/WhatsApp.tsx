import { person } from "@/data/profile";

/** Discreet floating WhatsApp link — ink with a champagne hairline, not a bright green blob. */
export default function WhatsApp() {
  if (!person.whatsapp) return null;
  const href = `https://wa.me/${person.whatsapp}?text=${encodeURIComponent("Hello Sudipa, I came across your portfolio and would like to connect.")}`;
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" aria-label="Message on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full border border-gold/50 bg-ink/95 p-1.5 sm:py-2.5 sm:pl-2.5 sm:pr-5 text-paper shadow-[0_10px_40px_-10px_rgba(0,0,0,.5)] backdrop-blur transition-colors duration-500 hover:border-gold sm:bottom-8 sm:right-8">
      <span className="grid h-10 w-10 sm:h-9 sm:w-9 place-items-center rounded-full bg-gold text-ink">
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden><path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5 5.1-1.3A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3 .8.8-2.95-.2-.3a8.2 8.2 0 1 1 6.9 3.78Zm4.5-6.15c-.25-.12-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12-.17.25-.65.8-.79.97-.15.16-.3.18-.54.06-.25-.13-1.05-.39-2-1.24a7.5 7.5 0 0 1-1.38-1.72c-.15-.25 0-.38.11-.5.11-.11.25-.3.37-.44.13-.15.17-.25.25-.42.09-.16.05-.3-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.48a.92.92 0 0 0-.66.31 2.8 2.8 0 0 0-.87 2.07c0 1.22.9 2.4 1.02 2.57.12.16 1.76 2.68 4.25 3.76.6.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.15-1.18-.07-.11-.23-.17-.48-.29Z"/></svg>
      </span>
      <span className="text-[13px] font-medium uppercase tracking-[0.14em] max-sm:hidden">WhatsApp</span>
    </a>
  );
}
