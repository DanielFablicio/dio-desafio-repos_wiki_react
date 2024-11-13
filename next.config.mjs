/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV;
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
