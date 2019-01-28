const colors = require('colors')

const arrow = (len = 0) => colors.white.bold(`${'-'.repeat(len * 2)}>`)

module.exports = {
  arrow
}
