import React from "react";
import { FaGithub } from "react-icons/fa6";

import { signIn } from "@/lib/auth";

const SignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
      className="flex w-full "
    >
      <button
        type="submit"
        className="w-full bg-black hover:border hover:border-white flex justify-center items-center gap-5 text-md text-white rounded-xl p-3 "
      >
        <FaGithub className="text-2xl" /> <span>Sign In with Github</span>
      </button>
    </form>
  );
};

export default SignIn;
