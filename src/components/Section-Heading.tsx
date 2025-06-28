"use client";
import React, { Children } from 'react'
import {motion} from "motion/react"
import { cn } from '@/lib/utils';

const SectionHeading = ({children, delay, className}:{children: string, delay:number, className?: string}) => {
  return (
    <motion.h2  className={cn(" max-w-lg text-sm  md:text-base pt-4 font-normal dark:text-woodsmoke-200", className)}>
      {children.split(" ").map((word, idx)=>(
        <motion.span initial={{opacity:0, y:5, filter: "blur(10px)"}} viewport={{once:true}} whileInView={{opacity:1, y:0, filter: "blur(0px)"}} transition={{duration: 0.3, ease:"easeInOut", delay: delay + idx * 0.05}} key={word+idx} className='inline-block'>
            {word}&nbsp;
        </motion.span>
      ))} 
    </motion.h2>
  )
}

export default SectionHeading
