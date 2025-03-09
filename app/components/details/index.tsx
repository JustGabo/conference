import { useProjectContext } from "@/app/context/projectContext";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Details = () => {
  const { project } = useProjectContext();
  const [isMounted, setIsMounted] = useState(false);
  const [bottomBar, setBottomBar] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setBottomBar(true);
    setTimeout(() => {
      setBottomBar(false);
    }, 700);
  }, []);

  return (
    <div className="w-full flex flex-col relative bg-red-">
      <div className="w-full relative h-[100dvh] overflow-hidden">
        <div
          style={{ transform: `translateY(${bottomBar ? "0" : "100dvh"})` }}
          className="h-[75dvh] absolute z-50 bottom-0 left-0 transition-all ease-in-out duration-1000 bg-black w-full"
        ></div>
      </div>
      <div
        style={{ transform: `translateY(${isMounted ? "0" : "-100dvh"})` }}
        className="h-[100dvh] absolute top-0 left-0 transition-all ease-in-out duration-1000  w-full"
      >
        <div>
          <h1 className="text-[13.1vw] px-10  tracking-tighter leading-[225px] font-extrabold uppercase">
            {/* {project?.personal.content} */}
            Conference
          </h1>
          <div className="h-[calc(100vh-275px)] w-full relative">
            <Image
              src={project?.personal.image || "/images/people/girl2.jpg"}
              alt="hero"
              fill
              className="object-cover px-10"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-20 pt-5">
        {/* <div>
        <h1 className="text-[13.1vw] px-10  tracking-tighter leading-[225px] font-extrabold uppercase">
          Conference
        </h1>
        <div className="h-[calc(100vh-275px)] w-full relative">
          <Image
            src={"/images/people/girl2.jpg"}
            alt="hero"
            fill
            className="object-cover px-10"
          />
        </div>
      </div> */}
        <div className="flex items-start justify-between px-10">
          <div className="flex items-center gap-3 w-[40%]">
            <div className="w-10 h-10 rounded-full bg-neutral-500"></div>
            <div className="w-10 h-10 rounded-full bg-neutral-500"></div>
            <div className="w-10 h-10 rounded-full bg-neutral-500"></div>
          </div>
          <div className="flex gap-20 w-[60%]">
            <div className="flex flex-col gap-3 w-[30%]">
              <div className="flex flex-col gap-1">
                <span>Origin</span>
                <p className="text-neutral-500">New York</p>
              </div>
              <div className="flex flex-col gap-1">
                <span>Company & Position</span>
                <p className="text-neutral-500">DesignProm, UI/UX Designer</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 w-[70%]">
              <span>Objective</span>
              <p className="text-neutral-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                quae iure non fugit explicabo, deserunt optio est cumque iste
                eveniet praesentium molestias minus unde. Corrupti maiores quos
                aliquid? Officia esse repellat eaque voluptatibus temporibus
                pariatur beatae cumque dolorum, autem commodi. Consequuntur
                aperiam debitis eos veritatis obcaecati quasi dolorum sed
                asperiores!
              </p>
            </div>
          </div>
        </div>
        <div className=" px-10 w-full justify-center items-center bg-neutral-300 py-20 text-black flex">
          <div className="flex w-full">
            <div className="w-1/2 h-full ">
              <p className="text-xl text-neutral-600">Speakers</p>
            </div>
            <div className="w-1/2 h-full flex flex-col gap-32">
              <p className="text-2xl text-neutral-600 w-[80%]">
                Some of the most inspiring creatives will share their successes,
                failures, processes, and experiences. We&apos;re beyond the
                excited to bring you these stories to help sharpen your craft
                and push you further.
              </p>

              <section className="grid grid-cols-3 gap-3">
                <div className="w-full h-[150px] rounded-md bg-neutral-400"></div>
                <div className="w-full h-[150px] rounded-md bg-neutral-400"></div>
                <div className="w-full h-[150px] rounded-md bg-neutral-400"></div>
                <div className="w-full h-[150px] rounded-md bg-neutral-400"></div>
                <div className="w-full h-[150px] rounded-md bg-neutral-400"></div>
                <div className="w-full h-[150px] rounded-md bg-neutral-400"></div>
              </section>
            </div>
          </div>
        </div>
        <div className="h-[50dvh] px-10 w-full justify-center items-center bg-black py-20 flex">
          <div className="flex w-full">
            <div className="w-1/2 h-full ">
              <p className="text-xl text-neutral-500">Schedule</p>
            </div>
            <div className="w-1/2 h-full">
              <p className="text-3xl text-neutral-500 w-[80%]">
                Three sessions led by masters of their craft will give you a{" "}
                <span className="text-neutral-200">deep dive</span> into
                creative skills, illustration,{" "}
                <span className="text-neutral-200">product design</span> and
                more.
              </p>
            </div>
          </div>
        </div>
        {/* <div className='flex uppercase mt-5 items-center justify-between'>
            <p>instagram</p>
            <div className='flex items-center gap-x-32'>
                <p>04/05.10</p>
                <p>Opening 11am</p>
            </div>
        </div> */}
      </div>
    </div>
  );
};

export default Details;
