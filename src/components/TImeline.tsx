"use client";
import React, { useRef } from 'react'
import { easeInOut, motion, useInView } from "motion/react"
import { IconCircleCheckFilled } from "@tabler/icons-react"


type Data = {
    title: string;
    content: {
        title: string;
        description?: string | React.ReactNode;
    }[];
};

const Timeline = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.6 });
    const data: Data[] = [
        {
            title: "June 2025 - current",
            content: [
              {
                title: "Full Stack Developer at Jan Suraaj Party (JSP)",
                description: "Managing web and DevOps, using AWS, Next.js, Docker, PostgreSQL, TypeScript, and TailwindCSS."
              }
            ]
          },
        {
            title: "Jan 2025 - May 2025",
            content: [
                {
                    title: "Web & Admin Management at BaracksBuddy",
                    description: "Worked for 5 months in 2024. Managed website (Next.js) and admin management for live class features, using AWS."
                  }
            ]
          },
        {
            title: "June 2024 - June 2025",
            content: [
                {
                    title: "Full Stack Developer at StoryTent",
                    description: "Managed web app and DevOps, using React, Next.js, React Native, TailwindCSS, AWS, and PostgreSQL."
                  }
            ]
          },
       
    ];

    return (
        <div ref={ref} className="py-4 my-6 px-4 shadow-minimal-inner dark:shadow-none dark:border-woodsmoke-800  border-y border-neutral-100 ">
            {
                data.map((year, index) => (
                    <div  key={year.title} className='mb-4 '>
                        <motion.h2 animate={{ filter: isInView ? 'blur(0px)' : 'blur(10px)', opacity: isInView ? 1 : 0 }} transition={{ ease: easeInOut, duration: 0.3, delay: 0.1 * index }} className='font-bold text-black px-2 py-0.5 mb-2 rounded-md shadow-box w-fit dark:text-woodsmoke-200 '>
                            {year.title}
                        </motion.h2>
                        <div className="flex flex-col gap-4">
                            {
                                year.content.map((item, idx) => (
                                    <div key={idx} className='pl-4'>
                                        <Steps isInView={isInView} idx={idx}>
                                        <motion.h3 animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -10 }} transition={{ duration: 0.3, ease: easeInOut, delay: 0.2 * idx }} className='text-neutral-600 dark:text-woodsmoke-400'>{item.title}</motion.h3>
                                        </Steps>
                                        {
                                            item.description && 
                                            <motion.p animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -10 }} transition={{ duration: 0.3, ease: easeInOut, delay: 0.3  * idx }} className='text-neutral-400 text-sm pt-2 pl-4 dark:text-woodsmoke-400'>{item.description}</motion.p>
                                        }
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                ))
            }
        </div>
    );
};

export default Timeline;


const Steps = ({ className, children , isInView, idx}: { className?: string, children?: React.ReactNode, isInView: boolean, idx: number }) => {
    return <motion.div animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -10 }} transition={{ duration: 0.3, ease: easeInOut, delay: 0.2 * idx }} className="flex items-start gap-2 ">
        <IconCircleCheckFilled className='h-4 w-4 mt-1 text-neutral-500' />
        {children}
    </motion.div>
}