/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.google.com',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'organdonate.redcross.or.th',
            },
            {
                protocol: 'https',
                hostname: 'stemcellthai.redcross.or.th',
            },
            {
                protocol: 'https',
                hostname: '**.fbcdn.net',
            }
        ],
    },
}

module.exports = nextConfig 