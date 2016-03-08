'use strict'

const fs = require('fs')
const mkdirp = require('mkdirp')
const path = require('path')
const Glob = require('glob')
const pattern = '_includes/node_modules/**/_*scss'
const filesList = Glob.sync(pattern)

filesList.map((val) => {
  let filename = path.basename(val, '.scss')
  filename = filename.replace('_', '')
  let docdirname = path.basename(val, '.scss')
  docdirname = docdirname.replace('_', '')
  docdirname = docdirname.replace('.', '-')
  const section = filename.split('.')[0]
  const dirname = path.dirname(val)
  const text = `---
layout: documentation-single
title: ${filename}
section: ${section}
package: ${filename}
---`
  const newDir = `./documentation/${docdirname}`
  if (!fs.existsSync(newDir)){
    fs.mkdirSync(newDir)
  }
  fs.writeFile(`documentation/${docdirname}/index.md`, text, err => {
    if (err) {
      console.log(`Something went wront: ${err}`)
    } else {
      console.log(`Created index.md in ${docdirname}`)
    }
  })
})
