/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
import React from "react";
import Logo from "/public/assets/Subtract.png";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";

const Footer = () => {
  return (
    <footer className="max-h-screen  ">
      <div className="bg-[#F8F8F8] py-32 leading-10">
        <div className="flex items-center justify-center gap-2">
          <Image src={Logo} width={50} height={50} alt="" />
          <h3 className="text-2xl">
            <span className="text-3xl font-bold font-customFont ">M</span>umair{" "}
          </h3>
        </div>

        <ul className="font-customFont flex justify-center items-center  gap-[12px]">
          <li>Home</li>
          <li>About Me</li>
          <li>Services</li>
          <li>Testimonials</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
     
      <div>
        <div className="flex justify-center items-center  gap-[12px]">
          <Facebook />
          <Instagram />
          <Twitter />
          <Linkedin />
        </div>
      </div>
      </div>
      <div className="bg-[#545454] p-3 text-white">
        <p className="text-center">
          © 2023 <span className="text-[#FD6F00]">Mumair</span> All Rights Reserved , Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
