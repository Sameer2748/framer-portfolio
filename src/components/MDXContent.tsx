// components/MDXContent.tsx
"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";

type Props = {
  source: MDXRemoteSerializeResult;
};

export default function MDXContent({ source }: Props) {
  return <MDXRemote {...source} components={{}} />;
}
