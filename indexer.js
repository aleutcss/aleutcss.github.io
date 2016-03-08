'use strict'

const fs = require('fs')
const path = require('path')
const Glob = require('glob')
const pattern = '_includes/node_modules/**/_*scss'
const filesList = Glob.sync(pattern)

filesList.map((val) => {
  let filename = path.basename(val, '.scss')
  filename = filename.replace('_', '')
  const dirname = path.dirname(val)
  const text = `---
layout: documentation-single
title: ${filename}
section: tools
package: ${filename}
---`
  fs.writeFile(`${dirname}/index.md`, text, err => {
    if (err) {
      console.log(`Something went wront: ${err}`)
    } else {
      console.log(`Created index.md in ${dirname}`)
    }
  })
})
