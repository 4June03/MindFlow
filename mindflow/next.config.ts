import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // bất kỳ host nào dùng https
      },
      {
        protocol: "http",
        hostname: "**", // bất kỳ host nào dùng http
      },
    ],
  },
};

export default nextConfig;
