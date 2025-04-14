import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import Mentors from "@/components/Mentors"; // Ensure the correct import path
import Faq from "@/components/Faq";
import Materials from "@/components/Materials";

export const metadata = {
  title: "Tɛkyerɛma Pa Hackathon 2025",
  description: "Join us for an exciting hackathon experience!",
};

export default function Home() {
  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <CallToAction />
      <Mentors />
      <Faq />
      <Materials />
    </main>
  );
}
