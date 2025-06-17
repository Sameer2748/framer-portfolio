"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaGlobe } from 'react-icons/fa';

// Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import DummySwiper from './DummySwiper';
import { TbBrandGithub, TbBrandLivewire } from 'react-icons/tb';
export interface Project {
  title: string;
  src: string;
  description: string;
  href: string;
  github?: string;
  live?: string;
  images?: string[];
  technologies?: string[];
  tools?: string[];
  features?: string[];
}

const ProjectClient = ({ project}:{project:Project }) => {
    return (
        <div className='px-8'>


            <DummySwiper images={project.images} />
            <div className='flex gap-4 jsutify-start'>

                <div className="flex flex-col sm:flex-row  gap-4 mb-2">
                    <h1 className="text-4xl text-black font-bold text-center ">{project.title}</h1>
                </div>
                <div className='flex flex-col sm:flex-row  gap-4 mb-2 pt-1 '>
                    {project.github && (
            <Link href={project.github} target="_blank" className="underline text-gray-700 border rounded-full border-gray-800 p-1">
              <TbBrandGithub color='black' size={25} />
            </Link>
          )}
          {project.live && (
            <Link href={project.live} target="_blank" className="underline text-gray-700 border rounded-full border-gray-800 p-1">
              <FaGlobe color='black' size={25} />
            </Link>
          )}
                </div>
            </div>
            <div className="mb-6  space-y-2">
                {project.technologies && (
                    <div className="inline-flex flex-wrap gap-2 text-center">
                        {project.technologies.map((t, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-800 text-xs rounded-full">{t}</span>
                        ))}
                    </div>
                )}
                {project.tools && (
                    <div className="inline-flex flex-wrap gap-2 text-center">
                        {project.tools.map((t, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-800 text-xs rounded-full">{t}</span>
                        ))}
                    </div>
                )}

            </div>



            <p className="max-w-2xl  text-gray-700 mb-8 leading-relaxed">
                {project.description}
            </p>

            {project.features && (
                <ul className="max-w-3xl  mb-6 space-y-2">
                    {project.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                            <FaCheckCircle className="mt-1 text-green-400" /> {feat}
                        </li>
                    ))}
                </ul>
            )}


        </div>
    );
};

export default ProjectClient;
