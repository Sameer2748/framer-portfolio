"use client";
import { div } from 'motion/react-client'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import Link from 'next/link';
import { Project, projects as defaultProps } from "@/Constants/Projects"
import SectionHeading from './Section-Heading';

const Projects = ({ Projects = defaultProps, grid }: { Projects?: Project[], grid?: number }) => {

    return (
        <div className='border-y border-neutral-100 my-4 px-4 py-4 shadow-minimal-inner dark:shadow-none dark:border-woodsmoke-700' id='projects'>
            <SectionHeading delay={0.1} >
                I aim to create meaningful software that reaches and helps millions.
            </SectionHeading>
            <div className={`grid grid-cols-1 ${grid === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-4 py-4`}>
                {
                    Projects.map((item, idx) => (
                        <Link href={item.href} key={idx}>
                            <motion.div
                                className="group relative flex flex-col justify-between h-full bg-white dark:bg-[#27272a] rounded-xl shadow  transition duration-200 hover:shadow-lg"
                                initial={{ opacity: 0, filter: "blur(10px)", y: 100 }}
                                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                            >
                                <Image
                                    src={item.src}
                                    alt="project image"
                                    width={300}
                                    height={grid ? 300 : 280}
                                    className={`w-full ${grid === 2 ? "h-60" : "h-50"}  object-fill rounded-xl group-hover:scale-[1.02] transition duration-200`}
                                />
                                <div className="mt-4 px-4 pb-2">
                                    <h2 className="text-black dark:text-white font-medium tracking-tight z-20 dark:text-woodsmoke-200 ">{item.title}</h2>
                                    <p className="mt-1 text-sm text-neutral-500 dark:text-woodsmoke-400 ">{item.description.slice(0,100)}...</p>
                                </div>
                            </motion.div>

                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects
