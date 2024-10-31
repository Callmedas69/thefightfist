"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { socialLink } from "@/app/constants";

const Footer = () => {
  return (
    <div className="relative bg-[#324c9b]">
      <div className="flex flex-row px-20 py-8 text-2xl justify-between">
        <div className="flex flex-row gap-5">
          {socialLink.map((social, index) => (
            <div key={index}>
              <motion.div
                whileHover={{ scale: [null, 1.2, 1.1] }}
                transition={{ duration: 0.3 }}
              >
                <Link href={social.link} target="blank">
                  <Image
                    src={social.icons}
                    alt={social.social}
                    width={50}
                    height={50}
                    className="bg-white rounded-xl"
                  />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="text-white font-bold items-center justify-center">
          JOIN THE FIGHT ACROSS X & TG + WIN NFT
        </div>
      </div>
    </div>
  );
};

export default Footer;
