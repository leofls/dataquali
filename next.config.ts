import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: false, // opcional se estiver testando localmente
  },
  output: 'export', // gerar build estatico
  trailingSlash: true, // gerar build em pastas
};

export default nextConfig;
