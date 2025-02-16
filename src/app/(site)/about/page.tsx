import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About | Tɛkyerɛma Pa Hackathon 2025",
  description: "",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="About" />
      <About />
      {/* <Team /> */}
      <Faq />
    </main>
  );
};

export default AboutPage;
