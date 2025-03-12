import { expect, test, describe, jest } from "@jest/globals";
import filterClients from "../src/filter-clients";

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
    clientId: {
      production: "welshClientProd",
      nonProduction: "welshClientNonProd",
    },
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
    clientId: "hmrcClient",
    clientType: "account",
    isAllowed: true,
    isHmrc: true,
    isReportSuspiciousActivityEnabled: false,
    showInClientSearch: true,
  },
}));

describe("filterClient", () => {
  test("should return the client objects that match the given criteria", () => {
    const client = filterClients("test", { isHmrc: true });
    expect(client).toEqual([
      {
        clientId: "hmrcClient",
        clientType: "account",
        isAllowed: true,
        isAvailableInWelsh: false,
        isHmrc: true,
        isReportSuspiciousActivityEnabled: false,
        showInClientSearch: true,
      },
    ]);
  });

  test("should return correct environment values", () => {
    const client = filterClients("nonProduction", { isAvailableInWelsh: true });
    expect(client).toEqual([
      {
        clientId: "welshClientNonProd",
        clientType: "account",
        isAllowed: true,
        isAvailableInWelsh: true,
        isHmrc: false,
        isReportSuspiciousActivityEnabled: false,
        showInClientSearch: true,
      },
    ]);
  });

  test('should return clients matching multiple filters (clientType: "account", isAllowed: true)', () => {
    const result = filterClients("production", {
      clientType: "account",
      isAllowed: true,
    });
    expect(result).toHaveLength(3);
  });

  test("should return empty array if no clients match the filters", () => {
    const result = filterClients("production", { clientId: "No Match" });
    expect(result).toEqual([]);
  });

  test("should return all clients if no filters are provided", () => {
    const result = filterClients("production");
    expect(result).toHaveLength(3);
  });

  test("should correctly apply environment transformation for production", () => {
    const result = filterClients("production", { isAvailableInWelsh: true });
    expect(result).toEqual([
      {
        clientId: "welshClientProd",
        clientType: "account",
        isAllowed: true,
        isAvailableInWelsh: true,
        isHmrc: false,
        isReportSuspiciousActivityEnabled: false,
        showInClientSearch: true,
      },
    ]);
  });

  test("should correctly apply environment transformation for nonProduction", () => {
    const result = filterClients("nonProduction", { isAvailableInWelsh: true });
    expect(result).toEqual([
      {
        clientId: "welshClientNonProd",
        clientType: "account",
        isAllowed: true,
        isAvailableInWelsh: true,
        isHmrc: false,
        isReportSuspiciousActivityEnabled: false,
        showInClientSearch: true,
      },
    ]);
  });

  test("should return empty array when filtering by non-existent key", () => {
    const result = filterClients("production", {
      nonExistentKey: "someValue",
    } as any);
    expect(result).toEqual([]);
  });

  test("should correctly handle falsy values in filters", () => {
    const result = filterClients("production", { isHmrc: false });
    expect(result).toHaveLength(2);
  });
});
