/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/home-page",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
