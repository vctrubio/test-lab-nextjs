"use client";

import React, { useState } from "react";
import LHSLogo from "./LHSLogo";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NavItem: React.FC<{ label: string; href: string }> = ({
  label,
  href,
}) => {
  return (
    <Link href={href}>
      <div className="hover:text-black transition-colors duration-300 cursor-pointer align-right text-xl border-b-2 border-transparent hover:border-black">
        {label}
      </div>
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full p-4 bg-white shadow-md">
      <div className="flex justify-between items-center max-w-[1400px] mx-auto">
        <LHSLogo title="LHS" concept="Concept" />
        <div className="block sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {/* <div>Search bar to do</div> */}
        <div
          id="nav-content"
          className={`flex-col sm:flex-row sm:flex space-x-4 items-center text-gray-700 ${isOpen ? "flex" : "hidden"} sm:flex text-right`}
        >
          <NavItem label="Ventas" href="/ventas" />
          <NavItem label="Alquiler" href="/alquiler" />
          <NavItem label="Contacto" href="/contacto" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
