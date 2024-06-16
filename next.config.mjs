/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.imagin.studio', 'source.unsplash.com'],
    },
    typerscript: {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
