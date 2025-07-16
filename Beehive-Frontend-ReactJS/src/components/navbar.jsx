import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-16 w-full mx-auto px-4 text-black bg-white">
      <h1 className="text-3xl font-bold">Beehive</h1>
      <ul className="flex">
        <li className="p-4">Home</li>
        <li className="p-4">Setting</li>
        <li className="p-4">Login</li>
      </ul>
      {/* <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r bg-orange-200 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4">Beehive</h1>
        <ul className="pt-4 uppercase">
          <li className="p-4 border-b border-white">Home</li>
          <li className="p-4 border-b border-white">Setting</li>
          <li className="p-4 border-b border-white">Login</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
