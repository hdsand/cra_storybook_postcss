module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [require('postcss-nested')],
          },
        },
      ],
      include: __dirname,
    });
    config.resolve.modules.push(process.cwd() + '/node_modules');
    config.resolve.modules.push(process.cwd() + '/src');
    config.resolve.symlinks = false;

    return config;
  },
};
