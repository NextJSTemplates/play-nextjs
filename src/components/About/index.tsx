import Image from "next/image";
import Link from "next/link";
import { FaUniversity, FaGoogle, FaHandsHelping, FaLanguage, FaMicrophone, FaUsers, FaLightbulb, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  The Centre for Digital Language Inclusion (CDLI) is led by the Global Disability Innovation Hub in partnership with University College London and University of Ghana, funded by UK aid’s AT2030 programme, alongside support from Google.org
                </h2>
                {/* <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  The Centre for Digital Language Inclusion (CDLI) is led by the Global Disability Innovation Hub in partnership with University College London (UCL) and the University of Ghana (UG), funded by UK aid AT2030 programme, alongside support from google.org.
                </p>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  The Tɛkyerɛma Pa Hackathon 2025 invites all university students and technology advocates to participate in creating innovative solutions that will make a significant impact on individuals with speech impairments in Ghana and beyond.
                  <br /> <br />
                  At this hackathon, participants will be given the unique opportunity to help bridge the communication gap for individuals with speech disabilities through the development of cutting-edge technologies such as Text-to-Speech (TTS) and automatic speech recognition (ASR) tailored for Ghanaian languages. By focusing on these areas, the hackathon aims to create accessible tools that empower individuals to communicate more effectively in their native language, breaking down barriers to inclusion.
                </p> */}
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  A curated dataset of selected Ghanaian languages namely Akan, Ewe, Ga, Dagbani, and Dagaare is available to participants to support their project.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white duration-300 hover:bg-primary/90"
                >
                  Dataset
                </Link>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div
                    className={`relative mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px] `}
                  >
                    <Image
                      src="/images/about/about-image-01.jpg"
                      alt="about image"
                      fill
                      className="h-full w-full object-cover object-center rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="relative mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                    <Image
                      src="/images/about/about-image-02.jpg"
                      alt="about image"
                      fill
                      className="h-full w-full object-cover object-center rounded-lg shadow-lg"
                    />
                  </div>

                  <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8 rounded-lg shadow-lg">
                    <div>
                      <span className="block text-5xl font-extrabold text-white">
                        Gallery
                      </span>
                      <span className="block text-base font-semibold text-white">
                        Coming Soon!
                      </span>
                      <span className="block text-base font-medium text-white text-opacity-70">
                        Tɛkyerɛma Pa
                      </span>
                    </div>
                    <div>
                      <span className="absolute left-0 top-0 -z-10">
                        <svg
                          width="106"
                          height="144"
                          viewBox="0 0 106 144"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.1"
                            x="-67"
                            y="47.127"
                            width="113.378"
                            height="131.304"
                            transform="rotate(-42.8643 -67 47.127)"
                            fill="url(#paint0_linear_1416_214)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_1416_214"
                              x1="-10.3111"
                              y1="47.127"
                              x2="-10.3111"
                              y2="178.431"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="white" />
                              <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="absolute right-0 top-0 -z-10">
                        <svg
                          width="130"
                          height="97"
                          viewBox="0 0 130 97"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.1"
                            x="0.86792"
                            y="-6.67725"
                            width="155.563"
                            height="140.614"
                            transform="rotate(-42.8643 0.86792 -6.67725)"
                            fill="url(#paint0_linear_1416_215)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_1416_215"
                              x1="78.6495"
                              y1="-6.67725"
                              x2="78.6495"
                              y2="133.937"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="white" />
                              <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="absolute bottom-0 right-0 -z-10">
                        <svg
                          width="175"
                          height="104"
                          viewBox="0 0 175 104"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.1"
                            x="175.011"
                            y="108.611"
                            width="101.246"
                            height="148.179"
                            transform="rotate(137.136 175.011 108.611)"
                            fill="url(#paint0_linear_1416_216)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_1416_216"
                              x1="225.634"
                              y1="108.611"
                              x2="225.634"
                              y2="256.79"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="white" />
                              <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <FaUniversity className="absolute text-white opacity-20 animate-bounce w-16 h-16" style={{ top: '10%', left: '10%' }} />
        <FaGoogle className="absolute text-white opacity-20 animate-bounce w-12 h-12" style={{ top: '20%', left: '30%', animationDelay: '0.2s' }} />
        <FaHandsHelping className="absolute text-white opacity-20 animate-bounce w-20 h-20" style={{ top: '30%', left: '50%', animationDelay: '0.4s' }} />
        <FaLanguage className="absolute text-white opacity-20 animate-bounce w-14 h-14" style={{ top: '40%', left: '70%', animationDelay: '0.6s' }} />
        <FaMicrophone className="absolute text-white opacity-20 animate-bounce w-18 h-18" style={{ top: '50%', left: '90%', animationDelay: '0.8s' }} />
        <FaUsers className="absolute text-white opacity-20 animate-bounce w-16 h-16" style={{ top: '60%', left: '20%', animationDelay: '1s' }} />
        <FaLightbulb className="absolute text-white opacity-20 animate-bounce w-16 h-16" style={{ top: '70%', left: '40%', animationDelay: '1.2s' }} />
        <FaLaptopCode className="absolute text-white opacity-20 animate-bounce w-16 h-16" style={{ top: '80%', left: '60%', animationDelay: '1.4s' }} />
      </div>
    </section>
  );
};

export default About;