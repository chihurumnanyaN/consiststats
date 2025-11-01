import { auth } from "@/lib/auth";
import React from "react";

const WelcomeText = async () => {
  const session = await auth();
  const userName = session?.user?.name || "Anonymous";

  return (
    <div className="w-full">
      <p className="text-4xl font-bold text-white">Welcome ,{userName}</p>
      <p className="text-sm py-2 text-gray-400">
        We&apos;re glad to have you back!, stay consistent, stay motivated
        champ...
      </p>
    </div>
  );
};

export default WelcomeText;
