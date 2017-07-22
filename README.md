
# astar-algorithm

An almost universal implementation of A* search algorithm in JavaScript

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

### Requirements
+ ECMAScript 2015+

### Usage
```js
// 1)
const astar = require('astar-algorithm')

// 2)
let callbacks = {
  // It should return id / key / hash for a node
  id(node) {
    // return {String} or what you want
  },
  // It checks: is a node is the goal?
  isGoal(node) {
    // return {Boolean}
  },
  // It should return an array of successors / neighbors / children
  getSuccessors(node) {
    // return {Array} of nodes
  },
  // g(x). It returns the cost of path between two nodes
  distance(nodeA, nodeB) {
    // return {Number}
  },
  // h(x). It returns the cost of path from a node to the goal
  estimate(node, goal) {
    // return {Number}
  }
}

// 3)
let path = astar(start, goal, callbacks)
```

See examples [there](test/index.js).

[npm-image]: https://img.shields.io/npm/v/koa-architect.svg?style=flat
[npm-url]: https://npmjs.org/package/koa-architect
[travis-image]: https://img.shields.io/travis/nervgh/astar-algorithm.svg?style=flat
[travis-url]: https://travis-ci.org/nervgh/astar-algorithm
[coveralls-image]: https://img.shields.io/coveralls/nervgh/astar-algorithm.svg?style=flat
[coveralls-url]: https://coveralls.io/r/nervgh/astar-algorithm?branch=master
