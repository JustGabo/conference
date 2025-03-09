import React from "react";

const Speakers = () => {
  return (
    <div className="h-[50dvh] px-10 w-full justify-center items-center bg-neutral-300 py-20 text-black flex">
      <div className="flex w-full">
        <div className="w-1/2 h-full ">
          <p className="text-xl text-neutral-600">Speakers</p>
        </div>
        <div className="w-1/2 h-full">
          <p className="text-2xl text-neutral-600 w-[80%]">
            Some of the most inspiring creatives will share their successes,
            failures, processes, and experiences. We&apos;re beyond the excited
            to bring you these stories to help sharpen your craft and push you
            further.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
