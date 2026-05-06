import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com', // ইমজিবিবির ইমেজ সার্ভারের ঠিকানা
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
