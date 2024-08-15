"use client";  // Necessary for using state and client-side functionalities

import Image from "next/image";
import React, { useState } from "react";
import Logo from "/public/assets/Subtract.png";
import Button from "@/components/core/Button";
import { Menu, X } from "react-feather";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCreateClick = () => {
    alert("Create button clicked!");
  };

  return (
    <header className="bg-white  border-b p-4 container mx-auto">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Image src={Logo} width={50} height={50} alt="Logo" />
          <h3 className="text-2xl font-customFont">
            <span className="text-3xl font-bold">M</span>umair
          </h3>
        </div>

        {/* Menu Section */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="font-customFont flex gap-12">
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <Button
            text="Download CV"
            className=""
            onClick={handleCreateClick}
          />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={handleMenuToggle}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-md transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="p-4">
          <ul className="flex flex-col items-start gap-4 font-customFont">
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <div className="mt-4">
            <Button
              text="Download CV"
              className="py-32 bg-black"
              onClick={handleCreateClick}
            />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={handleMenuToggle}
        ></div>
      )}
    </header>
  );
};

export default Header;
