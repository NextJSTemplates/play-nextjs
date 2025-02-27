"use client";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 md:py-[120px]">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title mb-12 lg:mb-[150px]">
                <span className="mb-6 block text-base font-medium text-dark dark:text-white">
                  CONTACT US
                </span>
                <h2 className="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
                  For more information
                </h2>
              </div>
              <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                <div className="mb-8 flex w-[330px] max-w-full">
                  <div className="mr-6 text-[32px] text-primary">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                      Our Location
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      HCI Lab, Department of Computer Science, University of Ghana, Legon
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-[330px] max-w-full">
                  <div className="mr-6 text-[32px] text-primary">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                      How Can We Help?
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      <a href="mailto:speechdata@ug.edu.gh" className="text-primary hover:underline">
                        speechdata@ug.edu.gh
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div
              className="wow fadeInUp rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
              data-wow-delay=".2s"
            >
              <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
                Send us a Message
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                For any inquiries or further information, please click the email address below to send us an email.
              </p>
              <p className="mt-4 text-lg font-medium text-primary">
                <a href="mailto:speechdata@ug.edu.gh" className="hover:underline">
                  speechdata@ug.edu.gh
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;