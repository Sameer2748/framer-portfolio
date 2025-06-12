import Container from "@/components/Container";
import Heading from "@/components/Heading";
import SubHeading from "@/components/SubHeading";
import { getAllBlogs } from "@/utils/mdx";
import { Metadata } from "next";
import { Link } from "next-view-transitions";


export const metadata: Metadata = {
  title: "All Blogs- Sameer Rao",
  description: "All my general Wisdom and Thoughts",
};



export default async function BlogsPage() {
  const allBlogs = await getAllBlogs()

  console.log(allBlogs);
  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  }


  return (
    <div className="min-h-screen flex justify-start items-start">
      <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
        <Heading>All Blogs</Heading>
        <SubHeading>I'm a software developer with passion for building scalable and effecient systems. I'm currently working as full stack developer at StoryTent</SubHeading>
        <div className="flex flex-col gap-8 py-10">
          {
            allBlogs.map((blog, idx) => (
              <Link href={`/blog/${blog.slug}`} key={idx}>
                <div className="flex  items-center justify-between ">
                  <h2 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">{blog.title}</h2>
                  <p className="text-secondary  text-sm md:text-sm ">{new Date(blog.date).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })}
                  </p>
                </div>
                <p className="text-secondary max-w-lg  pt-2 text-sm md:text-sm ">{truncate(blog.description || "", 150)} </p>
              </Link>
            ))
          }
        </div>

      </Container>
    </div>
  );
}
