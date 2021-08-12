module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.experiments = { topLevelAwait: true };
    return config;
  },
  images: {
    domains: ["citrinetechltd.com"],
  }
}
