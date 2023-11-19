"use client";

import Image from "next/image";
import profile from "@/public/profile.jpeg";
import { motion } from "framer-motion";
import { Space_Mono } from "next/font/google";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              alt="Isra"
              src={profile}
              quality="95"
              priority={true}
              width="192"
              height="192"
              className=" bg-profile bg-center object-cover  bg-no-repeat rounded-full  shadow-xl order-1
             justify-self-center relative inline-block animate-profileAnimate"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-[.2rem] right-[.5rem] text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <span className="font-bold">Hello, I'm Isra</span> I am an aspiring{" "}
        <span className="font-bold"> fullstack developer </span> as
        transitioning into <span className="font-bold">web development</span>,
        with experience in customer service, and project coordination. Currently
        mastering the
        <span className="italic"> MERN stack</span>
      </motion.p>
    </section>
  );
}
