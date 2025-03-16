import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const Agenda = () => {
  const mainContainer = useRef(null);
  const practicalSkills = useRef(null);
  const pointOfView = useRef(null);
  const firstImageLineContainer = useRef(null);
  const secondImageLineContainer = useRef(null);
  const firstImage = useRef(null);
  const secondImage = useRef(null);

  const linesRef = useRef(null)

  const animationConf = {
    duration: 1,
    ease: "power2.inOut",
  }

  useLayoutEffect(() => {

    if (!linesRef.current) return;
    //@ts-expect-error this error is not important
    const lines = linesRef.current.querySelectorAll(".line")

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
          trigger: linesRef.current,
          start: "top 90%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "top top",
        end: "bottom top",
        // scrub: true,
        // markers: true,
      },
    });

    tl.to(
      firstImageLineContainer.current,
      {
        gap: "12dvw",
        ...animationConf,
      },
      0
    )
      .to(
        secondImageLineContainer.current,
        {
          gap: "12dvw",
          ...animationConf,
        },
        0
      )
      .to(
        firstImage.current,
        {
          opacity: 1,
          ...animationConf,
        },
        1
      )
      .to(
        secondImage.current,
        {
          opacity: 1,
          ...animationConf,
        },
        1
      )
      .to(
        practicalSkills.current,
        {
          color: "#d4d4d4",
          ...animationConf,
        },
        1
      )
      .to(pointOfView.current, {
        color: "#d4d4d4",
        ...animationConf,
      },1);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <div ref={mainContainer} className="h-[150dvh] relative w-full ">
      <div className="w-full h-screen px-10 text-neutral-600 sticky top-0 flex flex-col items-center justify-center gap-10">
        <p className=" text-sm uppercase font-semibold">Agenda</p>
        <div ref={linesRef} className="flex flex-col text-[4.4dvw] leading-none mx-auto text-center  gap-2 w-[85dvw] items-center justify-between">
          <p className="line">In two days, you&apos;ll get tons of useful</p>
          <div
            ref={firstImageLineContainer}
            className="flex line gap-4 transition-all relative"
          >
            <p>
              information and{" "}
              <span ref={practicalSkills} className="text-neutral-">
                practical skills
              </span>{" "}
            </p>
            <span>from</span>
            <Image
              src={"/images/galeria.jpg"}
              alt="from"
              width={100}
              height={100}
              ref={firstImage}
              className="w-[10dvw] absolute opacity-0 transition-all h-[50px] top-[20%] right-[10dvw] object-cover"
            />
          </div>
          <p className="line">professional mentors about setting goals,</p>
          <p className="line">developing imagination, forming your own </p>
          <div
            ref={secondImageLineContainer}
            className="flex line relative transition-all gap-4"
          >
            <span ref={pointOfView} className="text-neutral-">
              point of view,
            </span>{" "}
            <p>and also setting up a</p>
            <Image
              src={"/images/galeria.jpg"}
              alt="from"
              width={100}
              ref={secondImage}
              height={100}
              className="w-[10dvw] absolute opacity-0 transition-all h-[50px] top-[20%] left-[26dvw] object-cover"
            />
          </div>
          <p className="line">workflow.</p>
        </div>
        <ArrowDown className="w-12 h-12"/>
      </div>
    </div>
  );
};

export default Agenda;
