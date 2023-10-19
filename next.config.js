/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["media.graphassets.com"],
  },
};

module.exports = nextConfig;
