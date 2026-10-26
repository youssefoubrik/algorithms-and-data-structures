# Algorithms and Data Structures

Structured implementations and notes from [The Last Algorithms Course You'll Need](https://frontendmasters.com/courses/algorithms/) by [ThePrimeagen](https://github.com/ThePrimeagen).

This repository contains hands-on implementations of common algorithms and data structures using TypeScript, along with Jest tests and supporting JavaScript scripts.

## Contents

- [Overview](#overview)
- [Implemented Topics](#implemented-topics)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Testing](#testing)
- [Code Formatting](#code-formatting)
- [Contributing](#contributing)
- [License](#license)

## Overview

The goal of this project is to build a practical understanding of fundamental algorithms and data structures by implementing them from scratch.

The implementations are intended for learning and experimentation. They favor clarity and understanding over production-ready optimization.

## Implemented Topics

The repository currently includes implementations covering:

### Data Structures

- Array lists
- Singly linked lists
- Doubly linked lists
- Stacks
- Queues
- Ring buffers
- Maps
- Tries
- Min-heaps
- Least Recently Used (LRU) caches
- Binary search trees
- Graphs

### Algorithms

- Linear search
- Binary search
- Bubble sort
- Quick sort
- Breadth-first search
- Depth-first search
- Dijkstra's shortest-path algorithm
- Maze solving
- Two crystal balls problem
- Binary tree traversals:
  - Pre-order
  - In-order
  - Post-order
  - Breadth-first traversal
- Binary search tree insertion
- Binary search tree deletion
- Binary search tree validation
- Binary tree comparison

Implementations can be found primarily in [`src/day1`](./src/day1).

## Project Structure

```text
.
├── scripts/                 # Utility scripts for repository maintenance
├── src/
│   ├── day1/                # Algorithm and data structure implementations
│   ├── golden/              # Reference implementations
│   ├── __tests__/           # Test files
│   ├── array-test.ts        # Array-related experiments
│   ├── graph.ts             # Graph-related code
│   └── utils.ts             # Shared utilities
├── jest.config.ts           # Jest configuration
├── .jest.config.json        # Jest and TypeScript path configuration
├── prettier.config.js       # Prettier configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and npm scripts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/youssefoubrik/algorithms-and-data-structures.git
cd algorithms-and-data-structures
npm install
```

## Available Scripts

Run the test suite:

```bash
npm test
```

Format the TypeScript source files with Prettier:

```bash
npm run prettier
```

Generate repository files or exercises using the project generator:

```bash
npm run generate
```

Run the repository cleanup script:

```bash
npm run clear
```

Display the current course day path:

```bash
npm run day
```

## Testing

Tests are written with [Jest](https://jestjs.io/) and executed through `ts-jest`.

Run all configured tests with:

```bash
npm test
```

To run a specific Jest test or pattern, you can pass additional arguments:

```bash
npx jest <pattern>
```

For example:

```bash
npx jest DFSOnBST
```

## Code Formatting

The project uses [Prettier](https://prettier.io/) for formatting.

Format the source directory with:

```bash
npm run prettier
```

## Contributing

Contributions and improvements are welcome.

When adding a new implementation:

1. Keep the implementation focused and easy to understand.
2. Add or update tests where appropriate.
3. Follow the existing TypeScript style.
4. Run the test suite before opening a pull request.
5. Format changed source files with Prettier.

Because this is primarily a learning repository, explanations, alternative implementations, and complexity notes are especially valuable.

## License

This project is marked as MIT in its package metadata.
