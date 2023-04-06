import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();
  return (
    <nav className="flex items-center justify-between pt-4">
      <h3 className="text-green-400 font-bold">
        Note<span className="text-white">R</span>
      </h3>

      <div className="flex space-x-3">
        {status == "authenticated" ? (
          <>
            <button
              className="bg-green-500 text-xs px-2"
              onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
            >
              Sign out
            </button>
            <Image
              className="w-10 h-10 rounded-full"
              src={session?.user?.image}
              width={50}
              height={50}
              alt={session?.user?.name}
            />
          </>
        ) : (
          <button
            className="bg-green-500 text-xs p-2"
            onClick={() =>
              signIn("google", { redirect: true, callbackUrl: "/notes" })
            }
          >
            Sign In with Google
          </button>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
