import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sign In | Tɛkyerɛma Pa Hackathon 2025",
};

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageName="Sign-In" />

      <Signin />
    </>
  );
};

export default SigninPage;
