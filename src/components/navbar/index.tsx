"use client";
import React, { useState } from 'react'
import Container from '../Container'
import Image from 'next/image'

import {easeInOut, motion, useMotionValueEvent, useScroll, useTransform} from "motion/react"
import { Link } from 'next-view-transitions';

const Navbar = () => {
    const navItems = [
        {
            title:"About",
            href:"/about"
        },
        {
            title:"Projects",
            href:"/projects"
        },
        {
            title:"Contact",
            href:"/contact"
        },
        {
            title:"Blog",
            href:"/blog"
        },
        
    ]

    const [hovered, setHovered] = useState<number | null>(null)
    const [scrolled, setscrolled] = useState<boolean>(false)

    const {scrollY} = useScroll()

    const y  = useTransform(scrollY, [0, 100], [0,10]);
    const width  = useTransform(scrollY, [0, 100], ["65", "50%"]);


    useMotionValueEvent(scrollY, "change", (latest)=>{
        if(latest> 20){
            setscrolled(true);
        }else[
            setscrolled(false)
        ]
        
    })



  return (
    <Container className=''>
      <motion.nav 
      
      style={{
        boxShadow: scrolled ? "var(--shadow-box)": "none",
        width,
        y
      }}
      transition={{
        duration: 0.3 ,
        ease:'linear'
      }}
      className='fixed top-0 inset-x-0 left-0 z-50  max-w-4xl mx-auto flex items-center justify-between p-2 rounded-3xl bg-white'>
        <Link href="/">
        <Image className='w-12 h-13 rounded-full ' src="/avatar.png" alt="image" width={100} height={100} />
        </Link>
        <div className='flex items-center'>
            {
                navItems.map((item, idx)=>(
                    <Link className='text-sm relative px-2 py-1' href={item.href} key={idx} onMouseEnter={()=> setHovered(idx)} onMouseLeave={()=> setHovered(null)}>
                        {hovered === idx &&(
                            <motion.span layoutId="hovered-span" className='absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800'/> 
                        )}
                        <span className='relative z-10'>
                    {item.title}
                        </span>
                    </Link>
                ))
            }
        </div>
      </motion.nav>
    </Container>
  )
}

export default Navbar
