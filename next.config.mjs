/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: deploy the `out/` folder to Cloudflare Pages, Vercel, Netlify or GitHub Pages.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
};
export default nextConfig;
