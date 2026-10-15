import type { Metadata, Viewport } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource-variable/inter";
import "./globals.css";
import { person } from "@/data/profile";

export const metadata: Metadata = {
  metadataBase: new URL(person.url),
  title: `${person.name}`,
  description: person.intro,
  openGraph: { title: `${person.name}`, description: person.intro, url: person.url, type: "profile", images: [{ url: "/og.jpg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: person.name, images: ["/og.jpg"] },
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }, { url: "/favicon.ico", sizes: "any" }], apple: "/apple-touch-icon.png" },
  manifest: "/site.webmanifest",
};
export const viewport: Viewport = { themeColor: "#0B0F19" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-paper focus:px-4 focus:py-2">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
