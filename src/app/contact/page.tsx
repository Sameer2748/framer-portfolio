import { DraggableCardDemo } from "@/components/Collage";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import HomeBlogs from "@/components/HomeBlogs";
import Projects from "@/components/Projects";
import SubHeading from "@/components/SubHeading";
import TImeline from "@/components/TImeline";
import Image from "next/image";

export default function ContactPage() {

  return (
    <div className="min-h-screen flex justify-start items-start">
      <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
        <Heading>Contact Me</Heading>
        <SubHeading>I'm open to freelance offers. Reach out to me to inquire more about my work.</SubHeading>
        <ContactForm/>
      </Container>
    </div>
  );
}
