import { SignUpForm } from "@/features/auth/components/sign-up";
import React from "react";

const Page = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className=" max-w-4xl mx-auto">
        <SignUpForm />
      </div>
    </div>
  );
};

export default Page;
