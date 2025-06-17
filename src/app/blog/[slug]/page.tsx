
import Container from "@/components/Container";
import MDXContent from "@/components/MDXContent"; // the client wrapper
import Scales from "@/components/Scales";
import { getFrontematterbyslug, GetSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";


export async function generateMetadata({ params }: { params: { slug: string } }) {
  const frontMatter = await getFrontematterbyslug(params.slug);


  if (!frontMatter) {
    return {
      title: "Blog not found"
    }
  }

  return {
    title: frontMatter.title + " by Sameer rao",
    description: frontMatter.description
  }


}

export default async function SingleBlogsPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const data = await GetSingleBlog(slug);
  console.log(data);
  if (!data) {
    redirect("/blog")
  }

  const { content, frontmatter } = data;
  console.log(frontmatter);


  return (
    <div className="min-h-screen flex justify-start items-start">
      <Container className="relative min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        <img src={frontmatter.image} alt="image" className="mx-auto max-h-96 w-full object-cover  mb-20  shadow-xl rounded-2xl " />
        <div className="prose mx-auto">
          {content}
        </div>
      </Container>
    </div>
  );
}
