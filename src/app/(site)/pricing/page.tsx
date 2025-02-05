import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Awards | Tɛkyerɛma Pa Hackathon 2025",
  description: "",
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageName="Awards" />
      <Pricing />
      <Faq />
    </>
  );
};

export default PricingPage;
