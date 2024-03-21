"use client";

import { Toaster } from "react-hot-toast";

const ToasterContext = () => {
  return (
    <div className="z-[99999]">
      <Toaster />
    </div>
  );
};

export default ToasterContext;
