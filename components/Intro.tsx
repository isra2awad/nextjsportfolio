"use client";

import Image from "next/image";
import profile from "@/public/profile.jpeg";
import { delay, motion } from "framer-motion";
import { Space_Mono } from "next/font/google";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

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

      <motion.div
        className=" flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
           outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          href="#contact"
        >
          {" "}
          Message Me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full
         outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
        >
          {" "}
          Download my CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="group bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
          outline-none focus:scale-110 hover:scale-110 `active:scale-105 transition"
          href=""
        >
          {" "}
          <BsLinkedin className="opacity-70 group-hover:translate-x-1" />{" "}
        </a>

        <a
          className="group bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
          outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
          href=""
        >
          {" "}
          <FaGithubSquare className="opacity-70 group-hover:translate-x-1" />{" "}
        </a>
      </motion.div>
    </section>
  );
}
