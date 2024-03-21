import React from "react";

const SwitchOption = ({
  isPassword,
  setIsPassword,
}: {
  isPassword: boolean;
  setIsPassword: any;
}) => {
  return (
    <div className="dark:border-strokedark mx-auto mb-8 flex  flex-col items-center justify-center gap-2.5 rounded-lg border border-stroke bg-gray p-2 dark:border-dark-3 dark:bg-gray-800 md:flex-row ">
      <button
        className={`w-full rounded-lg border px-6 py-3 text-base outline-none transition-all duration-300 hover:border-dark-3 hover:bg-dark-3 hover:text-white dark:border-transparent dark:hover:bg-dark-3 dark:hover:shadow-none  ${
          !isPassword && "bg-dark-3 text-white"
        }`}
        onClick={() => setIsPassword(false)}
      >
        Magic Link
      </button>
      <button
        className={`w-full rounded-lg border px-6 py-3 text-base outline-none transition-all duration-300 hover:border-dark-3 hover:bg-dark-3 hover:text-white dark:border-transparent dark:hover:bg-dark-3 dark:hover:shadow-none  ${
          isPassword && " bg-dark-3 text-white"
        }`}
        onClick={() => setIsPassword(true)}
      >
        Password
      </button>
    </div>
  );
};

export default SwitchOption;
