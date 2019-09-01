module.exports = (...terms) => terms.reduce(
  (pre, cur) => cur + pre, 0
)
