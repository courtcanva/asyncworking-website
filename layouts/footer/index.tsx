import FooterList from "./FooterList";
import FooterAside from "./FooterAside";
import { aboutUs, customers, support } from "./FooterDetails";
const Footer = () => {
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
      <div className=" bg-[#23222f] flex flex-col lg:flex-row justify-center text-white opacity-50 text-xs lg:text-sm gap-1 pl-6 py-2 lg:py-4">
        <div>Copyright © 2023 ASYNC-WORKING PTY LTD.</div>
        <div>ABN: 70649121568. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
