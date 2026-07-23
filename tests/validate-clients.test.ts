import { expect, test, describe } from "@jest/globals";

const fs = require("fs");
const path = require("path");
const clientsDir = path.join(__dirname, "../clients");
const clientFiles = fs
  .readdirSync(clientsDir)
  .filter((file: string) => file.endsWith(".ts") && file !== "index.ts");

describe("Unique client IDs per environment", () => {
  const environments = ["production", "integration", "nonProduction"] as const;

  environments.forEach((env) => {
    test(`client IDs should be unique across all clients for ${env}`, () => {
      const seen = new Map<string, string>();
      const duplicates: string[] = [];

      clientFiles.forEach((file: string) => {
        const client = require(path.join(clientsDir, file)).default;
        const clientId = client.clientId;
        const id = typeof clientId === "string" ? clientId : clientId?.[env];

        if (id) {
          if (seen.has(id)) {
            duplicates.push(
              `"${id}" is used by both ${seen.get(id)} and ${file}`
            );
          } else {
            seen.set(id, file);
          }
        }
      });

      expect(duplicates).toEqual([]);
    });
  });
});

describe("Client data validation", () => {
  const indexFile = path.join(clientsDir, "index.ts");

  clientFiles.forEach((file: string) => {
    const client = require(path.join(clientsDir, file)).default;
    describe(`${file}`, () => {
      describe("isAvailableInWelsh", () => {
        test("should have Welsh content if isAvailableInWelsh is true", () => {
          if (client.isAvailableInWelsh) {
            expect(client.translations?.cy).toBeDefined();
          }
        });
        test("isAvailableInWelsh should be true if Welsh content is available", () => {
          if (client.translations?.cy) {
            expect(client.isAvailableInWelsh).toBeTruthy();
          }
        });
      });

      describe("showInAccounts", () => {
        test("should have header, linkText, linkUrl and description if showInAccounts is not false", () => {
          if (client.showInAccounts) {
            expect(client.translations?.en?.header).toBeDefined();
            expect(client.translations?.en?.linkText).toBeDefined();
            expect(client.translations?.en?.linkUrl).toBeDefined();
            expect(client.translations?.en?.description).toBeDefined();
          }
        });

        test("showInServices should be false if showInAccounts is not false", () => {
          if (client.showInAccounts) {
            expect(client.showInServices).toBeFalsy();
          }
        });

        test("should have Welsh translations if showInAccounts is not false and isAvailableInWelsh is true", () => {
          if (client.showInAccounts && client.isAvailableInWelsh) {
            expect(client.translations?.cy?.header).toBeDefined();
            expect(client.translations?.cy?.linkText).toBeDefined();
            expect(client.translations?.cy?.linkUrl).toBeDefined();
            expect(client.translations?.cy?.description).toBeDefined();
          }
        });

        test("descriptions should end with a full stop", () => {
          if (client.showInAccounts) {
            expect(
              client.translations?.en?.description.trim().endsWith(".")
            ).toBe(true);

            if (client.isAvailableInWelsh) {
              expect(
                client.translations?.cy?.description.trim().endsWith(".")
              ).toBe(true);
            }
          }
        });
      });

      describe("showInServices", () => {
        test("should have header, linkText and linkUrl if showInServices is not false", () => {
          if (client.showInServices) {
            expect(client.translations?.en?.header).toBeDefined();
            expect(client.translations?.en?.linkText).toBeDefined();
            expect(client.translations?.en?.linkUrl).toBeDefined();
          }
        });

        test("showInAccounts should be false and showInServices is not false", () => {
          if (client.showInServices) {
            expect(client.showInAccounts).toBeFalsy();
          }
        });

        test("should have Welsh translations if showInServices is not false and isAvailableInWelsh is true", () => {
          if (client.showInServices && client.isAvailableInWelsh) {
            expect(client.translations?.cy?.header).toBeDefined();
            expect(client.translations?.cy?.linkText).toBeDefined();
            expect(client.translations?.cy?.linkUrl).toBeDefined();
          }
        });

        test("should not have description if showInServices is not false", () => {
          if (client.showInServices) {
            expect(client.translations?.en?.description).not.toBeDefined();
            expect(client.translations?.cy?.description).not.toBeDefined();
          }
        });
      });

      describe("showInActivityHistory", () => {
        test("should have header if showInActivityHistory is not false", () => {
          if (client.showInActivityHistory) {
            expect(client.translations?.en?.header).toBeDefined();
          }
        });

        test("should have Welsh translations if showInActivityHistory is not false and isAvailableInWelsh is true", () => {
          if (client.showInActivityHistory && client.isAvailableInWelsh) {
            expect(client.translations?.cy?.header).toBeDefined();
          }
        });
      });

      describe("showInSearchableList", () => {
        test("should have startUrl and startText if showInSearchableList is not false", () => {
          if (
            typeof client.showInSearchableList === "object" &&
            Object.prototype.hasOwnProperty.call(
              client.showInSearchableList,
              "production"
            )
          ) {
            Object.values(client.showInSearchableList).forEach(
              (showInSearchableList) => {
                if (showInSearchableList) {
                  expect(client.translations?.en?.startUrl).toBeDefined();
                  expect(client.translations?.en?.startText).toBeDefined();
                }
              }
            );
          } else if (client.showInSearchableList) {
            expect(client.translations?.en?.startUrl).toBeDefined();
            expect(client.translations?.en?.startText).toBeDefined();
          }
        });

        test("should have Welsh translations if showInSearchableList is not false and isAvailableInWelsh is true", () => {
          if (client.showInSearchableList && client.isAvailableInWelsh) {
            expect(client.translations?.cy?.startUrl).toBeDefined();
            expect(client.translations?.cy?.startText).toBeDefined();
          }
        });

        test("should not have startUrl and startText if showInSearchableList is false", () => {
          if (!client.showInSearchableList) {
            expect(client.translations?.cy?.startUrl).not.toBeDefined();
            expect(client.translations?.cy?.startText).not.toBeDefined();
            expect(client.translations?.en?.startUrl).not.toBeDefined();
            expect(client.translations?.en?.startText).not.toBeDefined();
        }});
      });

      describe("showInDeleteAccount", () => {
        test("should have header if showInDeleteAccount is not false", () => {
          if (client.showInDeleteAccount) {
            expect(client.translations?.en?.header).toBeDefined();
          }
        });

        test("should have Welsh translations if showInDeleteAccount is not false and isAvailableInWelsh is true", () => {
          if (client.showInDeleteAccount && client.isAvailableInWelsh) {
            expect(client.translations?.cy?.header).toBeDefined();
          }
        });
      });

      describe("clients/index.ts exports", () => {
        const indexContent = fs.readFileSync(indexFile, "utf8");
        const missingExports = clientFiles.filter((file: string) => {
          const baseName = file.replace(/\.ts$/, "");
          return !new RegExp(baseName).test(indexContent);
        });

        expect(missingExports).toEqual([]);
      });

      describe("URL validation", () => {
        test("linkUrl should start with http:// or https:// if defined", () => {
          if (client.translations?.en?.linkUrl) {
            const linkUrl = client.translations.en.linkUrl;
            if (typeof linkUrl === "string") {
              expect(linkUrl).toMatch(/^https?:\/\//);
            } else if (typeof linkUrl === "object") {
              Object.values(linkUrl).forEach((url) => {
                expect(url).toMatch(/^https?:\/\//);
              });
            }
          }
        });

        test("startUrl should start with http:// or https:// if defined", () => {
          if (client.translations?.en?.startUrl) {
            const startUrl = client.translations.en.startUrl;
            if (typeof startUrl === "string") {
              expect(startUrl).toMatch(/^https?:\/\//);
            } else if (typeof startUrl === "object") {
              Object.values(startUrl).forEach((url) => {
                expect(url).toMatch(/^https?:\/\//);
              });
            }
          }
        });
      });
    });
  });
});
