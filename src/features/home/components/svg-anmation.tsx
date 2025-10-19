import React from "react";
import { LinesIcon } from "./svgs";
import { Link2Icon, Loader, Webhook } from "lucide-react";

export const SvgAnimation = () => {
  return (
    <div className=" relative w-full flex flex-col justify-center items-center py-29 gap-y-28 ">
      <div className=" absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10"></div>
      <div className=" w-full flex justify-between items-center max-w-6xl mx-auto">
        <div className=" flex flex-col justify-center  ">
          <h1 className=" text-lg tracking-tight font-semibold">
            Unlimated integrations
          </h1>
          <p className=" text-sm">100% free native integrations tools</p>
        </div>
        <div className=" flex flex-col justify-center  ">
          <h1 className=" text-lg tracking-tight font-semibold">
            Intigrate with Ai and LLm
          </h1>
          <p className=" text-sm">Web-hooks support</p>
        </div>
      </div>
      <div className=" flex justify-center items-center gap-x-4">
        <div className=" flex flex-col justify-between items-start h-[80px] ">
          <span className=" flex gap-x-2">
            <Webhook className=" size-4" />
            <p className=" text-xs">Web Hook</p>
          </span>
          <span className=" flex gap-x-2">
            <Link2Icon className=" size-4" />
            <p className=" text-xs">Integrations</p>
          </span>
          <span className=" flex gap-x-2">
            <Loader className=" size-4" />
            <p className=" text-xs">Realtime</p>
          </span>
        </div>

        <LinesIcon />
        <div className=" flex flex-col justify-center items-start h-[96px] ">
        
        </div>
      </div>
    </div>
  );
};
