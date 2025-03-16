import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const text =
  "Some of the most inspiring creatives will share their successes, failures, processes, and experiences. We're beyond excited to bring you these stories to help sharpen your craft and push you further.";

const Speakers = () => {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    if (!textRef.current) return;
    //@ts-expect-error this error is not important
    const lines = textRef.current.querySelectorAll("span");

    gsap.fromTo(
      lines,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3, // Tiempo entre cada línea
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 70%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="h-[50dvh] px-10 w-full justify-center items-center bg-neutral-300 py-20 text-black flex">
      <div className="flex w-full">
        <div className="w-1/2 h-full">
          <p className="text-xl text-neutral-600">Speakers</p>
        </div>
        <div className="w-1/2 h-full">
          <p className="text-2xl text-neutral-600 w-[80%]" ref={textRef}>
            {text.split(" ").map((word, index) => (
              <span key={index} className="inline-block mr-[6px] opacity-0">
                {word}{" "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
