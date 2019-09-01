const mult = (...terms) => terms.reduce(
  (pre, cur) => cur * pre, 1
)

const stringMult = (...terms) => `${mult(...terms)}`

module.exports = stringMult

