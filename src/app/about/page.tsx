import { DraggableCardDemo } from "@/components/Collage";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import HomeBlogs from "@/components/HomeBlogs";
import Projects from "@/components/Projects";
import Scales from "@/components/Scales";
import SubHeading from "@/components/SubHeading";
import TImeline from "@/components/TImeline";
import Image from "next/image";

export default function AboutPage() {

  return (
    <div className="min-h-screen flex justify-start items-start">
      <Container className="relative min-h-screen pt-20 px-4 md:px-8 md:pt-20 md:pb-10 bg-woodsmoke-100">
      <Scales />        
        <Heading>About Me</Heading>
        <SubHeading>I'm a software developer with passion for building scalable and effecient systems. I'm currently working as full stack developer at StoryTent.</SubHeading>
        <p className="text-secondary max-w-lg text-sm md:text-base pt-4 pb-4 px-4 dark:text-woodsmoke-300 ">I love to traveland explore new places. I'm a buig fan of nature and adventure. I'm also big fan of teechnology and innovation.  </p>
        <DraggableCardDemo />
        <p className="text-secondary max-w-lg text-sm md:text-base pt-4 pb-4 px-4  dark:text-woodsmoke-300">
          Here is a timeline of my achievement.
        </p>
        <TImeline />
      </Container>
    </div>
  );
}
