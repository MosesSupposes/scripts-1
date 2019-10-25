'use strict'

/**
 * Dependencies
 */

const meow = require('meow')
const chalk = require('chalk')
const showHelp = require('../helpers/showHelp')

/**
 * Parse args
 */

const cli = meow(`
  Usage
    $ cast binary [OPTION]... NUMBER

  Options:
    --reverse, -r  Convert binary to decimal.
    --ascii        Print table of ASCII characters in binary.
`, {
  description: 'Convert decimal to binary.'
})

/**
 * Define script
 */

function binary() {
  if (cli.flags.ascii) {
    // Print conversion table for all ASCII characters.
    // TODO
  } else if (cli.flags.reverse || cli.flags.r) {
    // Filter for only binary numbers.
    let binaryNumbers  = process.argv.filter(e => e.match(/^[01]+$/))
    let decimalNumbers = binaryNumbers.map(b => Number.parseInt(b, 2).toString(10))

    // Print conversion table
    console.log('binaryNumbers', binaryNumbers)
    console.log('decimalNumbers', decimalNumbers)
  } else {
    showHelp(cli, [cli.input.length < 2])

    const decimalNumber = cli.input[1]
    const binaryNumber = (decimalNumber >>> 0).toString(2)

    if (arguments.length === 0) {
      console.log(`\n  ${chalk.green.bold(binaryNumber)}\n`)
    }
  
    return binaryNumber
  }
}

/**
 * Export script
 */

module.exports = binary
