const ContentSecurityPolicy = require('./csp');
const redirects = require('./redirects');

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['localhost', process.env.NEXT_PUBLIC_SERVER_URL]
      .filter(Boolean)
      .map(url => url.replace(/https?:\/\//, '')),
  },
  redirects,
  experimental: {
    serverActions: true, // Enable Server Actions feature
  },
  async headers() {
    const headers = [];

    // Prevent search engines from indexing the site if it is not live
    // This is useful for staging environments before they are ready to go live
    // To allow robots to crawl the site, use the `NEXT_PUBLIC_IS_LIVE` env variable
    // You may want to also use this variable to conditionally render any tracking scripts
    if (!process.env.NEXT_PUBLIC_IS_LIVE) {
      headers.push({
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy-Report-Only',
            value: `${ContentSecurityPolicy}; frame-src 'self'`, // Separate frame-src directive
          },
        ],
      });
    }

    // Set the `Content-Security-Policy` header as a security measure to prevent XSS attacks
    // It works by explicitly whitelisting trusted sources of content for your website
    // This will block all inline scripts and styles except for those that are allowed
    headers.push({
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: ContentSecurityPolicy,
        },
      ],
    });

    // *** IMPORTANT ***
    // Disabled CSP for now, as it was blocking the Trueform scripts.
    // This will need to be re-enabled and tested before going live

    return headers;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
