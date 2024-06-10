/** @type {import("postcss-load-config").Config} */
const config = {
    plugins: {
        'postcss-import': {},
        'postcss-mixins': {},
        'postcss-nested': {},
        'cssnano': {},
        'autoprefixer': {}
    }
};

module.exports = config;
