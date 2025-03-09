"use client"
import React, { useLayoutEffect, useRef } from 'react'
import Header from './header'
import Image from 'next/image'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: heroRef.current,
        start: 'top top',
        end: '+=100%',
        scrub: true,
        // markers: true,
      }
    })

    tl.to(heroRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
    })

    return ()=> {
      ScrollTrigger.getAll().forEach(trigger=>{
        trigger.kill()
      })
    }
  },[])

  return (
    <div ref={heroRef} className='w-full h-screen px-10 py-5'>
        <Header/>
        <h1 className='text-[13.1vw] text-  tracking-tighter leading-[225px] font-extrabold uppercase'>Conference</h1>
        <div className='h-[calc(100vh-300px)] w-full relative'>
            <Image src={'/images/galeria.jpg'} alt='hero' fill className='object-cover'/>
        </div>
        <div className='flex uppercase mt-5 items-center justify-between'>
            <p>instagram</p>
            <div className='flex items-center gap-x-32'>
                <p>04/05.10</p>
                <p>Opening 11am</p>
            </div>
        </div>
    </div>
  )
}

export default Hero