import Link from "next/link";

const Footer = () => {
  return (
    <footer className="wow fadeInUp relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]" data-wow-delay=".15s">
      <div className="container">
        <div className="mt-12 items-center border-t border-[#8890A4] border-opacity-40 py-8 lg:mt-[60px]">
          <div className="container">
            <div className="flex justify-center">
              <div className="text-center">
                <p className="text-base text-gray-7">
                  © 2025 Human Computer Interactions & Persuasive Technologies Laboratory{" "}
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