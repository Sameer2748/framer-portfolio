import type { NextConfig } from "next";
import createMDX from '@next/mdx'


const nextConfig: NextConfig = {
  /* config options here */
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    transpilePackages:["next-mdx-remote"],

  images:{
    remotePatterns:[
      {
        hostname:"imgs.search.brave.com"
      },
      {
        hostname:"via.placeholder.com"
      },
      {
        hostname:"images.unsplash.com"
      }
    ]
  }
};

 

export default nextConfig
