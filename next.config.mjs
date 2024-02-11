/** @type {import('next').NextConfig} */

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    disable: false,
    workboxOptions: {
        disableDevLogs: true,
    }
});

export default withPWA({
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                hostname: 'flagcdn.com',
            },
            {
                hostname: 'mainfacts.com',
            },
            {
                hostname: 'upload.wikimedia.org',
            },
            {
                hostname: 'www.openstreetmap.org',
            },
        ],
    },
});
