import { SignInForm } from "@/features/auth/components/sign-in";
import React from "react";

const Page = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className=" max-w-4xl mx-auto">
        <SignInForm />
      </div>
    </div>
  );
};

export default Page;
