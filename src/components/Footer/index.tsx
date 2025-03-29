import Link from "next/link";
import Image from "next/image";
import { clientsData } from "@/components/Clients/clientsData";

const Footer = () => {
  return (
    <footer className="wow fadeInUp relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]" data-wow-delay=".15s">
      <div className="container">
        <div className="flex flex-wrap justify-center mb-8">
          <div className="w-full px-4">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex flex-wrap justify-center">
                {clientsData.map((client) => (
                  <div key={client.id} className="mx-4 mb-4">
                    <Image
                      src={client.logoWhite}
                      alt={client.title}
                      width={150} // Increased width
                      height={75} // Increased height
                      className="block"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 items-center border-t border-[#8890A4] border-opacity-40 py-8 lg:mt-[60px]">
          <div className="container">
            <div className="flex justify-center">
              <div className="text-center">
                <p className="text-base text-gray-7">
                  © 2025 Human Computer Interactions & Persuasive Technologies Laboratory{" "}
                </p>
                <p className="text-base text-gray-7">
                Powered by Chamba Nanang (cyphahimself)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;