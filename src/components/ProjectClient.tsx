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
import { useTheme } from 'next-themes';
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

const ProjectClient = ({ project }: { project: Project }) => {

    const {theme} = useTheme();
    return (
        <div className='px-8'>
            <DummySwiper images={project.images} />
            <div className='flex gap-4 jsutify-start'>

                <div className="flex flex-col sm:flex-row  gap-4 mb-2">
                    <h1 className="text-3xl sm:text-4xl text-black font-bold text-center  dark:text-woodsmoke-100 ">{project.title}</h1>
                </div>
                <div className='flex  flex-row  gap-4 mb-2 pt-1 '>
                    {project.github && (
                        <Link href={project.github} target="_blank" className="underline text-gray-700 border rounded-full border-gray-800 dark:text-woodsmoke-300 dark:border-woodsmoke-300 p-1">
                            <TbBrandGithub color={`${theme === "light" ? 'black' : '#e7e7e7'}`} size={25} />
                        </Link>
                    )}
                    {project.live && (
                        <Link href={project.live} target="_blank" className="underline text-gray-700 border rounded-full border-gray-800 dark:text-woodsmoke-300 dark:border-woodsmoke-300 p-1">
                            <FaGlobe color={`${theme === "light" ? 'black' : '#e7e7e7'}`} size={25} />
                        </Link>
                    )}
                </div>
            </div>
            <div className="mb-6  space-y-2">
                {project.technologies && (
                    <div className="inline-flex flex-wrap gap-2 text-center">
                        {project.technologies.map((t, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-800 text-xs rounded-full dark:text-woodsmoke-200">{t}</span>
                        ))}
                    </div>
                )}
                {project.tools && (
                    <div className="inline-flex flex-wrap gap-2 text-center">
                        {project.tools.map((t, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-800 text-xs rounded-full dark:text-woodsmoke-200">{t}</span>
                        ))}
                    </div>
                )}

            </div>



            <p className="max-w-2xl  text-gray-700 mb-8 leading-relaxed dark:text-woodsmoke-200">
                {project.description}
            </p>

            {project.features && (
                <ul className="max-w-3xl  mb-6 space-y-2">
                    {project.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm dark:text-woodsmoke-200">
                            <FaCheckCircle className="mt-1 text-green-400" /> {feat}
                        </li>
                    ))}
                </ul>
            )}


        </div>
    );
};

export default ProjectClient;
