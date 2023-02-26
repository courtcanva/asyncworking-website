import Image from "next/image";
import FooterList from "./FooterList";
import FooterAside from "./FooterAside";
const Footer = () => {
  const aboutUs = {
    title: "ABOUT US",
    subTitle: [
      { id: 1, listTitle: "Works" },
      { id: 2, listTitle: "Strategy" },
      { id: 3, listTitle: "Releases" },
      { id: 4, listTitle: "Press" },
      { id: 5, listTitle: "Mission" },
    ],
  };

  const customers = {
    title: "CUSTOMERS",
    subTitle: [
      { id: 1, listTitle: "Trading" },
      { id: 2, listTitle: "Popular" },
      { id: 3, listTitle: "Customers" },
      { id: 4, listTitle: "Features" },
    ],
  };

  const support = {
    title: "SUPPORT",
    subTitle: [
      { id: 1, listTitle: "Developers" },
      { id: 2, listTitle: "Support" },
      { id: 3, listTitle: "Customer Service" },
      { id: 4, listTitle: "Get Started" },
      { id: 5, listTitle: "Guide" },
    ],
  };

  return (
    <footer className="bg-[#292838]">
      <div className="flex flex-col lg:flex-row justify-between items-center px-3 lg:px-8 lg:max-w-7xl m-auto flex-wrap w-full relative bg-[#292838] pt-16 pb-10 ">
        <div className="w-full lg:w-[33%] lg:mb-4">
          <FooterAside />
        </div>
        <div className="flex flex-col justify-start lg:flex-row w-full lg:w-[67%] px-0 lg:pl-10">
          <div className="lg:w-[33%] pt-10 lg:pt-0 ">
            <FooterList lists={aboutUs} />
          </div>

          <div className="lg:w-[33%] pt-10 lg:pt-0">
            <FooterList lists={customers} />
          </div>

          <div className="lg:w-[33%] pt-10 lg:pt-0">
            <FooterList lists={support} />
          </div>
        </div>
      </div>
      <div className="text-white opacity-50 text-sm bg-[#23222f] py-4 flex justify-center">
        Copyright © 2023 ASYNC-WORKING PTY LTD. ABN: 70649121568
      </div>
    </footer>
  );
};

export default Footer;
