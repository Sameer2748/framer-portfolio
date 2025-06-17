import Container from "@/components/Container";

import Heading from "@/components/Heading";
import HomeBlogs from "@/components/HomeBlogs";
import Projects from "@/components/Projects";
import SubHeading from "@/components/SubHeading";
import Image from "next/image";
import {projects} from "@/Constants/Projects"
import Testimonials from "@/components/Testimonials";
import Scales from "@/components/Scales";

export default function Home() {

  return (
    <div className="min-h-screen flex justify-start items-start">
      <Container className="relative min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales/>
        <Heading as="h6">Sameer Rao</Heading>
        <SubHeading>
        I'm a software developer with passion for building scalable and effecient systems. I'm currently working as full stack developer at StoryTent.
        </SubHeading>
      <Projects Projects={projects.slice(0,3)} />
      <HomeBlogs/>
      <Testimonials />
      </Container>
    </div>
  );
}
