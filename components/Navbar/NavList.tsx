import { Link } from "react-scroll";

const NavList = () => {
  return (
    <ul className="lg:flex lg:items-center">
      <li className="cursor-pointer hover:text-main-300 duration-500 ml-10 mr-6 py-1.5">
        <Link activeClass="active" to="hero" spy={true} smooth={true} offset={-100} duration={500}>
          Home
        </Link>
      </li>
      <li className="cursor-pointer hover:text-main-300 duration-500 ml-10 mr-6 py-1.5">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-150} duration={500}>
          Introduction
        </Link>
      </li>
      <li className="cursor-pointer hover:text-main-300 duration-500 ml-10 mr-6 py-1.5">
        <Link activeClass="active" to="reviews" spy={true} smooth={true} offset={50} duration={500}>
          Reviews
        </Link>
      </li>
      <li className="cursor-pointer hover:text-main-300 duration-500 ml-10 mr-6 py-1.5">
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
          Contact us
        </Link>
      </li>

      <li className="cursor-pointer hover:text-main-300 duration-500 ml-10 mr-6 py-1.5">
        <a>Login</a>
      </li>
      <li className="cursor-pointer hover:text-main-300 duration-500 ml-10 mr-6 py-1.5">
        <a>Register</a>
      </li>
    </ul>
  );
};

export default NavList;
