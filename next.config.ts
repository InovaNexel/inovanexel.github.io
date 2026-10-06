import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
    localPatterns: [{ pathname: "/**" }],
  },
};

export default nextConfig;
