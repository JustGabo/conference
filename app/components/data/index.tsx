import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    id: 1,
    ubication: {
      floor: "2nd floor",
      room: "Conference Hall",
    },
    objetive: {
      title: "Objective",
      action: "Introduction/",
      description: "Lecture & Workshop",
    },
    time: {
      date: "04.10.2021",
      duration: "11:00 - 12:00 AM",
      Break: "12:30 - 13:00 AM",
    },
    description: {
      title: "Audrey Flores /UX/UI designer",
      content:
        "Sometimes finding lifetime objective can be really challenging. Visit my speech to get valuable practices of setting goals, that will force you for a long time.",
    },
  },
  {
    id: 2,
    ubication: {
      floor: "2nd floor",
      room: "Conference Hall",
    },
    objetive: {
      title: "Objective",
      action: "Introduction/",
      description: "Lecture & Workshop",
    },
    time: {
      date: "04.10.2021",
      duration: "11:00 - 12:00 AM",
      Break: "12:30 - 13:00 AM",
    },
    description: {
      title: "Audrey Flores /UX/UI designer",
      content:
        "Sometimes finding lifetime objective can be really challenging. Visit my speech to get valuable practices of setting goals, that will force you for a long time.",
    },
  },
  {
    id: 3,
    ubication: {
      floor: "2nd floor",
      room: "Conference Hall",
    },
    objetive: {
      title: "Objective",
      action: "Introduction/",
      description: "Lecture & Workshop",
    },
    time: {
      date: "04.10.2021",
      duration: "11:00 - 12:00 AM",
      Break: "12:30 - 13:00 AM",
    },
    description: {
      title: "Audrey Flores /UX/UI designer",
      content:
        "Sometimes finding lifetime objective can be really challenging. Visit my speech to get valuable practices of setting goals, that will force you for a long time.",
    },
  },
];

const Data = () => {
  const containerRef = useRef(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    gsap.fromTo(
      itemsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="px-10 flex flex-col pb-32 gap-44 bg-black">
      {data.map((item, index) => (
        <div
          key={item.id}
          ref={el => { itemsRef.current[index] = el }}
          className="flex justify-between border-t border-neutral-200 py-10 items-start opacity-0"
        >
          <div className="flex flex-col gap-1 w-[20%]">
            <p>{item.ubication.floor}</p>
            <p className="text-neutral-400">{item.ubication.room}</p>
          </div>
          <div className="flex flex-col gap-1 w-[20%]">
            <p>{item.objetive.title}</p>
            <p className="text-neutral-400">{item.objetive.action}</p>
            <p className="text-neutral-400">{item.objetive.description}</p>
          </div>
          <div className="flex flex-col gap-1 w-[20%]">
            <p>{item.time.date}</p>
            <p className="text-neutral-400">{item.time.duration}</p>
            <p className="text-neutral-400">Break {item.time.Break}</p>
          </div>
          <div className="flex flex-col gap-1 w-[40%]">
            <p>{item.description.title}</p>
            <p className="text-neutral-400">{item.description.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Data;
