import { expect, test, describe, jest } from "@jest/globals";
import getTranslations from "../src/get-translations";

jest.mock("../clients", () => ({
  __esModule: true,
  cyClient: {
    isAvailableInWelsh: true,
    translations: {
      en: {
        header: "header en",
        linkText: "link text en",
        linkUrl: "link url en",
      },
      cy: {
        header: "header cy",
        linkText: "link text cy",
        linkUrl: {
          production: "link url cy production",
          nonProduction: "link url cy non production",
        },
      },
    },
    clientId: "welshClient",
    showInAccounts: true,
    showInServices: false,
    showInSearchableList: true,
  },
  enClient: {
    isAvailableInWelsh: false,
    translations: {
      en: {
        header: "header en",
        linkText: "link text en",
        linkUrl: "link url en",
        description: "description en",
      },
    },
    clientId: "englishClient",
    showInAccounts: true,
    showInServices: false,
    showInSearchableList: true,
  },
  hmrcClient: {
    isAvailableInWelsh: false,
    translations: {
      en: {
        header: "header en",
        linkText: "link text en",
        linkUrl: "link url en",
        description: "description en",
        hintText: "hint text en",
      },
    },
    clientId: "englishClientHmrc",
    showInAccounts: true,
    showInServices: false,
    showInSearchableList: true,
  },
  internalClient: {
    isAvailableInWelsh: false,
    translations: {
      en: {},
    },
    clientId: "internalClient",
    clientType: "internal",
    showInSearchableList: false,
  },
}));

describe("getTranslations", () => {
  test("should return translations in english", async () => {
    const translations = getTranslations("test", "en");
    expect(translations).toStrictEqual({
      welshClient: {
        header: "header en",
        linkText: "link text en",
        linkUrl: "link url en",
      },
      englishClient: {
        header: "header en",
        linkText: "link text en",
        linkUrl: "link url en",
        description: "description en",
      },
      englishClientHmrc: {
        description: "description en",
        header: "header en",
        hintText: "hint text en",
        linkUrl: "link url en",
        linkText: "link text en",
      },
    });
  });
  test("should return transaltions in welsh", async () => {
    const translations = getTranslations("test", "cy");
    expect(translations).toStrictEqual({
      welshClient: {
        header: "header cy",
        linkText: "link text cy",
        linkUrl: "link url cy non production",
      },
      englishClient: {
        header: "header en",
        linkText: "link text en",
        linkUrl: "link url en",
        description: "description en",
      },
      englishClientHmrc: {
        description: "description en",
        header: "header en",
        hintText: "hint text en",
        linkUrl: "link url en",
        linkText: "link text en",
      },
    });
  });
  test("should return correct environment variables", async () => {
    const translations = getTranslations("production", "cy");
    expect(translations).toStrictEqual({
      welshClient: {
        header: "header cy",
        linkText: "link text cy",
        linkUrl: "link url cy production",
      },
      englishClient: {
        header: "header en",
        linkText: "link text en",
        linkUrl: "link url en",
        description: "description en",
      },
      englishClientHmrc: {
        description: "description en",
        header: "header en",
        hintText: "hint text en",
        linkUrl: "link url en",
        linkText: "link text en",
      },
    });
  });
});
