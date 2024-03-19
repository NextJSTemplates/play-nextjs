import React from "react";
import ForgotPassword from "@/components/Auth/ForgotPassword";
import Breadcrumb from "@/components/Common/Breadcrumb";

const ForgotPasswordPage = () => {
  return (
    <>
      <Breadcrumb pageName="Forget Password" />
      <ForgotPassword />
    </>
  );
};

export default ForgotPasswordPage;
