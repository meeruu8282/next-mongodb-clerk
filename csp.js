const policies = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://maps.googleapis.com', 'https://present-fawn-5.clerk.accounts.dev'],
  'worker-src': ["'self'", 'blob:'],
  'child-src': ["'self'"],
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
  'img-src': ["'self'", 'https://raw.githubusercontent.com', 'https://img.clerk.com'],
  'font-src': ["'self'"],
  'frame-src': ["'self'", 'https://present-fawn-5.clerk.accounts.dev'],
  'connect-src': ["'self'", 'https://maps.googleapis.com', 'https://present-fawn-5.clerk.accounts.dev']
};

module.exports = Object.entries(policies)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key} ${value.join(' ')}`;
    }
    return '';
  })
  .join('; ');
