import React from "react";

const Schedule = () => {
  return (
    <div className="h-[50dvh] px-10 w-full justify-center items-center bg-black py-20 flex">
      <div className="flex w-full">
        <div className="w-1/2 h-full ">
          <p className="text-xl text-neutral-500">Schedule</p>
        </div>
        <div className="w-1/2 h-full">
          <p className="text-3xl text-neutral-500 w-[80%]">
            Three sessions led by masters of their craft will give you a <span className="text-neutral-200">deep dive</span> into creative skills, illustration, <span className="text-neutral-200">product design</span> and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
