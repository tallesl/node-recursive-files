# Recursive Files

[![build](https://travis-ci.org/tallesl/recursive-files.png)](https://travis-ci.org/tallesl/recursive-files)
[![coverage](https://coveralls.io/repos/tallesl/recursive-files/badge.png?branch=master)](https://coveralls.io/r/tallesl/recursive-files?branch=master)
[![dependencies](https://david-dm.org/tallesl/recursive-files.png)](https://david-dm.org/tallesl/recursive-files)
[![devDependencies](https://david-dm.org/tallesl/recursive-files/dev-status.png)](https://david-dm.org/tallesl/recursive-files#info=devDependencies)
[![npm module](https://badge.fury.io/js/recursive-files.png)](http://badge.fury.io/js/recursive-files)

[![npm](https://nodei.co/npm/recursive-files.png?mini=true)](https://nodei.co/npm/recursive-files/)

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
