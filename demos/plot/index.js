const add = require('@newmaths/addition')
const mul = require('@newmaths/multiplication')
module.exports = (...terms) => add(...terms) + mul(...terms)
