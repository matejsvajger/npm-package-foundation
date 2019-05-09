# Contributing

## Issues

Feel free to [open an issue](https://github.com/matejsvajger/npm-package-foundation/issues/new),
or propose a [pull request](https://github.com/matejsvajger/npm-package-foundation/pulls).
To prevent duplication, please look at [existing issues](https://github.com/matejsvajger/npm-package-foundation/issues?q=is%3Aissue) before posting a new one.

## TL;DR

| Command        | Description                                                                                                |
| -------------- | ---------------------------------------------------------------------------------------------------------- |
| `npm test`     | Runs test suite once using [Jest](http://jestjs.io/).                                                      |
| `npm start`    | Runs test once, watch for changes in dev/test files, then re-runs tests automatically when a file changes. |
| `npm dev`      | Runs builds once, watch for changes in source files, then re-runs build automatically when a file changes. |
| `npm run lint` | Runs [ESLint](https://eslint.org/) linter.                                                                 |

## Getting started

#### Step 1. Checkout repository

_**Prerequisites:** you need to have `git`, `node` (>=8) and `npm` installed_.

```bash
git clone https://github.com/matejsvajger/npm-package-foundation.git
```

_(or your clone's Git URL)_

#### Step 2. Install dependencies

```bash
yarn
```

#### Step 3. Run tests (run-once mode)

```bash
yarn test
```

```log
> package-foundation@1.0.0 test ./npm-package-foundation
> jest

 PASS  specs/lib/index.spec.js
  module
    ✓ exists (4ms)
    ✓ returns true

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.558s, estimated 1s
Ran all test suites.
```

**Note:** Use `npm test -- --coverage` to generate code coverage report in the `coverage` directory, and `open coverage/index.html` to view full HTML report.

#### Step 4. Run tests (TDD mode)

```bash
yarn start
```

## Coding standards

This project follows [JavaScript Standard Style Guide](https://standardjs.com/). It is enforced at build time by [ESLint](http://eslint.org/).

```bash
npm lint
```

**Note:** this is automatically run before the test suite by `npm test`, but not by `npm start`

## Other commands

| Command         | Description                                                                                                                                                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run doc`   | Generates API documentation in `esdoc` folder. Not expected to be run manually, since [ESDoc](https://esdoc.org/) hosting service runs it already.                                                                                |
| `npm run build` | Transpile all files from `src` directory to `dist`, using [Bublé](https://buble.surge.sh/guide/). Not expected to be run manually, since it is automatically run before NPM packaging (`package.json`'s `prepublishOnly` script). |
