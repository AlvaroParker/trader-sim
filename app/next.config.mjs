/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
        port: "",
      },
      {
        protocol: 'https',
        hostname: '**.gravatar.com',
        port: "",
      },
    ]
  }
};

export default nextConfig  
