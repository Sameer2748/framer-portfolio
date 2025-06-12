"use client";
import { div } from 'motion/react-client'
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"
import Link from 'next/link';
import {Project, projects as defaultProps} from "@/Constants/Projects"
import SectionHeading from './Section-Heading';

const Projects = ({Projects = defaultProps}:{Projects: Project[]}) => {
    
    return (
        <div className='py-10' id='projects'>
            <SectionHeading delay={0.1} >
                I aim to create meaningful software that reaches and helps millions.
            </SectionHeading>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-4 '>
                {
                    Projects.map((item, idx)=>(
                        <Link href={item.href} key={idx}>
                        <motion.div className='group relative h-64 mb-4' initial={{opacity:0, filter: "blur(10px)", y:100}} whileInView={{opacity:1, filter: "blur(0px)", y:0}} transition={{duration: 0.3,delay: idx * 0.1 }} key={idx}>
                            <Image src={item.src} alt="project image" width={300} height={300} className='w-full h-60  aspect-square rounded-xl object-cover group-hover:scale-[1.02] transition duration-200' />
                            <h2 className='text-black dark:text-white font-medium mt-2 tracking-tight z-20 '>{item.title}</h2>
                            <p className='max-w-sm text-sm text-neutral-500 dark:text-neutral-400'>{item.description}</p>
                        </motion.div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects
