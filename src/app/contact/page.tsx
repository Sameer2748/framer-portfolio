
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Scales from "@/components/Scales";
import SubHeading from "@/components/SubHeading";


export default function ContactPage() {

  return (
    <div className="min-h-screen flex justify-start items-start">
      <Container className="relative min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>Contact Me</Heading>
        <SubHeading>I'm open to freelance offers. Reach out to me to inquire more about my work.</SubHeading>
        <ContactForm />
      </Container>
    </div>
  );
}
