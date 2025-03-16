import React, { useEffect, useState } from "react";
import { useProjectContext } from "../../context/projectContext";
import Image from "next/image";
import DiscordIcon from "../svgs/discord";
import { FacebookIcon, InstagramIcon } from "lucide-react";
const SelectedDetails = () => {
  const [opacity, setOpacity] = useState(0);

  const { project } = useProjectContext();

  useEffect(() => {
    setOpacity(0);
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [project]);

  const name = project?.personal.content.split(" ")

  return (
    <div
      style={{ zIndex: project ? 100 : -100 }}
      className="absolute w-full h-full"
    >
      <div className="relative overflow-hidden w-full h-full">
        <div style={{ transform: project ? "translateY(100dvh)" : "translateY(30%)" }} className="absolute top-0 h-[30dvh] w-full bg-black"/>
        <div style={{ transform: `translateY(-${project ? "0" : "75"}dvh)` }} className="absolute transition-all overflow-hidden duration-500 delay-300 top-0 h-[75dvh] w-full bg-black">
        <div
        className="transition-all duration-500 ease-in-out"
        style={{ opacity: opacity }}
      >
        <div>
          <h1 className="text-[13.1vw] px-10  tracking-tighter text-center leading-[225px] font-extrabold uppercase">
            {/* Conference */}
            {name && name[0]}
          </h1>
          <div className="h-[calc(100vh-275px)] w-full relative">
            <Image
              src={project?.professional.gallery || "/images/people/girl2.jpg"}
              alt="hero"
              fill
              className="object-cover px-10"
            />
          </div>
        </div>
      </div>
        </div>
        <div
          style={{ transform: `translateY(${project ? "0" : "25"}dvh)` }}
          className="h-[25dvh] w-full bg-black absolute bottom-0 transform transition-all duration-500 ease-in-out"
        >
          <div
            style={{ opacity: opacity }}
            className="flex justify-between transition-opacity duration-300 items-center pt-8"
          >
            <div className="flex items-start justify-between px-10">
              <div className="flex items-center gap-3 w-[40%]">
                <div className="w-10 h-10 rounded-full bg-neutral-500 flex items-center justify-center">
                  <DiscordIcon className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-neutral-500 flex items-center justify-center">
                  <FacebookIcon className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-neutral-500 flex items-center justify-center">
                  <InstagramIcon className="w-5 h-5" />
                </div>
              </div>
              <div className="flex gap-20 w-[60%]">
                <div className="flex flex-col gap-3 w-[30%]">
                  <div className="flex flex-col gap-1">
                    <span>Origin</span>
                    <p className="text-neutral-500">{project?.personal.city}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>Company & Position</span>
                    <p className="text-neutral-500">
                      {project?.professional.company} {project?.professional.position}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 w-[70%]">
                  <span>Objective</span>
                  <p className="text-neutral-500">
                    {project?.professional.objective}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedDetails;
