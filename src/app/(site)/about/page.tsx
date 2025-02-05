import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
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
      <Team />
    </main>
  );
};

export default AboutPage;
