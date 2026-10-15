import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Thesis from "@/components/Thesis";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import Credentials from "@/components/Credentials";
import Letter from "@/components/Letter";
import Footer from "@/components/Footer";
import MailButton from "@/components/MailButton";

export default function Page() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Thesis />
        <Experience />
        <Expertise />
        <Credentials />
        <Letter />
      </main>
      <Footer />
      <MailButton />
    </>
  );
}
