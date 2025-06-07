import type { NextConfig } from "next";
import createMDX from '@next/mdx'


const nextConfig: NextConfig = {
  /* config options here */
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  images:{
    remotePatterns:[
      {
        hostname:"imgs.search.brave.com"
      },
      {
        hostname:"cdn1.roundasspics.com"
      },
    ]
  }
};

 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
    extension: /\.(md|mdx)$/,


})

export default withMDX(nextConfig)
