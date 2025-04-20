import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle"; // Make sure this is a tailwind-compatible toggle
import {Menu, X} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return ( 
    <nav className="bg-[#7a766f] dark:bg-[#333] fixed w-full top-0 z-50 px-12 py-6 flex justify-around items-center">
      <div className="flex font-bold text-[26px]">
        <a href="#about" className="text-4xl font-bold text-wheat hover:text-black transition-all duration-300">PORTFOLIO</a>
      </div>
      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6 font-bold items-center">
        {["about", "skills", "projects", "contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className="text-black text-xl dark:text-white hover:text-wheat px-3 py-2 rounded-full transition-colors duration-300"
            >
              {item.toUpperCase()}
            </a>
          </li>
        ))}
        <ThemeToggle />
      </ul>

      {/* Mobile hamburger */}
      <div className="md:hidden flex items-center space-x-4">
        <ThemeToggle />
        <button onClick={toggleMenu}>
          {isOpen ? <X className="text-black" /> : <Menu className="text-black" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-[#7a766f] dark:bg-[#333] flex flex-col items-center gap-4 py-6 md:hidden z-40 font-bold">
          {["about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-black dark:text-white hover:text-wheat px-3 py-2 rounded-full transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      )}
      {/* <div className="flex md:flex items-center">
        <ul className="flex gap-6 font-bold">
          <li>
            <a href="#about" className="text-black hover:text-wheat px-3 py-2 rounded-full transition-colors duration-300">ABOUT</a>
          </li>
          <li>
            <a href="#skills" className="text-black hover:text-wheat px-3 py-2 rounded-full transition-colors duration-300">skills</a>
          </li>
          <li>
            <a href="#projects" className="text-black hover:text-wheat px-3 py-2 rounded-full transition-colors duration-300">PROJECTS</a>
          </li>
          <li>
            <a href="#contact" className="text-black hover:text-wheat px-3 py-2 rounded-full transition-colors duration-300">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="w-10">
        <ThemeToggle />
      </div> */}
    </nav>
  );
};

export default Navbar;