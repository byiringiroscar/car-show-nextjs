/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.imagin.studio', 'source.unsplash.com'],
    },
    typescript: {
        ignoreBuildErrors: true,
    }

};

export default nextConfig;
