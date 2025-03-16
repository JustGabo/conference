import React from "react";
import AppleIcon from "../svgs/apple";
import XboxIcon from "../svgs/xbox";
import DiscordIcon from "../svgs/discord";
import NikeIcon from "../svgs/nike";
import VSCodeIcon from "../svgs/vsCode";
import TeslaIcon from "../svgs/tesla";

const Collaborations = () => {
  return (
    <div className=" px-10 w-full justify-center items-center bg-neutral-200 py-20 text-black flex">
      <div className="flex w-full">
        <div className="w-1/2 h-full ">
          <p className="text-xl text-neutral-600">
            Collaborations with Brands.
          </p>
        </div>
        <div className="w-1/2 h-full flex flex-col gap-32">
          <p className="text-2xl text-neutral-600 w-[80%]">
            Some of the most inspiring creatives will share their successes,
            failures, processes, and experiences. We&apos;re beyond the excited
            to bring you these stories to help sharpen your craft and push you
            further.
          </p>

          <section className="grid grid-cols-3 gap-3">
            <div className="w-full relative overflow-hidden   flex group items-center justify-center h-[150px] rounded-md bg-neutral-300">
              <AppleIcon />
              <div className="w-full h-full bg-neutral-400 transform translate-y-[100%] transition-all duration-500 group-hover:translate-y-0 -z-1 absolute" />
            </div>
            <div className="w-full relative overflow-hidden   flex group items-center justify-center h-[150px] rounded-md bg-neutral-300">
              <NikeIcon />
              <div className="w-full h-full bg-neutral-400 transform translate-y-[100%] transition-all duration-500 group-hover:translate-y-0 -z-1 absolute"/>
            </div>
            <div className="w-full relative overflow-hidden   flex group items-center justify-center h-[150px] rounded-md bg-neutral-300">
              <XboxIcon />
              <div className="w-full h-full bg-neutral-400 transform translate-y-[100%] transition-all duration-500 group-hover:translate-y-0 -z-1 absolute" />
            </div>
            <div className="w-full flex items-center justify-center relative overflow-hidden h-[150px] group rounded-md bg-neutral-300">
              <DiscordIcon />
              <div className="w-full h-full bg-neutral-400 transform translate-y-[100%] transition-all duration-500 group-hover:translate-y-0 -z-1 absolute" />
            </div>
            <div className="w-full relative overflow-hidden   flex group items-center justify-center h-[150px] rounded-md bg-neutral-300">
              <VSCodeIcon />
              <div className="w-full h-full bg-neutral-400 transform translate-y-[100%] transition-all duration-500 group-hover:translate-y-0 -z-1 absolute" />
            </div>
            <div className="w-full relative overflow-hidden   flex group items-center justify-center h-[150px] rounded-md bg-neutral-300">
              <TeslaIcon />
              <div className="w-full h-full bg-neutral-400 transform translate-y-[100%] transition-all duration-500 group-hover:translate-y-0 -z-1 absolute" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Collaborations;
