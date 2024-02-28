module.exports = {
  root: true,
  extends: ['@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    "prettier/prettier": [ 'error', { "endOfLine" : 'auto' }],
    'no-console': 'off',
  },
}
