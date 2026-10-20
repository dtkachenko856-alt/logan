/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "l9kudpijgzio1vvu.public.blob.vercel-storage.com",
			},
		],
	},
    allowedDevOrigins: ['192.168.1.*'],
};

module.exports = nextConfig
