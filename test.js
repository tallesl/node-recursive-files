'use strict'

const assert = require('assert')
const recursiveFiles = require('.')

/* global it */

it('should list everything including hidden', (done) => {
  const files = [ ]

  recursiveFiles('dir', { hidden: true }, (err, file) => {
    assert.ifError(err)
    files.push(file)
  })

  setTimeout(() => {
    assert.deepEqual(
      files.sort(),
      [
        'dir/.hidden',
        'dir/some-data.json',
        'dir/some-text-file.txt',
        'dir/subdir/.hidden',
        'dir/subdir/another-text-file.txt'
      ]
    )
    done()
  }, 200)
})

it('should list everything except hidden', (done) => {
  const files = [ ]

  recursiveFiles('dir', (err, file) => {
    assert.ifError(err)
    files.push(file)
  })

  setTimeout(() => {
    assert.deepEqual(
      files.sort(),
      [
        'dir/some-data.json',
        'dir/some-text-file.txt',
        'dir/subdir/another-text-file.txt'
      ]
    )
    done()
  }, 200)
})

it('should list only .txt', (done) => {
  const files = [ ]

  recursiveFiles('dir', { ext: '.txt' }, (err, file) => {
    assert.ifError(err)
    files.push(file)
  })

  setTimeout(() => {
    assert.deepEqual(
      files.sort(),
      [
        'dir/some-text-file.txt',
        'dir/subdir/another-text-file.txt'
      ]
    )
    done()
  }, 200)
})

it('should error', (done) => {
  recursiveFiles('non-existent', (err) => {
    assert.equal(err.code, 'ENOENT')
    done()
  })
})
