import('next').NextConfig
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
});

export default withPWA({
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
});

