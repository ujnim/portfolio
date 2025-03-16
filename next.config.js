/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
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
        ],
    },
}

module.exports = nextConfig 