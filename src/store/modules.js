import camelCase from 'lodash/camelCase'

const requireModule = require.context(
    './modules',
    false,
    /\.js$/
)

const modules = {}

requireModule.keys().forEach(filename => {
    if(filename == './index.js') return
    const moduleName = camelCase(filename.replace(/(\.\/|\.js)/g,''))
    modules[moduleName] = requireModule(filename).default || requireModule(filename)
})

export default modules