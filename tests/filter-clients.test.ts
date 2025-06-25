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
    isHmrc: false,
    isReportSuspiciousActivityEnabled: false,
    isActivityLogEnabled: true,
    showInClientSearch: { production: true, nonProduction: true },
    isOffboarded: false,
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
    isHmrc: false,
    isReportSuspiciousActivityEnabled: false,
    isActivityLogEnabled: true,
    showInClientSearch: { production: true, nonProduction: false },
    isOffboarded: false,
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
    isHmrc: true,
    isReportSuspiciousActivityEnabled: false,
    isActivityLogEnabled: true,
    showInClientSearch: { production: true, nonProduction: false },
    isOffboarded: false,
  },
  internalClient: {
    isAvailableInWelsh: false,
    clientId: "internalClient",
    clientType: "internal",
    isHmrc: false,
    isReportSuspiciousActivityEnabled: false,
    isActivityLogEnabled: true,
    showInClientSearch: { production: false, nonProduction: true },
  },
  offboardedClient: {
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
    clientId: "offboardedClient",
    clientType: "account",
    isHmrc: false,
    isReportSuspiciousActivityEnabled: false,
    isActivityLogEnabled: true,
    showInClientSearch: false,
    isOffboarded: true,
  },
}));

describe("filterClient", () => {
  test("should return the client objects that match the given criteria", () => {
    const client = filterClients("test", { isHmrc: true });
    expect(client).toEqual([
      {
        clientId: "hmrcClient",
        clientType: "account",
        isActivityLogEnabled: true,
        isAvailableInWelsh: false,
        isHmrc: true,
        isReportSuspiciousActivityEnabled: false,
        showInClientSearch: false,
        isOffboarded: false,
      },
    ]);
  });

  test("should return correct environment values", () => {
    const client = filterClients("nonProduction", { isAvailableInWelsh: true });
    expect(client).toEqual([
      {
        clientId: "welshClientNonProd",
        clientType: "account",
        isActivityLogEnabled: true,
        isAvailableInWelsh: true,
        isHmrc: false,
        isReportSuspiciousActivityEnabled: false,
        showInClientSearch: true,
        isOffboarded: false,
      },
    ]);
  });

  test("should work with boolean filters", () => {
    const result = filterClients("nonProduction", { isHmrc: true });
    expect(result).toHaveLength(1);
  });

  test("should work with filters that have environment-specific values", () => {
    const result = filterClients("production", { showInClientSearch: true });
    expect(result).toHaveLength(3);

    const result2 = filterClients("nonProduction", {
      showInClientSearch: true,
    });
    expect(result2).toHaveLength(2);

    const result3 = filterClients("production", { showInClientSearch: false });
    expect(result3).toHaveLength(2);

    const result4 = filterClients("nonProduction", {
      showInClientSearch: false,
    });
    expect(result4).toHaveLength(3);
  });

  test('should return clients matching multiple filters (clientType: "account", isOffboarded: false)', () => {
    const result = filterClients("production", {
      clientType: "account",
      isOffboarded: false,
    });
    expect(result).toHaveLength(3);
  });

  test("should return empty array if no clients match the filters", () => {
    const result = filterClients("production", { clientId: "No Match" });
    expect(result).toEqual([]);
  });

  test("should return all clients if no filters are provided", () => {
    const result = filterClients("production");
    expect(result).toHaveLength(5);
  });

  test("should correctly apply environment transformation for production", () => {
    const result = filterClients("production", { isAvailableInWelsh: true });
    expect(result).toEqual([
      {
        clientId: "welshClientProd",
        clientType: "account",
        isActivityLogEnabled: true,
        isAvailableInWelsh: true,
        isHmrc: false,
        isReportSuspiciousActivityEnabled: false,
        showInClientSearch: true,
        isOffboarded: false,
      },
    ]);
  });

  test("should correctly apply environment transformation for nonProduction", () => {
    const result = filterClients("nonProduction", { isAvailableInWelsh: true });
    expect(result).toEqual([
      {
        clientId: "welshClientNonProd",
        clientType: "account",
        isActivityLogEnabled: true,
        isAvailableInWelsh: true,
        isHmrc: false,
        isReportSuspiciousActivityEnabled: false,
        showInClientSearch: true,
        isOffboarded: false,
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
    expect(result).toHaveLength(4);
  });

  test("should return clients matching internal clientType", () => {
    const result = filterClients("production", {
      clientType: "internal",
    });
    expect(result).toHaveLength(1);
  });
});
