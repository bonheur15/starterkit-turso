import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className="relative w-full h-full bg-white bg-opacity-10">
      <div className="mx-auto max-w-8xl flex flex-col md:flex-row justify-center">
        {" "}
        {/* Inner Container */}
        {/* :HERO LEFT SIDE */}
        <div className="relative py-10 md:ml-7 lg:ml-20 w-full md:w-1/2 h-full flex flex-col justify-center">
          {/* ::Double Band */}
          <span className="absolute right-0 w-12 h-full bg-gray-500 bg-opacity-20" />
          <span className="absolute right-20 w-12 h-full bg-gray-500 bg-opacity-20" />
          {/* ::Hero Main */}
          <div className="pt-14 sm:py-20 lg:py-32 px-5 flex flex-col justify-center text-center sm:text-left">
            {/* :::Small Title */}
            <h2 className="text-xs text-gray-600 font-bold tracking-widest uppercase">
              Constructing Tommorow
            </h2>
            {/* :::Main Title */}
            <h1 className="py-5 text-4xl sm:text-5xl md:text-7xl text-gray-700 font-semibold capitalize">
              Transforming Visions into Reality
            </h1>
            {/* :::Text */}
            <p className="py-2 text-gray-500 leading-relaxed">
              Powering Tomorrow Transforming Visions into Reality Our dedication
              to excellence and innovation drives us to deliver top-quality
              supply and construction solutions. From sourcing high-grade ...
              <u className="px-[10px]">Read more</u>
            </p>

            <div className="mt-10 flex flex-col gap-[10px] sm:flex-row items-center">
              <Button> See our solutions</Button>
              <Button variant={"outline"}> Get in touch</Button>
            </div>
          </div>
        </div>
        {/* :HERO RIGHT SIDE */}
        <div className="relative w-1/2 min-h-full overflow-hidden">
          {/* ::Hero Image 1 */}
          <Image
            width={400}
            height={400}
            src="/herorightimage2.png"
            alt=""
            className="hidden md:block absolute bottom-0 left-1/2 w-auto h-3/4 opacity-70 shadow-xl transform -translate-x-1/2"
          />
          {/* ::Hero Image 2 */}
          <Image
            height={300}
            width={300}
            src="/herorightimage.png"
            alt=""
            className="hidden md:block absolute top-24 right-0 h-1/4 w-1/4 lg:w-1/3 lg:h-1/3 opacity-70 "
          />
        </div>
      </div>
    </div>
  );
}
