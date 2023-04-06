import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Layout from "../components/Layout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </QueryClientProvider>
  );
}
