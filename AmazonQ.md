# Repository purpose (for coding agents)

This repository implements a **Relying Party (RP) registry** for the account management platform. Data in this registry is used to control the way RPs are displayed in the account management system.

At a high level, coding agents should treat it as a service that:

- Stores and manages metadata about RPs (clients/applications that rely on identity services).
- Enforces validation and policy constraints around RP onboarding and lifecycle changes.
- Supports integration points needed by account-management flows (for example: lookup, trust/config checks, and RP status handling).

## Adding new RPs

To add a new RP, agents should

- Copy an existing client from the ./clients folder
- Update the values as appriopriate
- Update ./clients/index.ts and export the newly created RP
- Use the TypeScript definition in ./interfaces/client.interface.ts to ensure integrity.
- Run the command `npm run test` to verify that there are no integrity errors.

## Updating existing RPs

To update an existing RP, agents should

- Update the values in the corresponding file in the ./clients folder
- Run the command `npm run test` to verify that there are no integrity errors.

## Offboarding RPs

To offboard an existing RP, agents should

- Locate the RP in ./clients
- Change the `isOffboarded` boolean to `true`
