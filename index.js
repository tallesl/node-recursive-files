'use strict'

const fs = require('fs')
const path = require('path')

module.exports = function read (dir, options, callback) {
  if (!callback && options) {
    callback = options
    options = { }
  }

  // forcing the ext, if any, to start with dot
  if (options && options.ext && options.ext[0] !== '.') options.ext = '.' + options.ext

  // list the files on the directory
  fs.readdir(dir, (err, files) => {
    if (err) {
      callback(err)
    } else {
      // for each file
      files.forEach((file) => {
        // getting full path of the file
        file = path.join(dir, file)

        // getting the stats of the file
        fs.stat(file, (err, stats) => {
          if (err) {
            process.nextTick(() => callback(err))
          } else if (stats.isDirectory()) {
            // if it's a directory we do the whole thing for it
            read(file, options, callback)
          } else {
            // separating some info
            const ext = path.extname(file)
            const hidden = path.basename(file)[0] === '.'
            const nonregular = !stats.isFile()

            // if it's not a directory
            if (
              // if we should display hidden files OR the file isn't a hidden one
              (options.hidden || !hidden) &&

              // if we shouldn't filter by extension OR the file is the desired extension
              (!options.ext || options.ext === ext) &&

              // if we shouldn't filter non regular files OR the file is a regular one
              (options.nonregular || !nonregular)
            ) {
              // here, take it :)
              process.nextTick(() => callback(null, file))
            }
          }
        })
      })
    }
  })
}
