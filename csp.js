const policies = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://maps.googleapis.com', 'https://present-fawn-5.clerk.accounts.dev', 'https://vercel.live', 'https://vercel.com'],
  'worker-src': ["'self'", 'blob:'],
  'child-src': ["'self'", 'https://vercel.live'],
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com', 'https://vercel.live', 'https://vercel.com'],
  'img-src': ["'self'", 'https://raw.githubusercontent.com', 'https://img.clerk.com', 'https://vercel.com'],
  'font-src': ["'self'", 'https://vercel.live'], 
  'frame-src': ["'self'", 'https://present-fawn-5.clerk.accounts.dev', 'https://vercel.live'],
  'connect-src': ["'self'", 'https://maps.googleapis.com', 'https://present-fawn-5.clerk.accounts.dev', 'https://api.clerk.com', 'https://vercel.live', 'https://sockjs-us3.pusher.com', 'https://vercel.com'],
};

module.exports = Object.entries(policies)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key} ${value.join(' ')}`;
    }
    return '';
  })
  .join('; ');
