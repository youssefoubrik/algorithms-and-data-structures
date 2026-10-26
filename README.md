# Algorithms and Data Structures

Structured TypeScript implementations and exercises inspired by **[The Last Algorithms Course You'll Need](https://frontendmasters.com/courses/algorithms/)** by ThePrimeagen.

This repository tracks hands-on solutions for core algorithms/data-structure topics, alongside Jest tests and helper scripts used to scaffold and iterate on daily practice (`src/day1`).

## Table of Contents

- [Overview](#overview)
- [Repository Layout](#repository-layout)
- [Implemented Topics](#implemented-topics)
- [Setup](#setup)
- [Scripts](#scripts)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

The project focuses on learning-by-implementation:

- Data structures and algorithm implementations in TypeScript.
- Matching test coverage under `src/__tests__`.
- Course-style utilities and types for trees, graphs, and list problems.
- Small automation scripts to clear/regenerate practice-day files.

## Repository Layout

```text
.
├── scripts/                # utilities for generating/clearing day folders and config alignment
├── src/
│   ├── __tests__/          # Jest test cases per topic
│   ├── day1/               # active mapped implementations for @code/* alias
│   ├── golden/             # reference implementation(s)
│   ├── graph.ts            # shared graph fixtures/types
│   ├── array-test.ts       # array helpers for tests
│   └── utils.ts            # shared utility helpers
├── .jest.config.json       # Jest alias mapping for current day folder
├── jest.config.ts          # TS wrapper around Jest config
├── ligma.config.js         # configured DSA topic list used by generator
└── package.json            # dependencies + npm scripts
```

## Implemented Topics

Current implementations include (across `src/day1` and mirrored test modules):

### Search and traversal

- Linear Search
- Binary Search
- Two Crystal Balls
- DFS on BST
- DFS on graph (adjacency list)
- BFS on graph (adjacency list + matrix)
- Maze Solver

### Sorting

- Bubble Sort
- Insertion Sort
- Merge Sort
- Quick Sort

### Linear data structures

- Array List
- Singly Linked List
- Doubly Linked List
- Queue
- Stack
- Ring Buffer
- LRU Cache

### Trees, heaps, and maps

- Binary tree traversals (pre/in/post order)
- Binary tree BFS
- Compare Binary Trees
- Insert/Delete/Verify BST
- Min Heap
- Trie
- Hash Map (custom)

### Graph algorithms

- Dijkstra (adjacency list)
- Prim's MST (reference under `src/golden/PrimList.ts`)

## Setup

### Prerequisites

- Node.js
- npm

### Install dependencies

```bash
npm install
```

## Scripts

All available scripts come from `package.json`:

```bash
npm test
npm run prettier
npm run generate
npm run clear
npm run day
```

- `npm test` runs the configured Jest suite for selected course topics.
- `npm run prettier` formats `src/`.
- `npm run generate` scaffolds the next `src/dayN` folder and updates config mappings.
- `npm run clear` removes generated `src/day*` folders.
- `npm run day` prints the currently mapped day folder path.

## Usage

1. Implement or update a topic in `src/day1` (or generated `src/dayN`).
2. Run tests with `npm test`.
3. Format with `npm run prettier` if needed.

## Contributing

This is primarily an educational/practice repository. If you contribute:

- Keep changes focused on algorithm/data-structure learning goals.
- Include or update matching tests in `src/__tests__`.
- Prefer clear, readable TypeScript implementations over overly clever solutions.

## License

MIT (as declared in `package.json`).
