import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
    <Container className='flex justify-between px-10 py-3 border-neutral-100 bg-woodsmoke-100'>
    <p className='text-xs text-neutral-400'>Built with love by Sameer Rao</p>  
    <div className='flex items-center justify-center gap-4 '>
        <Link className='h-4 w-4 text-neutral-500 hover:text-neutral-700  ' href="https://x.com/100x_Sam"><IconBrandX/></Link>
        <Link className='h-4 w-4 text-neutral-500 hover:text-neutral-700  ' href="https://github.com/Sameer2748"><IconBrandGithub/></Link>
        <Link className='h-4 w-4 text-neutral-500 hover:text-neutral-700  ' href="https://www.linkedin.com/in/sameer-rao-7576261ab/"><IconBrandLinkedin/></Link>
    </div>
    </Container>
  )
}

export default Footer
