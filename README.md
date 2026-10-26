# Algorithms and Data Structures

Structured implementations, exercises, and notes inspired by **[The Last Algorithms Course You'll Need](https://frontendmasters.com/courses/algorithms/)** by ThePrimeagen.

This repository is organized around day-based practice (`src/day1`, future `dayN` folders via scripts) and contains TypeScript implementations of core algorithms/data structures plus Jest tests.

## Table of Contents

- [Repository Layout](#repository-layout)
- [Implemented Topics](#implemented-topics)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Repository Layout

```text
.
├── src/
│   ├── day1/                 # current implementation set used by tests via @code/* alias
│   ├── __tests__/            # Jest test files for algorithms/data structures
│   ├── golden/               # reference/notes implementations
│   ├── global.d.ts           # shared algorithm/data structure types
│   ├── graph.ts              # graph helpers
│   └── array-test.ts         # local array timing experiment
├── scripts/
│   ├── generate.js           # scaffolds next day folder + updates config/scripts
│   ├── clear.js              # removes generated day folders
│   ├── align-configs.js      # syncs jest/tsconfig/package scripts
│   └── dsa.js                # generation templates/specs
├── ligma.config.js           # selected DSA set for generation/test script
├── .jest.config.json         # Jest config consumed by jest.config.ts
└── package.json
```

## Implemented Topics

### Searching
- `LinearSearchList`
- `BinarySearchList`
- `TwoCrystalBalls`

### Sorting
- `BubbleSort`
- `QuickSort`
- `InsertionSort` (test coverage present)
- `MergeSort` (test coverage present)

### Linked Structures, Queues, Stacks, and Hashing
- `ArrayList`
- `SinglyLinkedList`
- `DoublyLinkedList`
- `Queue`
- `Stack`
- `RingBuffer`
- `Map`
- `LRU`
- `Trie`
- `MinHeap`

### Trees and Binary Search Trees
- Traversals and checks: `BTPreOrder`, `BTInOrder`, `BTPostOrder`, `BTBFS`, `CompareBinaryTrees`, `DFSOnBST`
- BST operations/tests: `InsertBST`, `DeleteBST`, `VerifyBST`

### Graphs and Pathfinding
- `DFSGraphList`
- `BFSGraphList`
- `BFSGraphMatrix`
- `DijkstraList`
- `PrimsList`
- `MazeSolver`

## Getting Started

### Prerequisites
- Node.js (LTS recommended)
- npm

### Installation

```bash
npm install
```

## Available Scripts

Run from the repository root:

```bash
npm test
```
Runs the Jest suite for the currently selected algorithm set.

```bash
npm run prettier
```
Formats files under `src/`.

```bash
npm run generate
```
Generates the next `src/dayN` folder from `ligma.config.js` and updates related config.

```bash
npm run clear
```
Removes generated day folders from `src/`.

```bash
npm run day
```
Prints the current day path used by the active setup.

## Usage

- Implement or refine an algorithm in `src/day1` (or generated `src/dayN`).
- Add or update the matching test in `src/__tests__`.
- Run `npm test` to verify correctness.

## Contributing

This repository is primarily an educational workspace, but improvements are welcome:

1. Keep changes focused to one algorithm/data structure or tooling update.
2. Include/update tests when changing implementations.
3. Run `npm test` and `npm run prettier` before opening a PR.

## License

MIT (as declared in `package.json`).
