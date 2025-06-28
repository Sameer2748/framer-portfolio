import { notFound } from 'next/navigation';
import React from 'react';
import Container from '@/components/Container';
import Scales from '@/components/Scales';
import ProjectClient from '@/components/ProjectClient'; // the client component

import { getProjectData } from '@/utils/getProjectData.server';

export default async function ProjectDetailsPage({ params }: { params: any }) {
  const slug = await (params.slug);
  const project =  getProjectData(slug);
  if (!project) return notFound();

  return (
    <div className="min-h-screen  text-white">
      <Container className="relative min-h-screen pt-20 px-4 md:px-8 md:pt-20 md:pb-10 bg-woodsmoke-100">
      <Scales />
        <ProjectClient project={project} />
      </Container>
    </div>
  );
}
