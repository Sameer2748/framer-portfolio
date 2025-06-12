import React from 'react'
import { testimonials } from '@/Constants/Testimonails'
import Marquee from 'react-fast-marquee'
import SectionHeading from './Section-Heading'

const Testimonials = () => {
    
  return (
    <div className='py-10'>
        <SectionHeading delay={0.8} className='pb-4'>
        I'm a software developer with passion for building scalable and effecient systems.
        </SectionHeading>
        <div className="flex gap-10 py-4 mask-r-from-80% mask-l-from-80%">
      <Marquee speed={20} pauseOnHover={true}>
        {
            testimonials.map((item, idx)=>(
                <TestimonialCard key={idx} quote={item.quote} name={item.name} avatar={item.avatar} />
            ))
        }
      </Marquee>
        </div>
    </div>
  )
}

const TestimonialCard = ({quote, name, avatar}:{quote:string, name:string, avatar: string})=>{
return (
    <div className=" gap-4 shadow-box flex flex-col  justify-between w-full h-60 max-w-60 mx-4 my-2 p-4 rounded-xl hover:shadow-md transition duration-300  ">
        <h1 className='text-sm text-neutral-700'>{quote}</h1>
        <div className='flex items-center gap-4 '>
            <img src={avatar} className='size-6 rounded-full object-cover ' alt="" />
            <p className='text-sm text-neutral-500'>{name}</p>
        </div>
    </div>
)
}
export default Testimonials
