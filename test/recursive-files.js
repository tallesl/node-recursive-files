var assert = require('assert')
  , path = require('path')
  , recursiveFiles = require('../lib/recursive-files')

it('should list everything except hidden', function () {
  recursiveFiles('test/dir', function (err, file) {
    if (err) throw err
    shouldntBeHidden(file)
  })
})

it('should list everything including hidden', function () {
  recursiveFiles('test/dir', { hidden: true }, function (err, file) {
    if (err) throw err
  })
})

it('should list only .txt', function() {
  recursiveFiles('test/dir', { ext: '.txt' }, function (err, file) {
    if (err) throw err
    shouldBeTxt(file)
  })
})

function shouldntBeHidden (file) {
  assert(file[0] !== '.', '"' + file + '" shoudn\'t be listed')
}

function shouldBeTxt (file) {
  assert(path.extname(file) === '.txt', '"' + file + '" shouldn\'t be listed')
}
