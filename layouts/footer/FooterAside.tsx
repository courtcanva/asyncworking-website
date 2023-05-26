import Image from "next/image";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
const FooterAside = () => {
  return (
    <aside className="text-white  p-3">
      <div className="flex gap-3">
        <Image src="/cropped-logo.png" alt="async working logo" width={30} height={30} />
        <div className="text-lg">
          <span className="font-bold">Async</span>
          <span className="font-medium">Working</span>
        </div>
      </div>
      <p className="my-6 opacity-50">
        Cras ultricies mi eu turpis sit hendrerit fringilla vestibulum ante ipsum primis in faucibus
        ultrices posuere cubilia.
      </p>
      <ul className="flex text-2xl gap-5">
        <li className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-1000 delay-150 ease-out">
          <FiFacebook />
        </li>
        <li className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-1000 delay-150 ease-out">
          <FiTwitter />
        </li>
        <li className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-1000 delay-150 ease-out">
          <FiInstagram />
        </li>
        <li className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-1000 delay-150 ease-out">
          <FiLinkedin />
        </li>
      </ul>
    </aside>
  );
};

export default FooterAside;
