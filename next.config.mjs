/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true
});

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },
        ],
    },
};

export default withPWA(nextConfig);
