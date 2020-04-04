/* eslint-disable @typescript-eslint/no-var-requires */
const graphqlLoader = require('graphql-tag/loader');

module.exports = (phase, { defaultConfig }) => {
  return {
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
      config.module.rules.push({
        test: /\.(graphql|gql)$/,
        loader: graphqlLoader,
        exclude: /node_modules/,
      });

      return config;
    },
    devIndicators: {
      autoPrerender: true,
    },
  };
};
