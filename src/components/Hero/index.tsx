import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaDollarSign, FaUserFriends, FaLaptopCode, FaLightbulb, FaTrophy } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section id="home" className="relative overflow-hidden pt-[120px] md:pt-[130px] lg:pt-[160px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <FaUsers className="absolute text-white opacity-20 animate-bounce w-16 h-16" style={{ top: '10%', left: '10%' }} />
          <FaDollarSign className="absolute text-white opacity-20 animate-bounce w-12 h-12" style={{ top: '20%', left: '30%', animationDelay: '0.2s' }} />
          <FaUserFriends className="absolute text-white opacity-20 animate-bounce w-20 h-20" style={{ top: '30%', left: '50%', animationDelay: '0.4s' }} />
          <FaLaptopCode className="absolute text-white opacity-20 animate-bounce w-14 h-14" style={{ top: '40%', left: '70%', animationDelay: '0.6s' }} />
          <FaLightbulb className="absolute text-white opacity-20 animate-bounce w-18 h-18" style={{ top: '50%', left: '90%', animationDelay: '0.8s' }} />
          <FaTrophy className="absolute text-white opacity-20 animate-bounce w-16 h-16" style={{ top: '60%', left: '20%', animationDelay: '1s' }} />
        </div>
        <div className="container relative z-10">
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