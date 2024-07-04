# fullstack application

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

### Storybook

To run storybook aside of development:

```bash
yarn run storybook
```

### Build

To build both the frontend and backend:

```bash
yarn run build
```

This script executes the following sub-scripts:
- `build:frontend`: Builds the frontend using `esbuild`.
- `build:backend`: Builds the backend using TypeScript (`tsc`).
- `build:storybook`: Builds the storybook documentation.

### Start

To start the application in production mode:

```bash
yarn start
```

### Commit

To commit with semantic version support:

```bash
yarn commit
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

---

## Committing and Releasing

This project uses **Commitizen** and **Standard Version** to manage commits and releases in a consistent and automated way.

### Commit Messages

We use **Commitizen** to ensure that all commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. This helps us to automate the generation of the CHANGELOG.md file and the versioning of our project.

To make a commit, use the following command:

```sh
npm run commit
```

This will prompt you to fill in the required fields for your commit message. Please follow the prompts and provide the necessary information. This ensures that your commit messages are consistent and meaningful.

### Releasing

We use **Standard Version** to handle versioning and CHANGELOG generation. The release process is automated through GitHub Actions, which creates a new release and updates the CHANGELOG.md file when changes are merged from the `develop` branch to the `main` branch.

#### Creating a Release

To create a release manually, follow these steps:

1. **Ensure your working directory is clean and up-to-date:**

    ```sh
    git checkout develop
    git pull origin develop
    ```

2. **Merge `develop` into `main`:**

    ```sh
    git checkout main
    git pull origin main
    git merge develop
    ```

3. **Run the release script:**

    ```sh
    npm run release
    ```

    This will:
    - Bump the version number according to the commits since the last release.
    - Update the `CHANGELOG.md` file with the changes.
    - Create a new Git tag for the release.

4. **Push the changes and tags:**

    ```sh
    git push origin main --follow-tags
    ```

    This will trigger the GitHub Actions workflow to ensure the release is properly created and published.

### GitHub Actions Workflow

Our CI/CD pipeline is configured to automate the release process:

- **Branching Strategy:**
  - **Feature Branches**: Develop new features on branches like `feature/branch-name`.
  - **Develop Branch**: Integrate features on the `develop` branch.
  - **Main Branch**: Production-ready code on the `main` branch.

- **Automatic Release Workflow:**
  - When changes are merged from `develop` to `main`, the GitHub Actions workflow is triggered.
  - The workflow runs tests, updates the version, generates the CHANGELOG, and pushes the changes and tags back to the repository.

By following these guidelines, we ensure that our commit history is clean and our release process is consistent and automated.

For more details on the Conventional Commits specification, please refer to the [Conventional Commits documentation](https://www.conventionalcommits.org/en/v1.0.0/).