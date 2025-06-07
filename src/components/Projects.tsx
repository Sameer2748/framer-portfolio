"use client";
import { div } from 'motion/react-client'
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"
import Link from 'next/link';

const Projects = () => {
    const Projects=[
        {
            title: "demo",
            src:"https://imgs.search.brave.com/vbkOZo6k6tkLv0s7KiQZBaokzMdoRyOduc0Us-2ydSY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9saDct/dXMuZ29vZ2xldXNl/cmNvbnRlbnQuY29t/L2RvY3N6L0FEXzRu/WGZPazVkX0pxb1FW/LWxYQzZvLTdySGIx/a1Y4X2p1NnJody00/YUstNzl1LXR3VXdF/SHNSekpBZml6cGhs/MDVWUUU5ak44UlVu/VFl6NmhkUjk2ZzJ3/UlFkZTJlUGEzT3NX/T1VnZk80VDRoNElS/SGZLRDRnSnVHcnFT/NlRjNHRwTnBpN2g2/ZU01OUduWE9BbVc4/dUNqdXduZnhkZ1E_/a2V5PTFsbmJuOC1B/ejJxeW9qc25aRnAx/RFE.jpeg",
            description:"vsdbvsabvasbvbasbasbabasbasbasb",
            href:"#"
        },
        {
            title: "demo",
            src:"https://imgs.search.brave.com/vbkOZo6k6tkLv0s7KiQZBaokzMdoRyOduc0Us-2ydSY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9saDct/dXMuZ29vZ2xldXNl/cmNvbnRlbnQuY29t/L2RvY3N6L0FEXzRu/WGZPazVkX0pxb1FW/LWxYQzZvLTdySGIx/a1Y4X2p1NnJody00/YUstNzl1LXR3VXdF/SHNSekpBZml6cGhs/MDVWUUU5ak44UlVu/VFl6NmhkUjk2ZzJ3/UlFkZTJlUGEzT3NX/T1VnZk80VDRoNElS/SGZLRDRnSnVHcnFT/NlRjNHRwTnBpN2g2/ZU01OUduWE9BbVc4/dUNqdXduZnhkZ1E_/a2V5PTFsbmJuOC1B/ejJxeW9qc25aRnAx/RFE.jpeg",
            description:"vsdbvsabvasbvbasbasbabasbasbasb",
            href:"#"
        },
        {
           title: "demo",
           src:"https://imgs.search.brave.com/vbkOZo6k6tkLv0s7KiQZBaokzMdoRyOduc0Us-2ydSY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9saDct/dXMuZ29vZ2xldXNl/cmNvbnRlbnQuY29t/L2RvY3N6L0FEXzRu/WGZPazVkX0pxb1FW/LWxYQzZvLTdySGIx/a1Y4X2p1NnJody00/YUstNzl1LXR3VXdF/SHNSekpBZml6cGhs/MDVWUUU5ak44UlVu/VFl6NmhkUjk2ZzJ3/UlFkZTJlUGEzT3NX/T1VnZk80VDRoNElS/SGZLRDRnSnVHcnFT/NlRjNHRwTnBpN2g2/ZU01OUduWE9BbVc4/dUNqdXduZnhkZ1E_/a2V5PTFsbmJuOC1B/ejJxeW9qc25aRnAx/RFE.jpeg",
           description:"vsdbvsabvasbvbasbasbabasbasbasb",
           href:"#"
       },
        {
            title: "demo",
            src:"https://imgs.search.brave.com/vbkOZo6k6tkLv0s7KiQZBaokzMdoRyOduc0Us-2ydSY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9saDct/dXMuZ29vZ2xldXNl/cmNvbnRlbnQuY29t/L2RvY3N6L0FEXzRu/WGZPazVkX0pxb1FW/LWxYQzZvLTdySGIx/a1Y4X2p1NnJody00/YUstNzl1LXR3VXdF/SHNSekpBZml6cGhs/MDVWUUU5ak44UlVu/VFl6NmhkUjk2ZzJ3/UlFkZTJlUGEzT3NX/T1VnZk80VDRoNElS/SGZLRDRnSnVHcnFT/NlRjNHRwTnBpN2g2/ZU01OUduWE9BbVc4/dUNqdXduZnhkZ1E_/a2V5PTFsbmJuOC1B/ejJxeW9qc25aRnAx/RFE.jpeg",
            description:"vsdbvsabvasbvbasbasbabasbasbasb",
            href:"#"
        },
    //     {
    //         title: "demo",
    //         src:"https://imgs.search.brave.com/HHis-P80EUzPZD4BrVu6PRSEELKA_VOlUpXRY_iHULY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/LmJpZ2Fzc3Bob3Rv/cy5jb20vZGIvYi9k/YmJiMDhjNjEuanBn",
    //         description:"vsdbvsabvasbvbasbasbabasbasbasb",
    //         href:"#"
    //     },
    //     {
    //         title: "demo",
    //         src:"https://imgs.search.brave.com/8xwgwANFkeDdjpGxHnWu5kATMeR-SiFSxQ13HfVgRdg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/LnJvdW5kYXNzcGlj/cy5jb20vZWMvNy9l/YzczMjNiODAuanBn",
    //         description:"vsdbvsabvasbvbasbasbabasbasbasb",
    //         href:"#"
    //     },
    //     {
    //        title: "demo",
    //        src:"https://imgs.search.brave.com/8xwgwANFkeDdjpGxHnWu5kATMeR-SiFSxQ13HfVgRdg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/LnJvdW5kYXNzcGlj/cy5jb20vZWMvNy9l/YzczMjNiODAuanBn",
    //        description:"vsdbvsabvasbvbasbasbabasbasbasb",
    //        href:"#"
    //    },
    //     {
    //         title: "demo",
    //         src:"https://cdn1.roundasspics.com/68/1/681e4b1a7.jpg",
    //         description:"vsdbvsabvasbvbasbasbabasbasbasb",
    //         href:"#"
    //     },
    ]
    return (
        <div className='py-10' id='projects'>
            <p className="text-secondary max-w-lg text-sm md:text-base pt-4">
                I aim to create meaningful software that reaches and helps millions.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-4 '>
                {
                    Projects.map((item, idx)=>(
                        <Link href={item.href}>
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
