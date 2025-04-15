"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaUniversity, FaGoogle, FaHandsHelping, FaLanguage, FaMicrophone, FaUsers, FaLightbulb, FaLaptopCode, FaRegCalendarAlt, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { teamDatabase } from "@/database/teamDatabase"; // Import the database

const Timeline = () => {
  const timelineData = [
    {
      date: "April 7–15, 2025",
      event: "Awareness campaign and team outreach",
      description: "This phase focuses on promoting the hackathon, answering questions, and helping selected teams refine their pitched ideas.",
    },
    {
      date: "April 21–30, 2025",
      event: "Online Bootcamp and dataset introduction",
      description: "The bootcamp will introduce participants to the dataset, tools, and key skills needed for the hackathon. After this phase, teams will be screened on May 1st, and successful candidates will move on to the next stage.",
    },
    {
      date: "May 1–23, 2025",
      event: "Ideation Sprint with mentor reviews",
      description: "During this phase, teams will brainstorm solutions, develop initial concepts, and receive feedback from mentors. The top five finalists will be selected at the end of this phase.",
    },
    {
      date: "May 26–29, 2025",
      event: "In-person mentoring sessions",
      description: "Finalists will arrive at the University of Ghana from May 25th. In-person mentoring sessions begin from May 26th to May 29th, followed by the hackathon grand finale on May 30th.",
    },
    {
      date: "May 30, 2025",
      event: "Hackathon event (Grand Finale)",
      description: "May 30th 2025 marks the Hackathon event (Grand Finale). The top five finalists will showcase their solutions and compete for the winning spots. The hackathon winners will be announced, and awards will be presented.",
    },
    {
      date: "June 1 onwards, 2025",
      event: "Post-event feedback and follow-up",
    },
  ];

  return (
    <div className="timeline-container mt-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Timelines</h2>
      <div className="timeline flex flex-col items-center space-y-8">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item flex flex-col items-center text-center">
            <div className="timeline-marker w-6 h-6 bg-white rounded-full border-4 border-secondary mb-4"></div>
            <div className="timeline-content">
              <div className="timeline-date text-lg font-semibold text-white">{item.date}</div>
              <div className="timeline-event text-xl font-bold text-white">{item.event}</div>
              {item.description && (
                <div className="timeline-description text-sm text-white mt-2">
                  {item.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  const [password, setPassword] = useState("");
  const [teamName, setTeamName] = useState(""); // Add state for team name
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false); // Add state for showing the pop-up
  const [agreeToTerms, setAgreeToTerms] = useState(false); // Add state for the checkbox

  const handlePasswordSubmit = () => {
    if (!agreeToTerms) {
      setNotificationMessage("You must agree to the terms before proceeding.");
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds
      return;
    }
    const team = teamDatabase.find((entry) => entry.teamName === teamName && entry.password === password);
    if (team) {
      setIsAuthorized(true);
      setNotificationMessage("You can now access the dataset.");
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds
      setShowPopup(false); // Close the pop-up
    } else {
      setNotificationMessage("Incorrect team name or password. Please try again.");
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds
    }
  };

  return (
    <section
      id="about"
      className="relative bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container relative z-10">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 max-w-[540px] lg:mb-0">
              <h2 className="mb-6 text-2xl font-semibold leading-snug text-dark dark:text-white sm:text-3xl sm:leading-tight">
                The <Link href="https://cdl-inclusion.com" className="text-blue-500 hover:underline">Centre for Digital Language Inclusion (CDLI)</Link> is led by the <Link href="https://disabilityinnovation.com" className="text-blue-500 hover:underline">Global Disability Innovation Hub</Link> in partnership with <Link href="https://ug.edu.gh" className="text-blue-500 hover:underline">University College London</Link> and <Link href="https://ug.edu.gh" className="text-blue-500 hover:underline">University of Ghana</Link>, funded by UK aid’s <Link href="https://at2030.org" className="text-blue-500 hover:underline">AT2030 programme</Link>, alongside support from <Link href="https://google.org" className="text-blue-500 hover:underline">Google.org</Link>.
              </h2>
              <p className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                A curated dataset of selected Ghanaian languages namely Akan, Ewe, Ga, Dagbani, and Dagaare is available to participants to support their project.
              </p>
              {!isAuthorized && (
                <button
                  onClick={() => setShowPopup(true)}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-center text-sm font-medium text-white duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  Enter Team Details
                </button>
              )}
              {isAuthorized && (
                <Link
                  href="https://drive.google.com/drive/u/0/folders/1GaUsmKxr3Me7vGTlAIDxm6VjGWX8QV3r"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-center text-sm font-medium text-white duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  Access Dataset
                </Link>
              )}
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
        {showNotification && (
          <div className="fixed bottom-4 left-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md z-50">
            {notificationMessage}
          </div>
        )}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white text-black px-8 py-6 rounded-lg shadow-lg w-[400px]">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Enter Team Details
              </h3>
              <label htmlFor="teamName" className="block mb-2 text-sm font-medium text-gray-700">
                Team Name
              </label>
              <input
                id="teamName"
                type="text"
                placeholder="Enter team name"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="flex items-center mb-4">
                <input
                  id="agreeToTerms"
                  type="checkbox"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  className="mt-1 mr-2"
                />
                <label htmlFor="agreeToTerms" className="text-xs text-gray-700 flex items-center">
                  <FaExclamationTriangle className="text-yellow-500 mr-2 text-6xl" />
                  By ticking this box, you agree to the terms and conditions that the dataset and models provided are to be used exclusively for the purposes of the hackathon and must not be shared, distributed, or used for any other purpose outside the scope of this event.
                </label>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setShowPopup(false)}
                  className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePasswordSubmit}
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
        <Timeline />
      </div>
      <div className="absolute inset-0 -z-10">
        {/* Background or blocking elements */}
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