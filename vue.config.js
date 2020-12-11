
const configureWebpack = require('./webpack.config');
module.exports = {
    configureWebpack,
    publicPath: process.env.NODE_ENV === 'production'
    ? '/job-portal/'
    : '/'
}