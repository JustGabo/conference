import React from "react";
import AppleIcon from "../svgs/apple";
import XboxIcon from "../svgs/xbox";
import DiscordIcon from "../svgs/discord";
import NikeIcon from "../svgs/nike";
import VSCodeIcon from "../svgs/vsCode";
import TeslaIcon from "../svgs/tesla";

const Collaborations = () => {
  return (
    <div className=" px-10 w-full justify-center items-center bg-neutral-300 py-20 text-black flex">
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
            <div className="w-full flex items-center justify-center h-[150px] rounded-md bg-neutral-400">
              <AppleIcon />
            </div>
            <div className="w-full flex items-center justify-center h-[150px] rounded-md bg-neutral-400">
              <NikeIcon />
            </div>
            <div className="w-full flex items-center justify-center h-[150px] rounded-md bg-neutral-400">
              <XboxIcon />
            </div>
            <div className="w-full flex items-center justify-center h-[150px] rounded-md bg-neutral-400">
              <DiscordIcon />
            </div>
            <div className="w-full flex items-center justify-center h-[150px] rounded-md bg-neutral-400">
              <VSCodeIcon />
            </div>
            <div className="w-full flex items-center justify-center h-[150px] rounded-md bg-neutral-400">
              <TeslaIcon />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Collaborations;
