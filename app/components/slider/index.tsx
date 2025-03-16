"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useProjectContext } from "../../context/projectContext";
import data from "../../../data.json";
import SelectedDetails from "../selected-details";

const Slider = () => {
  const { current, setCurrent, setProject } = useProjectContext();
  const [translate, setTranslate] = useState(0);

  const [clickedImageId, setClickedImageId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    const foundProject = data.find((item) => item.id === id);
    setProject(foundProject || null);
    setClickedImageId(id);
    console.log(foundProject)
    setTimeout(() => setClickedImageId(null), 500); // Regresa a la normalidad después de 0.5s
  };

  useEffect(() => {
    setTranslate(current * 11.2);
  }, [current]);

  return (
    <div className="bg-neutral-300 relative overflow-hidden px-10 h-[100dvh] flex items-center justify-center">
      <div className="flex gap-60 items-end h-[90%] w-full justify-between">
        <div className="flex flex-col w-[20%] gap-7">
          <div className="w-[150px] h-[2px] rounded-full bg-gray-400" />
          <div className="h-[180px] overflow-hidden flex ">
            <p className="text-neutral-200 text-[11em] tracking-tighter leading-none font-extrabold">
              0
            </p>
            <div
              style={{ transform: `translateY(-${translate}em)` }}
              className={`h-full transition-all gap-1 flex flex-col duration-700`}
            >
              {data.map((item) => (
                <div key={item.id} className=" flex items-center justify-center">
                  <p className="text-neutral-200 text-[11em] tracking-tighter  leading-none font-extrabold">
                    {item.id}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex text-xl flex-col gap-2">
            <span className="text-black">{data[current].personal.title}</span>
            <div className="flex flex-col h-[30px] overflow-hidden">
              {data.map((item) => (
                <p
                  key={item.id}
                  style={{ transform: `translateY(-${current * 25}px)` }}
                  className={`text-neutral-600 transition-all duration-700 ${
                    current + 1 === item.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.personal.content}
                </p>
              ))}
            </div>
            <span className="text-black">
              {data[current].professional.title}
            </span>
            <div className="flex flex-col h-[30px] overflow-hidden">
              {data.map((item) => (
                <p
                  key={item.id}
                  style={{ transform: `translateY(-${current * 25}px)` }}
                  className={`text-neutral-600 transition-all duration-700 ${
                    current + 1 === item.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.professional.company}
                </p>
              ))}
            </div>{" "}
            <div className="flex flex-col h-[30px] overflow-hidden">
              {data.map((item) => (
                <p
                  key={item.id}
                  style={{ transform: `translateY(-${current * 25}px)` }}
                  className={`text-neutral-600 transition-all duration-700 ${
                    current + 1 === item.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.professional.position}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="h-full flex w-[80%] relative">
          <div className="w-[15%] px-5 text-neutral-700 flex items-end justify-between h-full">
            <button disabled={current === 0}>
              <ArrowLeftIcon
                onClick={() => setCurrent(current - 1)}
                className="w-10 h-10 cursor-pointer"
              />
            </button>
            <button disabled={current === data.length - 1}>
              <ArrowRightIcon
                onClick={() => setCurrent(current + 1)}
                className="w-10 h-10 cursor-pointer"
              />
            </button>
          </div>
          <div className="flex absolute ml-[15%]  h-full w-[90%] overflow-x-hidden">
            <div
              style={{ transform: `translateX(-${current * 570}px)` }}
              className="flex transition-all duration-700 gap-20 h-full w-full transform -translate-x-[0px]"
            >
              {data.map((item) => (
                <div
                  // onClick={() => setProject(item)}
                  key={item.id}
                  style={{ width: current + 1 === item.id ? "900px" : "500px" }}
                  className="h-full relative transition-all min-w-[500px] duration-700"
                >
                  <Image
                    onClick={() => handleClick(item.id)}
                    src={item.personal.image}
                    alt="slider"
                    fill
                    className={`transition-all duration-300 ${
                      clickedImageId === item.id ? "grayscale scale-95" : ""
                    } object-cover`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SelectedDetails/>
    </div>
  );
};

export default Slider;
