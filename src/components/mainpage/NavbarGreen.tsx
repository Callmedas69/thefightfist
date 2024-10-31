"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ttsLogo from "@/assets/homepage/TTS_Logo.png";

const navLinks = [
  { title: "HOME", path: "/" },
  { title: "FIGHT NFT", path: "/commingsoon" },
  { title: "SWAP", path: "/commingsoon" },
  { title: "STAKE", path: "/commingsoon" },
  { title: "ART GALLERY", path: "/commingsoon" },
  // { title: "WHITEPAPER", path: "/whitepaper" },
];

const NavbarGreen = () => {
  return (
    <nav className="flex items-center justify-between h-20 px-44 pt-10">
      {/* Left Section */}

      {/* lOGO */}
      <div>
        <Image
          src={ttsLogo}
          alt="TTS Logo"
          width={85}
          height={85}
          className="rounded-full"
        />
      </div>

      {/* Middle Section */}
      <div className="flex justify-center items-center space-x-10 bg-black rounded-3xl">
        {/* Links */}
        {navLinks.map((nav, index) => (
          <div
            key={index}
            className="px-6 py-3 font-semibold text-white flex items-center cursor-pointer z-50"
          >
            {nav.path ? (
              <Link href={nav.path} passHref className="hover:text-blue-500">
                {nav.title}
              </Link>
            ) : (
              <div className="group relative">
                {/* Parent menu item */}
                <span>{nav.title}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavbarGreen;
