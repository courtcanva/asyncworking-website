import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Quicksand } from "@next/font/google";
import Layout from "../layouts";

// eslint-disable-next-line new-cap
const quickSand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quickSand",
  weight: ["300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${quickSand.variable} font-sans antialiased`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
