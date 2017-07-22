
const assert = require('assert')
const astar = require('../lib')

describe('astar', function () {
  it('should work', function () {
    // @see https://en.wikipedia.org/wiki/A*_search_algorithm#Example
    const nodes = new Set([
      'a',
      'b',
      'c',
      'd',
      'e',
      'start',
      'end'
    ])
    const edges = new Map([
      ['start:a', 1.5],
      ['start:d', 2],
      ['a:b', 2],
      ['d:e', 3],
      ['b:c', 4],
      ['e:end', 2],
      ['c:end', 4]
    ])
    const children = new Map([
      ['start', ['a', 'd']],
      ['a', ['b']],
      ['b', ['c']],
      ['c', ['end']],
      ['d', ['e']],
      ['e', ['end']]
    ])
    const estimates = new Map([
      ['a:end', 4],
      ['b:end', 2],
      ['c:end', 4],
      ['d:end', 4.5],
      ['e:end', 2]
    ])

    const callbacks = {
      id (node) {
        return node
      },
      isGoal (node) {
        return node === 'end'
      },
      getSuccessors (node) {
        return children.get(node)
      },
      distance (nodeA, nodeB) {
        const key = nodeA + ':' + nodeB
        return edges.get(key)
      },
      estimate (node, goal) {
        const key = node + ':' + goal
        return estimates.get(key)
      }
    }

    const path = astar('start', 'end', callbacks)
    const expected = ['start', 'd', 'e', 'end']

    assert.deepEqual(path, expected)
  })
})
