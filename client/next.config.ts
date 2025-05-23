import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/", // Исходный путь
        destination: "/glav", // Путь, куда нужно перенаправить
        permanent: true, // `true` для постоянного редиректа (HTTP 308), `false` для временного (HTTP 307)
      },
    ];
  },
};

export default nextConfig;
