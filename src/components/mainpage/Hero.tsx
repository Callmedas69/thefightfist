"use client";

import React from "react";
import { Button } from "../ui/button";
import localFont from "next/font/local";
import Image from "next/image";
import background from "@/assets/homepage/TopBG.png";
import hero from "@/assets/homepage/Hero.png";
import launch from "@/assets/homepage/HeroFIGHTLaunch.png";

export const BackWild = localFont({
  src: [
    {
      path: "../../app/fonts/Back-Wild.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

const Hero = () => {
  const scrollToSection = () => {
    document
      .querySelector("#how-to-buy")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute saturate-200 inset-0 -z-10">
        <Image
          src={background}
          alt="background"
          objectFit="fill"
          objectPosition="center"
          className="w-full h-full"
        />
      </div>

      {/* Launch and Hero Section */}
      <div className="relative flex flex-row w-full h-screen justify-center items-center bottom-0 z-10">
        {/* Launch Image */}
        <div className="z-40 justify-end">
          <div>
            <Image src={launch} alt="launch" />
          </div>
          <div className="flex justify-center items-center">
            <Button
              onClick={scrollToSection}
              className="bg-yellow-500 rounded-none text-2xl text-black font-semibold px-10 py-7 hover:bg-white  hover:shadow-2xl hover:shadow-orange-300"
            >
              HOW TO BUY $TTS
            </Button>
          </div>
        </div>

        {/* Hero Image at the Bottom */}

        <div className="h-full content-end pl-48 pb-20 transform scale-150 aspect-square z-10">
          <Image src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
