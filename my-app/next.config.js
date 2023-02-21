/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.extensions.push(".ts", ".tsx");
    }

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env", "@babel/preset-react"],
        plugins: ["@babel/plugin-transform-typescript"],
      },
    });

    return config;
  },
};
