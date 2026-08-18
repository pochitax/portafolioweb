import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'shots.codepen.io' },
      { protocol: 'https', hostname: 'www.figma.com'    },
      { protocol: 'https', hostname: 'codesandbox.io'          },
      { protocol: 'https', hostname: 'screenshots.codesandbox.io' },
      { protocol: 'https', hostname: 'my.spline.design' },
    ],
  },
};

export default nextConfig;
