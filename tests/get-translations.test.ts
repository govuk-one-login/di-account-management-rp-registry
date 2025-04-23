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
    clientType: "account",
    isAllowed: true,
    isHmrc: false,
    isReportSuspiciousActivityEnabled: false,
    showInClientSearch: true,
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
    clientType: "account",
    isAllowed: true,
    isHmrc: false,
    isReportSuspiciousActivityEnabled: false,
    showInClientSearch: true,
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
        paragraph1: "paragraph 1 en",
        paragraph2: "paragraph 2 en",
      },
    },
    clientId: "englishClientHmrc",
    clientType: "account",
    isAllowed: true,
    isHmrc: false,
    isReportSuspiciousActivityEnabled: false,
    showInClientSearch: true,
  },
  internalClient: {
    isAvailableInWelsh: false,
    translations: {
      en: {},
    },
    clientId: "internalClient",
    clientType: "internal",
    isAllowed: true,
    isHmrc: false,
    isReportSuspiciousActivityEnabled: false,
    showInClientSearch: false,
  },
}));

describe("getTranslations", () => {
  test("should return translations in english", async () => {
    const translations = getTranslations("test", "en");
    expect(translations).toStrictEqual({
      welshClient: {
        header: "header en",
        link_text: "link text en",
        link_href: "link url en",
      },
      englishClient: {
        header: "header en",
        link_text: "link text en",
        link_href: "link url en",
        description: "description en",
      },
      englishClientHmrc: {
        description: "description en",
        header: "header en",
        hint_text: "hint text en",
        link_href: "link url en",
        link_text: "link text en",
        paragraph1: "paragraph 1 en",
        paragraph2: "paragraph 2 en",
      },
    });
  });
  test("should return transaltions in welsh", async () => {
    const translations = getTranslations("test", "cy");
    expect(translations).toStrictEqual({
      welshClient: {
        header: "header cy",
        link_text: "link text cy",
        link_href: "link url cy non production",
      },
      englishClient: {
        header: "header en",
        link_text: "link text en",
        link_href: "link url en",
        description: "description en",
      },
      englishClientHmrc: {
        description: "description en",
        header: "header en",
        hint_text: "hint text en",
        link_href: "link url en",
        link_text: "link text en",
        paragraph1: "paragraph 1 en",
        paragraph2: "paragraph 2 en",
      },
    });
  });
  test("should return correct environment variables", async () => {
    const translations = getTranslations("production", "cy");
    expect(translations).toStrictEqual({
      welshClient: {
        header: "header cy",
        link_text: "link text cy",
        link_href: "link url cy production",
      },
      englishClient: {
        header: "header en",
        link_text: "link text en",
        link_href: "link url en",
        description: "description en",
      },
      englishClientHmrc: {
        description: "description en",
        header: "header en",
        hint_text: "hint text en",
        link_href: "link url en",
        link_text: "link text en",
        paragraph1: "paragraph 1 en",
        paragraph2: "paragraph 2 en",
      },
    });
  });
});
