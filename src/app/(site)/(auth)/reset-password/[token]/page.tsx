import React from "react";
import ResetPassword from "@/components/Auth/ResetPassword";
import Breadcrumb from "@/components/Common/Breadcrumb";

const ResetPasswordPage = ({ params }: { params: { token: string } }) => {
  return (
    <>
      <Breadcrumb pageName="Reset Password" />
      <ResetPassword token={params.token} />
    </>
  );
};

export default ResetPasswordPage;
