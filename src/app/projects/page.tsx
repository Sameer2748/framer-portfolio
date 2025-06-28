import { DraggableCardDemo } from "@/components/Collage";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import HomeBlogs from "@/components/HomeBlogs";
import Projects from "@/components/Projects";
import Scales from "@/components/Scales";
import SubHeading from "@/components/SubHeading";
import TImeline from "@/components/TImeline";
import Image from "next/image";

export default function ProjectsPage() {

  return (
    <div className="min-h-screen flex justify-start items-start">
      <Container className="relative min-h-screen pt-20 px-4 md:px-8 md:pt-20 md:pb-10 bg-woodsmoke-100">
      <Scales />
        <Heading>Projects</Heading>
        <SubHeading>I'm a passionate software engineer dedicated to crafting elegant solutions for complex problems. With expertise in full-stack development, I enjoy building user-centric applications that make a difference. </SubHeading>
        <Projects grid={2}  />
      </Container>
    </div>
  );
}
