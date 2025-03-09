"use client";
import Lenis from "lenis";
import React, { useEffect, useState } from "react";
// import DivingGallery from "@/app/components/diving-gallery";
// import HorizontalScroll from "./horizontal-scroll";
import Hero from "./hero";
import Agenda from "./agenda";
import Speakers from "./speakers";
import Slider from "./slider";
import Schedule from "./schedule";
import Data from "./data";
import Footer from "./footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Details from "./details";
import { useProjectContext } from "../context/projectContext";
import Collaborations from "./collaborations";
const MainPage = () => {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  const { project } = useProjectContext();
  const [bottomBar, setBottomBar] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (project) {
      setIsMounted(true);
    }

    setBottomBar(true);
    setTimeout(() => {
      setBottomBar(false);
    }, 700);
  }, [project]);

  return (
    <div className="">
      <Hero />
      <Agenda />
      <Speakers />

      <Slider />
      {/* <div className="relative overflow-hidden">
        <div className={`${!project ? "opacity-100" : "opacity-0"}`}>
          <Slider />
        </div>
        <div
          style={{ transform: `translateY(${isMounted ? "0" : "-100dvh"})` }}
          className={`absolute top-0 left-0 w-full z-50 transition-all ease-in-out duration-1000 ${
            project ? "block" : "hidden"
          }`}
        >
          <Details />
        </div>
      </div> */}
      <Schedule />
      <Data />
      <Collaborations />
      <Footer />
      {/* <DivingGallery /> */}
      {/* <HorizontalScroll/> */}
    </div>
  );
};

export default MainPage;
