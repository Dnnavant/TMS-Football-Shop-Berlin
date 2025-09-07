/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'videos.openai.com' },
      { protocol: 'https', hostname: 'i0.wp.com' }
    ]
  }
};
export default nextConfig;
