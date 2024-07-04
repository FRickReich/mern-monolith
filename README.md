# envoii-fullstack application

This application is a fullstack application with a frontend in React and a backend in Express.js using TypeScript. 

## Package Scripts

The scripts in this project assist in managing build processes, tests, code quality checks, and more.

### Cleaning

To clean up the environment before a new build or a test:

```bash
yarn run clean
```

This script executes the following sub-scripts:
- `clean:build`: Deletes the `build` directory.
- `clean:docs`: Deletes the `docs` directory.
- `clean:coverage`: Deletes the `coverage` directory.
- `clean:install`: Deletes the `node_modules` directory and `yarn.lock` file.

### Build

To build both the frontend and backend:

```bash
yarn run build
```

This script executes the following sub-scripts:
- `build:frontend`: Builds the frontend using `esbuild`.
- `build:backend`: Builds the backend using TypeScript (`tsc`).

### Start

To start the application in production mode:

```bash
yarn start
```

This starts the backend compiled in the `build` directory.

### Development (Watch)

To start the development environment with automatic restart:

```bash
yarn run watch
```

This starts both frontend (`watch:frontend`) and backend (`watch:backend`).

### Linting and Formatting

To check and format the code:

```bash
yarn run lint
```

Runs linting for both backend and frontend.

```bash
yarn run lint:fix
```

Runs linting and automatically fixes fixable issues.

```bash
yarn run format
```

Formats the code using `prettier`.

### Tests and Code Coverage

To run tests and generate code coverage:

```bash
yarn run test
```

Runs tests for both backend and frontend.

```bash
yarn run coverage
```

Cleans coverage data and then generates code coverage for both backend and frontend.

### Type Checking

To check types in your code:

```bash
yarn run type-check
```

Runs type checking for both backend and frontend.

### Documentation

To generate documentation for frontend and backend:

```bash
yarn run docs
```

Generates documentation using `typedoc` for both frontend and backend.

### Continuous Integration (CI)

Summary of tasks for integration into a Continuous Integration environment:

```bash
yarn run ci
```

Runs linting, type checking, tests, and build in a pipeline.

### Preparation (Prepare)

For preparation before installation or publishing:

```bash
yarn run prepare
```

Runs formatting, linting, and tests.

## Notes

- Ensure `yarn` is installed to execute these scripts.
- Customize configuration files (`tsconfig.frontend.json`, `tsconfig.backend.json`, `jest.frontend.config.js`, `jest.backend.config.js`, `.eslintrc.backend.js`, `.eslintrc.frontend.js`) found in the `./config` directory according to your project requirements.
