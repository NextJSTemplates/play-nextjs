"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaRegCalendarAlt, FaArrowRight } from "react-icons/fa";

const Timeline = () => {
  const timelineData = [
    { date: "March 30, 2025", event: "Deadline for registration" },
    { date: "April 5, 2025", event: "Notify selected participants" },
    { date: "April 7–15, 2025", event: "Awareness campaign and team outreach" },
    { date: "April 21–30, 2025", event: "Online Bootcamp and dataset introduction" },
    { date: "May 1–19, 2025", event: "Ideation Sprint with mentor reviews" },
    { date: "May 19–23, 2025", event: "In-person mentoring sessions" },
    { date: "May 26–30, 2025", event: "Hackathon event" },
    { date: "June 1 onwards, 2025", event: "Post-event feedback and follow-up" },
  ];

  return (
    <div className="timeline-container mt-10">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Timelines</h2>
      <div className="timeline flex flex-wrap justify-center items-center space-x-8">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item flex flex-col items-center mb-8 relative">
            <div className="timeline-icon text-4xl text-secondary mb-2">
              <FaRegCalendarAlt />
            </div>
            <div className="timeline-date text-lg font-semibold text-white">{item.date}</div>
            <div className="timeline-event text-base text-white">{item.event}</div>
            {index < timelineData.length - 1 && (
              <div className="timeline-connector absolute top-1/2 transform -translate-y-1/2 left-full h-1 w-8 flex items-center justify-center">
                <FaArrowRight className="text-secondary" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const CallToAction = () => {
  const targetDate = new Date(2025, 2, 30, 0, 0, 0).getTime(); // March 30, 2025
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft(0);
      } else {
        setTimeLeft(difference);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Convert milliseconds into days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap items-stretch">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[570px] text-center">
                
                <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
                  <span>Register Now</span>
                </h2>
                <p className="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] text-white">
                  Dont miss out on this amazing opportunity to make a difference!
                </p>
                <div className="flex justify-center mt-1">
                  <Image
                    src="/images/qr-code.png"
                    alt="logo"
                    width={240}
                    height={130}
                    className="block dark:block mt-4"
                  />
                  
                </div>
                <div className="text-center mt-4 text-white text-lg font-bold">
                  {timeLeft > 0 ? (
                    <div className="flex justify-center space-x-4">
                      <div className="flex flex-col items-center">
                        <span className="text-4xl font-bold">{days}</span>
                        <span className="text-sm">Days</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-4xl font-bold">{hours}</span>
                        <span className="text-sm">Hours</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-4xl font-bold">{minutes}</span>
                        <span className="text-sm">Minutes</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-4xl font-bold">{seconds}</span>
                        <span className="text-sm">Seconds</span>
                      </div>
                    </div>
                  ) : (
                    "Time's up!"
                  )}
                </div>
                <h2 className="flex flex-col item-center mt-4 mb-2.5 text-3xl font-bold text-white md:text-[20px] md:leading-[1.44] hover-text-blue-500">
                  <span>Deadline for Registration is March 30, 2025</span>
                </h2>
                <h2 className="flex flex-col item-center mt-4 mb-2.5 text-3xl font-medium text-white md:text-[20px] md:leading-[1.44] hover-text-blue-500">
                  <span>Scan the QR Code to Register</span>
                </h2>
                <Link
                  href="https://link.webropolsurveys.com/Participation/Public/957e29ad-d7c9-454e-8d72-4daf1b79c82f?displayId=Fin3306847"
                  target="_blank"
                  className="inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Timeline />
      </div>
      <div>
        <span className="absolute left-0 top-0">
          <svg
            width="495"
            height="470"
            viewBox="0 0 495 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="55"
              cy="442"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            />
            <circle
              cx="446"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            />
            <path
              d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
              stroke="white"
              strokeOpacity="0.08"
              strokeWidth="12"
            />
          </svg>
        </span>
        <span className="absolute bottom-0 right-0">
          <svg
            width="493"
            height="470"
            viewBox="0 0 493 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="462"
              cy="5"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            />
            <circle
              cx="49"
              cy="470"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            />
            <path
              d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
              stroke="white"
              strokeOpacity="0.06"
              strokeWidth="13"
            />
          </svg>
        </span>
      </div>
    </section>
  );
};

export default CallToAction;