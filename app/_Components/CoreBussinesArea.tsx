import { Card } from "@/components/ui/card";
import { HomeIcon } from "lucide-react";
import React from "react";

export default function CoreBussinesArea() {
  return (
    <div className="lg:px-[100px] md:px-[50px] px-[20px] py-[50px] w-[100%] bg-[linear-gradient(356deg,_#032e241c,_transparent)]">
      <div className="font-bold text-3xl">Core Bussines Area</div>
      <div className="font-light  py-[20px]">
        Main Company Focus of company operation
      </div>
      <div className="mt-[20px] flex justify-center items-center flex-wrap gap-[20px]">
        <Card className="p-[20px] w-[190px] bg-[#00000013] border-[2px] border-black flex justify-center items-center flex-col gap-[10px]">
          <div className="bg-black rounded-[100%]">
            <HomeIcon
              className="p-[20px] "
              size={80}
              color="white"
              strokeWidth={1}
            />
          </div>
          <div className="font-bold">General Supplier</div>
        </Card>
        <Card className="p-[20px]  w-[190px] bg-[#00000013] border-[2px] border-black flex justify-center items-center flex-col gap-[10px]">
          <div className="bg-black rounded-[100%]">
            <HomeIcon
              className="p-[20px] "
              size={80}
              color="white"
              strokeWidth={1}
            />
          </div>
          <div className="font-bold">Machine Rently</div>
        </Card>
        <Card className="p-[20px]  w-[190px]  bg-[#00000013] border-[2px] border-black flex justify-center items-center flex-col gap-[10px]">
          <div className="bg-black rounded-[100%]">
            <HomeIcon
              className="p-[20px] "
              size={80}
              color="white"
              strokeWidth={1}
            />
          </div>
          <div className="font-bold">Transportation</div>
        </Card>
        <Card className="p-[20px]  w-[190px] bg-[#00000013] border-[2px] border-black flex justify-center items-center flex-col gap-[10px]">
          <div className="bg-black rounded-[100%]">
            <HomeIcon
              className="p-[20px] "
              size={80}
              color="white"
              strokeWidth={1}
            />
          </div>
          <div className="font-bold">Consultation</div>
        </Card>
        <Card className="p-[20px]  w-[200px] bg-[#00000013] border-[2px] border-black flex justify-center items-center flex-col gap-[10px]">
          <div className="bg-black rounded-[100%]">
            <HomeIcon
              className="p-[20px] "
              size={80}
              color="white"
              strokeWidth={1}
            />
          </div>
          <div className="font-bold">Contruction service</div>
        </Card>
      </div>
    </div>
  );
}
