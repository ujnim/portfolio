/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    ...(process.env.NODE_ENV === 'production' ? {
        basePath: '/portfolio',
        assetPrefix: '/portfolio/',
    } : {}),
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'organdonate.redcross.or.th',
                port: '',
                pathname: '/assets/images/seo/**',
            },
            {
                protocol: 'https',
                hostname: 'scontent.fbkk5-4.fna.fbcdn.net',
                port: '',
                pathname: '/v/**',
            },
            {
                protocol: 'https',
                hostname: 'stemcellthai.redcross.or.th',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.google.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig 