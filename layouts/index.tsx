import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import BackgroundWrapper from "./backgroundWrapper";
import Navbar from "../components/Navbar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Navbar />
      <BackgroundWrapper>
        <div>{children}</div>
      </BackgroundWrapper>
      <Footer />
    </>
  );
};

export default Layout;
