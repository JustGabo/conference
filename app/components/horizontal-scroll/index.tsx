"use client";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const images = useRef<HTMLDivElement[]>([]); // Array to hold refs for all images

  // Function to assign refs dynamically
  const setImageRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      images.current[index] = el;
    }
  };

  useLayoutEffect(() => {
    const scrollWidth = scrollContainer.current?.scrollWidth ?? 0;
    const windowWidth = window.innerWidth;

    // Timeline for horizontal scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#horizontal-scroll",
        start: "top top",
        end: () => `+=${scrollWidth - windowWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Animate the container
    tl.to(scrollContainer.current, {
      xPercent: -100,
      ease: "none",
    });

    // Parallax effect for each image
    images.current.forEach((image) => {
      if (image) {
        gsap.to(image, {
          // xPercent: -30, // Adjust this for the parallax effect
          transform: "translateX(30dvw)",
          ease: "none",
          scrollTrigger: {
            trigger: scrollContainer.current,
            start: "top top",
            end: () => `+=${scrollWidth - windowWidth}`,
            scrub: true,
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const galleryImages = [
    "/images/lake.avif",
    "/images/lake.avif",
    "/images/lake.avif",
    "/images/lake.avif",
    "/images/lake.avif",
  ];

  return (
    <div id="horizontal-scroll" className="h-screen relative">
      <div
        id="scroll-container"
        className="flex h-full w-[100dvw] gap-10 ml-[20dvw]" // Adjust width for your gallery size
        ref={scrollContainer}
      >
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="  mt-[20dvh] !w-[30dvw] h-[60dvh]  relative"
          >
            <div
              ref={(el) => setImageRef(el, index)} // Assign dynamic refs here
              className="!w-[20dvw] h-[60dvh] relative"
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
