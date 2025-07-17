/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [new URL('https://i.ibb.co/**')],
       domains: ['i.ibb.co'],
    },
};

export default nextConfig;
