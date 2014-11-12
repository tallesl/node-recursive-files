var fs = require('fs')
  , path = require('path')

function read (dir, options, callback) {

  if (!callback && options) {
    callback = options
    options = { }
  }

  // forcing the ext, if any, to start with dot
  if (options && options.ext && options.ext[0] != '.') options.ext = '.' + options.ext

  // list the files on the directory
  fs.readdir(dir, function (err, files) {

    if (err) callback(err)

    // for each file
    else files.forEach(function (file) {

      // getting full path of the file
      file = path.join(dir, file)

      // getting the stats of the file
      fs.stat(file, function (err, stats) {

        if (err) callback(err)

        // if it's a directory we do the whole thing for it
        else if (stats.isDirectory()) read(file, callback);

        else {
          // separating some info
          var ext = path.extname(file)
          , hidden = path[0] == '.'
          , nonregular = !stats.isFile()
  
          // if it's not a directory
          if (
            // if we should display hidden files OR the file isn't a hidden one
            (options.hidden || !hidden) &&
  
            // if we shouldn't filter by extension OR the file is the desired extension
            (!options.ext || options.ext == ext) &&
  
            // if we shouldn't filter non regular files OR the file is a regular one
            (options.nonregular || !nonregular)
          ) process.nextTick(function () {
            // here, take it :)
            callback(null, file)
          })
        }

      })

    })

  })

}

module.exports = read
