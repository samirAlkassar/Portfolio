"use client";

import Link from "next/link";
import { Button } from "../components/button";
import { HamburgerIcon } from "./icons/hamburgerIcon";
import { useState } from "react";
import classNames from "classnames";

type NavLink = {
  id: string;
  name: string;
};

const navLinks: NavLink[] = [
  { id: "nvl1", name: "Portfolio" },
  { id: "nvl2", name: "About" },
  { id: "nvl3", name: "Works" },
];

export const Header = () => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col items-center bg-transparent">
      <div className="w-full max-w-[1000px] relative mx-4 mt-6 px-4">
        {/* Main Navbar */}
        <div className="border backdrop-blur-md border-nav-border w-full p-2 rounded-full bg-white bg-opacity-5 flex justify-between items-center">
          <h1 className="text-lg md:text-2xl font-semibold italic cursor-pointer ml-4 select-none">
            Samir
          </h1>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center text-lg text-white-cold">
            {navLinks.map(({ id, name }) => (
              <li key={id} className="hover:text-nav-hover active:scale-95 transition-all duration-200 ease-in">
                <Link className="px-6 py-2" href={"#"}>
                  {name}
                </Link>
              </li>))}
            <li>
              <Button size="small" variant="primary">Contact</Button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <HamburgerIcon onClick={() => setMenuToggle((prev) => !prev)} className="md:hidden block mr-4 cursor-pointer"/>
        </div>

        {/* Mobile Navigation */}
        <ul className={classNames(
            "absolute md:hidden top-14 left-0 right-0 mx-4 flex flex-col items-center text-lg text-white-cold bg-white bg-opacity-5 backdrop-blur-lg rounded-lg w-auto py-6 transition-all duration-300",
            menuToggle ? "opacity-100 visible scale-100 translate-y-0" : "opacity-0 invisible scale-95 -translate-y-5")}
        >
          {navLinks.map(({ id, name }) => (
            <li
              key={id}
              className="hover:text-nav-hover mb-5 w-full text-center cursor-pointer active:scale-95 transition-all duration-200 ease-in"
              onClick={() => setMenuToggle(false)}>
              <Link className="px-6 py-2" href={"#"}>{name}</Link>
            </li>))}
          <li> <Button size="small" variant="primary">Contact</Button> </li>
        </ul>
      </div>
    </header>
  );
};

