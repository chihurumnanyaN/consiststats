import SignIn from "@/components/sign-in";

//from next
import Image from "next/image";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Logo from "@/components/Logo";

const page = async () => {
  const session = await auth();

  if (session?.user) {
    redirect("/dashboard");
  }
  return (
    <main className="flex flex-col gap-10 items-center justify-center h-screen w-full dark:bg-[#03091a] bg-[#03091a]">
      <Logo width={30} height={30} darkMode={true} />
      <div
        className="bg-white/5 dark:bg-gray-800/40 backdrop-blur-md 
      p-8 rounded-2xl sm:shadow-lg w-[95%] sm:w-[35%] flex flex-col 
      justify-center items-start gap-10 border border-white/10"
      >
        {/* Logo and Title */}

        {/* Heading */}
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-3xl text-center  font-semibold text-gray-200">
            Yoo, Welcome{" "}
          </h2>
          <p className="text-sm text-center  text-gray-400">
            track your rhythm .get personalized insights to stay consistent
          </p>
        </div>

        {/* Sign In Provider (if using NextAuth) */}
        <SignIn />

        <p className="text-sm text-center text-gray-400 mx-auto">
          sign in with another account (coming soon)
        </p>
      </div>
      <div className="flex gap-2 justify-center items-center text-xs">
        <p>Terms of services</p> •<p>Policy Policy</p>
      </div>
    </main>
  );
};

export default page;
