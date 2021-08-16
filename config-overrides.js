const {alias} = require('react-app-rewire-alias')

const aliasMap = {

    "@src": "src/",
    "@components": "src/components",
    "@assets": "src/assets",
    "@views": "src/views"

}

module.exports = alias(aliasMap)
