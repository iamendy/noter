import { Inter } from "next/font/google";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import Layout from "../components/Layout";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <>
      <Layout>
        <main className="">
          {status == "authenticated" ? (
            <p> {session?.user.name} </p>
          ) : (
            <>
              sign in with Google <br />
              <button onClick={() => signIn("google")}>Signin</button>
            </>
          )}
        </main>
      </Layout>
    </>
  );
}
