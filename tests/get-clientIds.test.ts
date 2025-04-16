import { expect, test, describe, jest } from "@jest/globals";
import getClientIds from "../src/get-clientIds";

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
}));

describe("getClientIds", () => {
  test("should return translations in english", async () => {
    const clientIds = getClientIds("test");
    expect(clientIds).toStrictEqual([
      "welshClient",
      "englishClient",
      "englishClientHmrc",
    ]);
  });
});
