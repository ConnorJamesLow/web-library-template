/**
 * 
 * @param {import("postcss-load-config").ConfigPlugin} config 
 * @returns 
 */
function ifProd(config) {
    return process.env.NODE_ENV === 'production' ? config : {};
}

/** @type {import("postcss-load-config").Config} */
const config = {
    plugins: {
        'postcss-import': {},
        'postcss-functions': {
            functions: {
                unit: value => `${value * 8}px`
            }
        },
        'postcss-mixins': {},
        'postcss-each': {},
        'postcss-nested': {},
        ...ifProd({ 'cssnano': {} }),
        'autoprefixer': {}
    }
};

module.exports = config;
