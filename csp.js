const crypto = require('crypto');
const nonce = crypto.randomBytes(16).toString('base64');

const policies = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", `nonce-${nonce}`, 'https://maps.googleapis.com', 'https://present-fawn-5.clerk.accounts.dev', 'https://vercel.live', 'https://vercel.com', 'https://picked-shark-27.clerk.accounts.dev'],
  'worker-src': ["'self'", 'blob:'],
  'child-src': ["'self'", 'https://vercel.live'],
  'style-src': ["'self'", "'unsafe-inline'", `nonce-${nonce}`, 'https://fonts.googleapis.com', 'https://vercel.live', 'https://vercel.com'],
  'img-src': ["'self'", 'https://raw.githubusercontent.com', 'https://img.clerk.com', 'https://vercel.com'],
  'font-src': ["'self'", 'https://vercel.live'], 
  'connect-src': ["'self'", 'https://maps.googleapis.com', 'https://present-fawn-5.clerk.accounts.dev', 'https://api.clerk.com', 'https://vercel.live', 'https://sockjs-us3.pusher.com', 'https://vercel.com', 'https://picked-shark-27.clerk.accounts.dev', 'mongodb+srv://meeru284:k0uZGr54lXvK9pGl@cluster0.p9zffzr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'],
};

module.exports = Object.entries(policies)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key} ${value.join(' ')}`;
    }
    return '';
  })
  .join('; ');
