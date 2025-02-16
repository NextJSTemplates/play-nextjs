import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Link from "next/link";

const Features = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        {/* <SectionTitle
          subtitle="Aim"
          title="Main Aim"
          paragraph="To design and develop an app that supports individuals with speech impairments to communicate effectively and inclusively in Ghanaian languages."
        />
        <br /><br /> */}
        <SectionTitle
        subtitle="About the Hackathon"
        title=""
        paragraph="The Centre for Digital Language Inclusion is delighted to introduce its first hackathon to bridge the communication gap for individuals with speech disabilities through the development of technological solution that leverages automatic speech recognition or Text-to-Speech (TTS)"
        />
        <br />
        <SectionTitle
        subtitle=""
        title=""
        paragraph="The Tɛkyerɛma Pa (good tongue) Hackathon 2025 invites all university students and technology advocates to participate in creating innovative solutions that will make a significant impact on individuals with speech impairments in Ghana and beyond."
        />
        <br />
        <SectionTitle
        subtitle=""
        title=""
        paragraph="At this hackathon, participants will be given the unique opportunity to help bridge the communication gap for individuals with speech disabilities through the development of technological solution that leverage automatic speech recognition or Text-to-Speech (TTS) tailored for Ghanaian languages. By focusing on these areas, the hackathon aims to create accessible tools that empower individuals to communicate more effectively in their native language, breaking down barriers to inclusion."
        />
        <br />
        <Link
                  href="/about"
                  className="inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]"
                >
                  Read More
          </Link>

        {/* <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div> */}

        
      </div>
    </section>
  );
};

export default Features;
