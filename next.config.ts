import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Synesis",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
