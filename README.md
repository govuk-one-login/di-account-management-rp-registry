# di-account-management-client-registry

## Prerequisites

We recommend using [`nvm`](https://github.com/nvm-sh/nvm) to install and manage Node.js versions. Run:

```
nvm install
```

from the root of the repository to install the correct version of Node.

## Gitlint

This repository uses [Gitlint](https://jorisroovers.com/gitlint/latest/) to lint git commit messages.

Install Gitlint by running:

```bash
pip install gitlint # or `brew install gitlint` if using the Homebrew package manager
```

## Adding new RPs

- Copy the test client at ./clients/\_testClient.ts
- The file name should be a human readable camel case identifier based on the RP's name
- Update the values as appriopriate
- Update ./clients/index.ts and export the newly created RP
- Use the TypeScript definition in ./interfaces/client.interface.ts to ensure integrity.
- Run the command `npm run test` to verify that there are no integrity errors.

## Updating existing RPs

- Update the values in the corresponding file in the ./clients folder
- Run the command `npm run test` to verify that there are no integrity errors.

## Offboarding RPs

- Locate the RP in ./clients
- Change the `isOffboarded` boolean to `true`
