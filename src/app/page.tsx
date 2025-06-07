import Container from "@/components/Container";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {

  return (
    <div className="min-h-screen flex justify-start items-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">Sameer Rao</h1>
        <p className="text-secondary max-w-lg text-sm md:text-base pt-4 ">I'm a software developer with passion for building scalable and effecient systems. I'm currently working as full stack developer at StoryTent.</p>
      <Projects/>
      </Container>
    </div>
  );
}
