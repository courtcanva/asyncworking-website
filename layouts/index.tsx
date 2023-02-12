import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import BackgroundWrapper from "./backgroundWrapper";
import Hero from "../components/Hero";
import Intro from "../components/Intro";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <BackgroundWrapper>
        <div>{children}</div>
        <Footer />
      </BackgroundWrapper>
    </>
  );
};

export default Layout;
