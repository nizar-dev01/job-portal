const resolve = dir => require("path").resolve(__dirname,dir);
// Alias Path Base
const src = "src";
const template = `${src}/template`;

module.exports = {
    module:{
        rules:[
            {
                test: /\.mp4$/,
                use:'file-loader'
            }
        ]
    },
    resolve:{
        extensions: ['.js','.vue','.scss', '.json'],
        alias:{
            "@": resolve(src),
            "@data": resolve(`${src}/data`),
            "@directive": resolve(`${src}/directives`),
            "@v": resolve(`${template}/views`),
            "@c": resolve(`${template}/components`),
            "@l": resolve(`${template}/layout`),
            "~": resolve(`${template}/style`),
            "~c": resolve(`${template}/style/components`),
            "~v": resolve(`${template}/style/views`),
            "~l": resolve(`${template}/style/layout`),
            "@asset": resolve(`${src}/assets`),
            "@image": resolve(`${src}/assets/images`),
            "@n": resolve("node_modules")
        }
    }
}