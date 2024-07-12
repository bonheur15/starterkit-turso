"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const NavBar = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-[100%]  fixed top-0 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] items-center justify-center space-x-4",
          className
        )}
      >
        <div className="w-full  body-font shadow-sm">
          <div className="container mx-auto flex justify-between items-center py-[10px] px-5">
            <a
              href="#link"
              className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
            >
              <Image
                alt=""
                width={100}
                height={100}
                src={"/logo.png"}
                className="h-[50px] md:h-[80px] w-fit "
              />
            </a>
            {/* ::Navbar */}
            <nav className="hidden md:flex flex-wrap items-center justify-center text-base tracking-wide">
              <a href="#link" className="mr-8 hover:text-[#BEF264]">
                About us
              </a>
              <a href="#link" className="mr-8 hover:text-[#BEF264]">
                Services
              </a>
              <a href="#link" className="mr-8 hover:text-[#BEF264]">
                Projects
              </a>
              <a href="#link" className="mr-8 hover:text-[#BEF264]">
                Gallery
              </a>
            </nav>
            {/* ::Avatar */}
            <div className="hidden sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer">
              <Button variant={"outline"}>
                Get In Touch
                <ChevronRight size={20} className="ml-[10px]" />
              </Button>
            </div>
            {/* ::Burger icon standard */}
            <button
              className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 rounded-md text-gray-500 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-purple-500 hover:to-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* ::MOBILE MENU */}
          {isOpen && (
            <div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-50 text-base uppercase text-center font-semibold">
              <a
                href="#link"
                className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-indigo-700"
              >
                About us
              </a>
              <a
                href="#link"
                className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-indigo-700"
              >
                Services
              </a>
              <a
                href="#link"
                className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-indigo-700"
              >
                Projects
              </a>
              <a
                href="#link"
                className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-indigo-700"
              >
                Gallery
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
