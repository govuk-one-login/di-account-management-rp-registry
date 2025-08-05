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
        test("should have welsh content if isAvailableInWelsh is true", () => {
          if (client.isAvailableInWelsh) {
            expect(client.translations).toBeDefined();
            expect(client.translations.cy).toBeDefined();
          }
        });
        test("should have isAvailableInWelsh true as Welsh content is available", () => {
          if (client.translations?.cy) {
            expect(client.isAvailableInWelsh).toBeTruthy();
          }
        });
      });

      describe("showInAccounts", () => {
        test("should have header, linkText, linkUrl and description if showInAccounts is true", () => {
          if (client.showInAccounts) {
            expect(client.translations.en.header).toBeDefined();
            expect(client.translations.en.linkText).toBeDefined();
            expect(client.translations.en.linkUrl).toBeDefined();
            expect(client.translations.en.description).toBeDefined();
          }
        });

        test("should have showInServices false and showInAccounts is true", () => {
          if (client.showInAccounts) {
            expect(client.showInServices).toBeFalsy();
          }
        });

        test("should end description with a full stop", () => {
          if (client.showInAccounts) {
            const description = client.translations.en.description;
            expect(typeof description).toBe("string");
            expect(description.trim().endsWith(".")).toBe(true);
          }
        });

        test("should have header, linkText, linkUrl and description in welsh showInAccounts is true", () => {
          if (client.showInAccounts && client.isAvailableInWelsh) {
            expect(client.translations.cy.header).toBeDefined();
            expect(client.translations.cy.linkText).toBeDefined();
            expect(client.translations.cy.linkUrl).toBeDefined();
            expect(client.translations.cy.description).toBeDefined();
          }
        });

        test("should end welsh description with a full stop", () => {
          if (client.showInAccounts && client.isAvailableInWelsh) {
            const description = client.translations.cy.description;
            expect(typeof description).toBe("string");
            expect(description.trim().endsWith(".")).toBe(true);
          }
        });
      });

      describe("showInServices", () => {
        test("should have header, linkText and linkUrl if showInServices is true", () => {
          if (client.showInServices) {
            expect(client.translations.en.header).toBeDefined();
            expect(client.translations.en.linkText).toBeDefined();
            expect(client.translations.en.linkUrl).toBeDefined();
          }
        });

        test("should have showInAccounts false and showInServices is true", () => {
          if (client.showInServices) {
            expect(client.showInAccounts).toBeFalsy();
          }
        });

        test("should have welsh translation if available in welsh and showInServices is true", () => {
          if (client.showInServices && client.isAvailableInWelsh) {
            expect(client.translations.cy.header).toBeDefined();
            expect(client.translations.cy.linkText).toBeDefined();
            expect(client.translations.cy.linkUrl).toBeDefined();
          }
        });

        test("should not have description populated as it is a service, description is only used in accounts", () => {
          if (client.showInServices) {
            expect(client.translations.en.describe).toBeUndefined();
          }
        });
      });

      describe("showDetailedCard", () => {
        test("should have hintText, Pargraph1 and Paragrapgh2 if showDetailedCard is true", () => {
          if (client.showDetailedCard) {
            expect(client.translations.en.hintText).toBeDefined();
            expect(client.translations.en.paragraph1).toBeDefined();
            expect(client.translations.en.paragraph2).toBeDefined();
          }
        });
      });

      describe("showInActivityHistory", () => {
        test("should have header if showInActivityHistory is true", () => {
          if (client.showInActivityHistory) {
            expect(client.translations.en.header).toBeDefined();
          }
        });
        test("should have header in Welsh if showInActivityHistory is true and isAvailableInWelsh is true", () => {
          if (client.showInActivityHistory && client.isAvailableInWelsh) {
            expect(client.translations.cy.header).toBeDefined();
          }
        });
      });

      describe("showInSearchableList", () => {
        test("should have startUrl and startText if showInSearchableList is true", () => {
          if (client.showInSearchableList) {
            expect(client.translations).toBeDefined();
            expect(client.translations.en).toBeDefined();
            expect(client.translations.en.startUrl).toBeTruthy();
            expect(client.translations.en.startText).toBeTruthy();
          }
        });
      });

      describe("showInDeleteAccount", () => {
        test("should have header if showInDeleteAccount is true", () => {
          if (client.showInDeleteAccount) {
            expect(client.translations.en.header).toBeDefined();
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
