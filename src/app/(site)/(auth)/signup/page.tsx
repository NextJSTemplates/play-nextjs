import SignUp from "@/components/Auth/SignUp";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sign Up | Tɛkyerɛma Pa Hackathon 2025",
};

const SignupPage = () => {
  return (
    <>
      <Breadcrumb pageName="Sign-Up" />

      <SignUp />
    </>
  );
};

export default SignupPage;
