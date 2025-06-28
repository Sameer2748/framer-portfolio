import { getAllBlogs } from '@/utils/mdx'
import { div } from 'motion/react-client'
import { Link } from 'next-view-transitions'
import React from 'react'
import SectionHeading from './Section-Heading'
import MotionDiv from './motion-div'

const HomeBlogs = async () => {
    const allBlogs = await getAllBlogs()
    const truncate = (str: string, length: number) => {
        return str.length > length ? str.substring(0, length) + "..." : str;
    }



    return (
        <div className='px-4'>
            <SectionHeading className='pb-4' delay={0.1}>I love writing things down</SectionHeading>

            <div className='flex flex-col gap-8'>
                {
                    allBlogs.slice(0, 3).map((blog, idx) => (
                        <MotionDiv key={idx} initial={{ opacity: 0, filter: "blur(10px)", y: 10 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.3, ease: "easeInOut", delay: idx * 0.1 }}>
                            <Link href={`/blog/${blog.slug}`} >
                                <div className="flex  items-center justify-between ">
                                    <h2 className="text-primary text-2xl font-bold tracking-tight md:text-4xl dark:text-woodsmoke-300 ">{blog.title}</h2>
                                    {blog.date && (
                                        <p className="text-secondary text-sm md:text-sm dark:text-woodsmoke-400">
                                            {new Date(blog.date).toLocaleDateString("en-us", {
                                                weekday: "long",
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </p>
                                    )}
                                </div>
                                <p className="text-secondary max-w-lg  pt-4 text-sm md:text-sm dark:text-woodsmoke-400 ">{truncate(blog.description || "", 120)} </p>
                            </Link>
                        </MotionDiv>
                    ))
                }
            </div>
        </div>
    )
}

export default HomeBlogs
