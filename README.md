# recursive-files

[![][build-img]][build]
[![][coverage-img]][coverage]
[![][dependencies-img]][dependencies]
[![][devdependencies-img]][devdependencies]
[![][npm-img]][npm]

Asynchronous recursive [readdir].
Note that the given callback it's called multiple times, one for each found file.

[build]:               https://travis-ci.org/tallesl/node-recursive-files
[build-img]:           https://travis-ci.org/tallesl/node-recursive-files.svg
[coverage]:            https://coveralls.io/r/tallesl/node-recursive-files?branch=master
[coverage-img]:        https://coveralls.io/repos/tallesl/node-recursive-files/badge.svg?branch=master
[dependencies]:        https://david-dm.org/tallesl/node-recursive-files
[dependencies-img]:    https://david-dm.org/tallesl/node-recursive-files.svg
[devdependencies]:     https://david-dm.org/tallesl/node-recursive-files#info=devDependencies
[devdependencies-img]: https://david-dm.org/tallesl/node-recursive-files/dev-status.svg
[npm]:                 https://npmjs.com/package/recursive-files
[npm-img]:             https://badge.fury.io/js/recursive-files.svg
[readdir]:             https://nodejs.org/api/all.html#fs_fs_readdir_path_options_callback

## Usage

```js
recursiveFiles(dir, [options], callback)
```

* **dir** directory path;
* **options**
  * **hidden** list hidden files (files starting with `.`), defaults to `false`
  * **ext** list only files with the provided extension
  * **nonregular** list non regular files such as devices or sockets, defaults to `false`
* **callback** `function (err, file)`
  * **err** eventual error
  * **file** a relative path of the found file to the given directory path;
