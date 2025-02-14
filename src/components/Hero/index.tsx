import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div
                className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                data-wow-delay=".2s"
              >
                <div className="mt-16">
                  <Image
                    src="/images/logo.png"
                    alt="hero"
                    className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                    width={100}
                    height={100}
                  />
                </div>
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  Tɛkyerɛma Pa Hackathon 2025
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  The Tɛkyerɛma Pa Hackathon 2025 invites all university students and technology advocates to participate in creating innovative solutions that will make a significant impact on individuals with speech impairments in Ghana and beyond.
                </p>

                <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                  <li>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-green-200"
                    >
                      In Person
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-green-200"
                    >
                      Free
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-green-200"
                    >
                      Team Sizes: 1-5 Members
                    </Link>
                  </li>
                </ul>

                <div className="flex justify-center space-x-8">
                  <p className="mb-4 text-center text-base font-medium text-white/60 flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    Venue: University of Ghana, Legon
                  </p>
                  <p className="mb-4 text-center text-base font-medium text-white/60 flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    Date: May 26th - 30th, 2025
                  </p>
                </div>
                <div
                  className="wow fadeInUp flex items-center justify-center gap-4 text-center"
                  data-wow-delay=".3s"
                >
                  <Link
                    href="#"
                    className="text-white/60 duration-300 ease-in-out hover:text-white"
                  >
                    {/* Add any additional links or icons here */}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;