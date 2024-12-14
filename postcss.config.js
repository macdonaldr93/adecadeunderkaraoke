module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default', // Use the default minification preset
    }),
  ],
};
