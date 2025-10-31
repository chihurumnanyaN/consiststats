"use client";

import { FaSignOutAlt } from "react-icons/fa";
import { signOutAction } from "@/app/dashboard/actions";

const SignOut = () => {
  return (
    <form action={signOutAction} className="w-full">
      <button
        type="submit"
        className="flex items-center justify-center gap-2 w-fit px-4 py-2 rounded-lg 
                   bg-red-600/10 text-red-600 font-medium hover:bg-red-600/80 transition-all"
      >
        <FaSignOutAlt className="text-lg" />
        <span>Sign Out</span>
      </button>
    </form>
  );
};

export default SignOut;
