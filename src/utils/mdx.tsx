import { promises as fs } from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { compileMDX } from "next-mdx-remote/rsc";

type frontmatter ={
    slug:string;
title: string;
description:string;
date:string,
image:string
}

export const GetSingleBlog = async (slug: string) => {
    try {
        const filePath = path.join(process.cwd(), "src/data", `${slug}.mdx`);
        const fileContent = await fs.readFile(filePath, "utf-8");

        if (!fileContent) {
            return null;
        }

        const { content, frontmatter } = await compileMDX<frontmatter>({
            source: fileContent,
            options: { parseFrontmatter: true }
        })
        return { content, frontmatter };

    } catch (error) {
        console.error("Error reading or serializing MDX file:", error);
        return null;
    }
}

export const getAllBlogs = async () => {
    const files = await fs.readdir(path.join(process.cwd(), 'src/data'));

    const allBlogs = await Promise.all(files.map(async file => {
        const slug = file.replace(".mdx", "");
        const frontmatter = await getFrontematterbyslug(slug);
        return {
            slug,
            ...frontmatter
        }
    }))

    return allBlogs;
}


export const getFrontematterbyslug = async (slug: string) => {
    const filePath = path.join(process.cwd(), "src/data", `${slug}.mdx`);

    const fileContent = await fs.readFile(filePath, "utf-8");

    if (!fileContent) {
        return null;
    }

    const { frontmatter } = await compileMDX<frontmatter>({
        source: fileContent,
        options: { parseFrontmatter: true }
    })
    console.log(frontmatter);

    return frontmatter;
}