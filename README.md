# Recursive Files

[![][build-img]][build]
[![][coverage-img]][coverage]
[![][dependencies-img]][dependencies]
[![][devdependencies-img]][devdependencies]
[![][module-img]][module]

[![][npm-img]][npm]

[build]:     https://travis-ci.org/tallesl/recursive-files
[build-img]: https://travis-ci.org/tallesl/recursive-files.png

[coverage]:     https://coveralls.io/r/tallesl/recursive-files?branch=master
[coverage-img]: https://coveralls.io/repos/tallesl/recursive-files/badge.png?branch=master

[dependencies]:     https://david-dm.org/tallesl/recursive-files
[dependencies-img]: https://david-dm.org/tallesl/recursive-files.png

[devdependencies]:     https://david-dm.org/tallesl/recursive-files#info=devDependencies
[devdependencies-img]: https://david-dm.org/tallesl/recursive-files/dev-status.png

[module]:     http://badge.fury.io/js/recursive-files
[module-img]: https://badge.fury.io/js/recursive-files.png

[npm]:     https://nodei.co/npm/recursive-files/
[npm-img]: https://nodei.co/npm/recursive-files.png?mini=true

## recursiveFiles (dir, [options], callback)

* **dir** directory path;
* **options**
  * **hidden** list hidden files (started with `.`);
  * **ext** list only files with the provided extension;
  * **nonregular** list *non regular* files such as devices or sockets;
* **callback** `function (err, file)`, `file` will be a relative path of the found file to the given directory path;

## Remarks
* *Hidden* and *non regular* files are not listed by default;
* The *callback* is called for *each* found file (realize that it's called multiple times).
