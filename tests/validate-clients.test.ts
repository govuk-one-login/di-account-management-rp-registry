import { expect, test, describe } from "@jest/globals";

describe("Client data validation", () => {
  const fs = require("fs");
  const path = require("path");
  const clientsDir = path.join(__dirname, "../clients");
  const clientFiles = fs
    .readdirSync(clientsDir)
    .filter((file: string) => file.endsWith(".ts") && file !== "index.ts");

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

        test("should have welsh header, linkText and linkUrl if isAvailableInWelsh is true", () => {
          if (client.isAvailableInWelsh) {
            expect(client.translations.cy.header).toBeDefined();
            expect(client.translations.cy.linkText).toBeDefined();
            expect(client.translations.cy.linkUrl).toBeDefined();
          }
        });
      });

      describe("showInAccounts", () => {
        test("should have header, linkText and linkUrl if showInAccounts is true", () => {
          if (client.showInAccounts) {
            expect(client.translations.en.header).toBeDefined();
            expect(client.translations.en.linkText).toBeDefined();
            expect(client.translations.en.linkUrl).toBeDefined();
          }
        });

        test("should have showInServices false and showInAccounts is true", () => {
          if (client.showInAccounts) {
            expect(client.showInServices).toBeFalsy();
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
    });
  });
});
