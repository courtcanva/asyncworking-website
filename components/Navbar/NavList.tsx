const NavList = () => {
  return (
    <ul className="lg:flex lg:items-center">
      <li className="cursor-pointer hover:text-main-300 duration-500 ml-10 mr-6 py-1.5">
        <a href="#">Home</a>
      </li>
      <li className="cursor-pointer hover:text-main-300 duration-500 ml-10 mr-6 py-1.5">
        <a href="#">Features</a>
      </li>
      <li className="cursor-pointer hover:text-main-300 duration-500 ml-10 mr-6 py-1.5">
        <a href="#">Pricing</a>
      </li>
      <li className="cursor-pointer hover:text-main-300 duration-500 ml-10 mr-6 py-1.5">
        <a href="#">Blog</a>
      </li>
      <li className="cursor-pointer hover:text-main-300 duration-500 ml-10 mr-6 py-1.5">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

export default NavList;
