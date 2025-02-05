import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact | Tɛkyerɛma Pa Hackathon 2025",
  description: "",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact" />

      <Contact />
      <Faq />
    </>
  );
};

export default ContactPage;
