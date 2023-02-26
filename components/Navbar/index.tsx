import Image from "next/image";
import { useState } from "react";
import NavList from "./NavList";
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={"sticky top-0 z-50 bg-red shadow-sm bg-white"}>
      <div className="flex justify-between items-center py-4 px-8 lg:max-w-7xl m-auto flex-wrap w-full relative">
        <div>
          <Image src="/logoWithTexts.png" alt="async working logo" width={200} height={100} />
        </div>
        <FiMenu
          className="lg:hidden block h-6 w-6 cursor-pointer"
          onClick={() => {
            setOpen(!open);
          }}
        />
        <div
          className={`${
            open ? "h-[280px]" : "h-[0px]"
          }  lg:hidden absolute bg-white top-16 left-0 shadow-sm overflow-hidden text-main-400 w-full transition-all duration-700 ease-out delay-75`}
        >
          <NavList />
        </div>
        <div className={`hidden text-main-400 lg:flex lg:w-auto `}>
          <NavList />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
