'use strict'

/**
 * Dependencies
 */

const meow = require('meow')
const showHelp = require('../helpers/showHelp')

/**
 * Parse args
 */

const cli = meow(`
  Usage
    $ cast crawl URL
`, {
    description: 'Crawls websites for specific content.'
})

/**
 * Define script
 */

function crawl_script() {
    showHelp(cli, [cli.input.length < 2])

    const rootUrl = cli.input[1]

    console.log(rootUrl)
}

/**
 * Export script
 */

module.exports = crawl_script
