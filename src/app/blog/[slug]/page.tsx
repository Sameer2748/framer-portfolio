import Container from "@/components/Container";
import MDXContent from "@/components/MDXContent";
import Scales from "@/components/Scales";
import { getFrontematterbyslug, GetSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }: any) {
  const frontMatter = await getFrontematterbyslug(params.slug);

  if (!frontMatter) {
    return { title: "Blog not found" };
  }

  return {
    title: `${frontMatter.title} by Sameer Rao`,
    description: frontMatter.description,
  };
}

export default async function SingleBlogsPage({ params }: any) {
  const slug = params.slug;
  const data = await GetSingleBlog(slug);

  if (!data) {
    redirect("/blog");
  }

  const { content, frontmatter } = data;

  return (
    <div className="min-h-screen flex justify-start items-start">
      <Container className="relative min-h-screen pt-20 px-4 md:px-8 md:pt-20 md:pb-10 bg-woodsmoke-100">
        <Scales />
        <img
          src={frontmatter.image}
          alt="image"
          className="mx-auto max-w-[80%] max-h-96 w-full object-cover mb-20 shadow-xl rounded-2xl"
        />
        <div className=" px-4
  prose mx-auto dark:[color:#d4d4d4]
  [&_h1]:dark:text-woodsmoke-100 [&_h2]:dark:text-woodsmoke-300 [&_h3]:dark:text-woodsmoke-300 [&_a]:dark:text-woodsmoke-400 [&_strong]:dark:text-woodsmoke-300 [&_code]:dark:text-woodsmoke-300
  [&_h1]:text-lg sm:[&_h1]:text-2xl
  [&_h2]:text-base sm:[&_h2]:text-xl
  [&_h3]:text-base sm:[&_h3]:text-lg
  [&_p]:text-sm sm:[&_p]:text-base
  [&_li]:text-sm sm:[&_li]:text-base
  [&_strong]:text-base sm:[&_strong]:text-lg
">
          {content}
        </div>
      </Container>
    </div>
  );
}
