# di-account-management-client-registry

## Versioning

This repository adheres to the **Semantic Versioning (SemVer)** specification for managing version numbers.

### Version Format

The version format follows the structure:  
**`MAJOR.MINOR.PATCH`**

- **MAJOR**: Increased for significant changes or incompatible API modifications.
- **MINOR**: Increased when a new RP is onboarded.
- **PATCH**: Increased when we are tweaking an existing RP's configuration.

---

### Versioning Guidelines

#### Initial Version

The starting version of this repository is: `1.0.0`

#### Adding a New Relying Party (RP)

- **Action**: Increment the **MINOR** version.
- **Example**: From `1.0.0` to `1.1.0` when adding a new third party.

#### Updating Configuration for an Existing Third Party

- **Action**: Increment the **PATCH** version.
- **Example**: From `1.1.0` to `1.1.1` when modifying an existing config.

#### Making Breaking Changes or Major Refactoring

- **Action**: Increment the **MAJOR** version and reset **MINOR** and **PATCH** to `0`.
- **Example**: From `1.1.1` to `2.0.0` after introducing incompatible changes.

---

## Tagging a New Version

After making changes to the repository, update the Git tag to reflect the new version.

### Steps to Tag a New Version

1. **Determine the new version number** based on the type of change (see above).
2. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Describe your changes here"
   ```
3. **Tag the commit with the new version**:

   ```bash
   git tag v<MAJOR.MINOR.PATCH>
   ```

   Example:

   ```bash
   git tag v1.1.0
   ```

4. **Push the tag to the remote repository**:
   ```bash
   git push origin --tags
   ```

This ensures that version tags stay aligned with code changes and are visible to all collaborators.

You can then use this tag to update the frontend / backend.
