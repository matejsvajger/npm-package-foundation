# npm-package-foundation

Skeleton for a simple NPM Package with ES2015 support and CI already configured.

#### Pre-configured development tools

- [<img alt="Bublé" src="https://buble.surge.sh/favicon.png" height="16"> Bublé](https://buble.surge.sh/guide/)
- [<img alt="ESLint" src="https://eslint.org/img/favicon.512x512.png" height="16"> ESLint](https://eslint.org/) with [`airbnb-base` config](https://www.npmjs.com/package/eslint-config-airbnb-base)
- [<img alt="Prettier" src="https://prettier.io/icon.png" height="16"> Prettier](https://prettier.io/)
- [<img alt="Jest" src="https://jestjs.io/img/favicon/favicon.ico" height="16"> Jest](https://jestjs.io/)
- [<img alt="EditorConfig" src="https://editorconfig.org/favicon.ico" height="16"> EditorConfig](https://editorconfig.org/)

#### Pre-configured CI tools

- [<img alt="Travis CI" src="https://cdn.travis-ci.org/images/favicon-076a22660830dc325cc8ed70e7146a59.png" height="16"> Travis CI](https://travis-ci.org/) continuous integration platform
- [<img alt="NPM" src="https://static.npmjs.com/da3ab40fb0861d15c83854c29f5f2962.png" height="16"> NPM automatic releasing](https://docs.travis-ci.com/user/deployment/npm)
- [<img alt="Codecov" src="https://codecov.io/static/favicons/favicon-16x16.png" height="16"> Codecov](https://codecov.io/) code coverage reporting
- [<img alt="ESDoc" src="https://esdoc.org/favicon.ico" height="16"> ESDoc](https://esdoc.org/)

## Getting started

1. Add this project as `skeleton` remote:

- For a new project:
  ```sh
  mkdir my-project && cd my-project
  git init
  git remote add skeleton https://github.com/matejsvajger/npm-package-foundation.git
  git remote set-url skeleton --push "Error: skeleton remote is read-only" # Disable pushing on skeleton
  git config remote.skeleton.tagOpt --no-tags # Disable fetching tags on skeleton
  git remote add origin <YOUR GIT REPOSITORY URL>
  git pull skeleton master --no-tags
  git push -u origin master
  ```

2.

- Set initial version (ex: `0.1.0`) in `package.json`
- Set `scriptName` in config of `package.json` for umd builds.

3. Replace the following occurrences

- [ ] `matejsvajger/npm-package-foundation` → _your repo slug_
- [ ] `npm-package-foundation` → _your project name_
- [ ] `package-foundation` → _your NPM package name_
- [ ] `Matej Svajger` → _your name_
- [ ] `hello@matejsvajger.com` → _your public email address_
- [ ] `https://matejsvajger.com` → _your website_

4. Import project in CI tools:

- [ ] [Travis CI](https://travis-ci.org/)
- [ ] [Codecov](https://codecov.io/)
- [ ] [ESDoc](https://doc.esdoc.org/-/generate.html)

5. Add the following environment variables in your new Travis CI project's settings:

- [ ] `NPM_AUTH_TOKEN`: NPM authentication token, used for automatic NPM releasing. See [documentation](https://docs.travis-ci.com/user/deployment/npm).

6. Cleanup `README.md` by removing all documentation related to the skeleton.

## Usage

### Automatic releasing process

> _Note:_ you can try this process safely by releasing an "alpha" version. Ex: 0.1.0-alpha.2

- [ ] Update the package version in `package.json` (ex: `1.2.1`), commit it, and push it.
- [ ] Tag the previously created commit (ex: `v1.2.1`), and push it (`git push --tags`).
- Travis build runs on tagged commit
- New package version is automatically released after tests have passed

## License

This project is released under [MIT License](LICENSE.md).

---

## **Note:** the content after this is the actual package documentation (to be edited after cloning).

# npm-package-foundation

[![Latest Stable Version](https://img.shields.io/npm/v/package-foundation.svg)](https://www.npmjs.com/package/package-foundation)
[![Build Status](https://img.shields.io/travis/matejsvajger/npm-package-foundation/master.svg)](https://travis-ci.org/matejsvajger/npm-package-foundation)
[![NPM Downloads](https://img.shields.io/npm/dm/package-foundation.svg)](https://www.npmjs.com/package/package-foundation)

[![dependencies Status](https://david-dm.org/matejsvajger/npm-package-foundation/status.svg)](https://david-dm.org/matejsvajger/npm-package-foundation)
[![Test Coverage](https://img.shields.io/codecov/c/github/matejsvajger/npm-package-foundation/master.svg)](https://codecov.io/github/matejsvajger/npm-package-foundation?branch=master)
[![API Documentation](https://doc.esdoc.org/github.com/matejsvajger/npm-package-foundation/badge.svg)](https://doc.esdoc.org/github.com/matejsvajger/npm-package-foundation/)

## Installation

Prerequisites: [Node.js](https://nodejs.org/) 8+, **npm** 3+.

    npm install --save package-foundation

## Usage

### ES5

    var xxx = require('package-foundation').default;

### ES2015+

    import xxx from 'package-foundation';

## Contributing

Please refer to the [guidelines for contributing](./CONTRIBUTING.md).

[![devDependencies Status](https://david-dm.org/matejsvajger/npm-package-foundation/dev-status.svg)](https://david-dm.org/matejsvajger/npm-package-foundation?type=dev)

## License

[![License](https://img.shields.io/npm/l/package-foundation.svg)](LICENSE.md)

---
