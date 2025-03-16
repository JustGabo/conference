"use client";
import Lenis from "lenis";
import React, { useEffect} from "react";
import Hero from "./hero";
import Agenda from "./agenda";
import Speakers from "./speakers";
import Slider from "./slider";
import Schedule from "./schedule";
import Data from "./data";
import Footer from "./footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  return (
    <div className="">
      <Hero />
      <Agenda />
      <Speakers />

      <Slider />
      <Schedule />
      <Data />
      <Collaborations />
      <Footer />
    </div>
  );
};

export default MainPage;
