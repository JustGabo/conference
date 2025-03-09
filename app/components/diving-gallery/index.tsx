import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const DivingGallery = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const divRef2 = useRef<HTMLDivElement>(null);
  const divRef3 = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
    });

    tl.to(divRef.current, {
      scale: 4,
    },0).to(divRef2.current, {
      scale: 4,
    },0).to(divRef3.current, {
      scale: 4,
    },0);

    gsap.to(footerRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: mainRef.current,
        start: "bottom 10%",
        // markers: true,
      },
    });



    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <div className="w-full h-[200dvh] bg-neutral-900 relative">
      <div ref={mainRef} className="sticky top-0 w-full h-screen">
        <div className="w-full overflow-hidden h-screen relative">
          <div
            ref={divRef}
            className="w-[25%] h-full absolute left-[50%] transform -translate-x-1/2 top-0"
          >
            <div className="w-full h-full relative">
              <Image
                className="object-cover top-0 h-[30%] w-full absolute"
                src="/images/lake.avif"
                alt="Diving Gallery"
                width={300}
                height={300}
              />

              <Image
                className="object-cover top-[35%] h-[30%] w-full absolute"
                src="/images/lake.avif"
                alt="Diving Gallery"
                width={300}
                height={300}
              />

              <Image
                className="object-cover top-[70%] h-[30%] w-full absolute"
                src="/images/lake.avif"
                alt="Diving Gallery"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div
            ref={divRef2}
            className="w-[25%] h-full absolute left-[50%] transform -translate-x-1/2 top-0"
          >
            <div className="w-full h-full relative">
              <Image
                className="object-cover top-0 right-[150%] h-[30%] w-full absolute"
                src="/images/lake.avif"
                alt="Diving Gallery"
                width={300}
                height={300}
              />

              <Image
                className="object-cover top-[35%]  right-[150%] h-[30%] w-full absolute"
                src="/images/lake.avif"
                alt="Diving Gallery"
                width={300}
                height={300}
              />

              <Image
                className="object-cover top-[70%] right-[150%] h-[30%] w-full absolute"
                src="/images/lake.avif"
                alt="Diving Gallery"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div
            ref={divRef3}
            className="w-[25%] h-full absolute left-[50%] transform -translate-x-1/2 top-0"
          >
            <div className="w-full h-full relative">
              <Image
                className="object-cover top-0 left-[150%] h-[30%] w-full absolute"
                src="/images/lake.avif"
                alt="Diving Gallery"
                width={300}
                height={300}
              />

              <Image
                className="object-cover top-[35%] left-[150%]  h-[30%] w-full absolute"
                src="/images/lake.avif"
                alt="Diving Gallery"
                width={300}
                height={300}
              />

              <Image
                className="object-cover top-[70%] left-[150%] h-[30%] w-full absolute"
                src="/images/lake.avif"
                alt="Diving Gallery"
                width={300}
                height={300}
              />
            </div>
          </div>

        <div ref={footerRef} className="w-[40%] opacity-0 h-[10%] absolute bottom-0 left-[60%] bg-red-300">
          
        </div>
        </div>
      </div>
    </div>
  );
};

export default DivingGallery;
