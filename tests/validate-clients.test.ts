import { expect, test, describe } from "@jest/globals";

describe("Client data validation", () => {
  const fs = require("fs");
  const path = require("path");
  const clientsDir = path.join(__dirname, "../clients");
  const clientFiles = fs
    .readdirSync(clientsDir)
    .filter((file: string) => file.endsWith(".ts") && file !== "index.ts");
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

        test("should have Welsh tranlations if showInAccounts is not false and isAvailableInWelsh is true", () => {
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

        test("should have Welsh tranlations if showInServices is not false and isAvailableInWelsh is true", () => {
          if (client.showInServices && client.isAvailableInWelsh) {
            expect(client.translations?.cy?.header).toBeDefined();
            expect(client.translations?.cy?.linkText).toBeDefined();
            expect(client.translations?.cy?.linkUrl).toBeDefined();
          }
        });
      });

      describe("showDetailedCard", () => {
        test("should have hintText, pargraph1 and paragrapgh2 if showDetailedCard is not false", () => {
          if (client.showDetailedCard) {
            expect(client.translations?.en?.hintText).toBeDefined();
            expect(client.translations?.en?.paragraph1).toBeDefined();
            expect(client.translations?.en?.paragraph2).toBeDefined();
          }
        });

        test("should have Welsh tranlations if showDetailedCard is not false and isAvailableInWelsh is true", () => {
          if (client.showDetailedCard && client.isAvailableInWelsh) {
            expect(client.translations?.cy?.hintText).toBeDefined();
            expect(client.translations?.cy?.paragraph1).toBeDefined();
            expect(client.translations?.cy?.paragraph2).toBeDefined();
          }
        });
      });

      describe("showInActivityHistory", () => {
        test("should have header if showInActivityHistory is not false", () => {
          if (client.showInActivityHistory) {
            expect(client.translations?.en?.header).toBeDefined();
          }
        });

        test("should have Welsh tranlations if showInActivityHistory is not false and isAvailableInWelsh is true", () => {
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

        test("should have Welsh tranlations if showInSearchableList is not false and isAvailableInWelsh is true", () => {
          if (client.showInSearchableList && client.isAvailableInWelsh) {
            expect(client.translations?.cy?.startUrl).toBeDefined();
            expect(client.translations?.cy?.startText).toBeDefined();
          }
        });
      });

      describe("showInDeleteAccount", () => {
        test("should have header if showInDeleteAccount is not false", () => {
          if (client.showInDeleteAccount) {
            expect(client.translations?.en?.header).toBeDefined();
          }
        });

        test("should have Welsh tranlations if showInDeleteAccount is not false and isAvailableInWelsh is true", () => {
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
