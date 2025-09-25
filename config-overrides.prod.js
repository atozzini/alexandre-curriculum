module.exports = function override(config) {
  const oneOfRule = config.module.rules.find(r => Array.isArray(r.oneOf));

  if (oneOfRule) {
    oneOfRule.oneOf.splice(oneOfRule.oneOf.length - 1, 0, {
      test: /\.svg$/,
      use: [
        {
          loader: require.resolve('svg-inline-loader'),
          options: { removeTags: true },
        },
      ],
    });
  }

  return config;
};
