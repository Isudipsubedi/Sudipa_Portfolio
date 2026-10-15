import type { Metadata } from "next";
import Header from "@/components/Header";
import FinanceDesk from "@/components/FinanceDesk";
import Footer from "@/components/Footer";
import MailButton from "@/components/MailButton";

export const metadata: Metadata = {
  title: "Finance desk — VAT, EMI & FD calculators · Sudipa Subedi",
  description: "Quick VAT (13%), loan EMI and fixed-deposit calculators, formatted in Nepali rupees.",
};

export default function ToolsPage() {
  return (
    <>
      <Header alwaysSolid />
      <main id="main" className="bg-ink">
        <FinanceDesk />
      </main>
      <Footer />
      <MailButton />
    </>
  );
}
