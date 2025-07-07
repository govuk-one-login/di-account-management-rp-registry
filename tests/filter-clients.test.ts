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
    showInAccounts: true,
    showDetailedCard: false,
    showInActivityHistory: true,
    showInSearchableList: { production: true, nonProduction: true },
    isOffboarded: false,
    showInDeleteAccount: true,
    showInServices: false,
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
    showDetailedCard: false,
    showInActivityHistory: true,
    showInSearchableList: { production: true, nonProduction: false },
    isOffboarded: false,
    showInDeleteAccount: false,
    showInServices: false,
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
    showInAccounts: true,
    showDetailedCard: true,
    showInActivityHistory: true,
    showInSearchableList: { production: true, nonProduction: false },
    isOffboarded: false,
    showInDeleteAccount: true,
    showInServices: false,
  },
  internalClient: {
    isAvailableInWelsh: false,
    clientId: "internalClient",
    clientType: "internal",
    showDetailedCard: false,
    showInActivityHistory: true,
    showInSearchableList: { production: false, nonProduction: true },
    showInDeleteAccount: false,
    showInServices: false,
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
    showInAccounts: true,
    showDetailedCard: false,
    showInActivityHistory: true,
    showInSearchableList: false,
    isOffboarded: true,
    showInDeleteAccount: false,
    showInServices: false,
  },
}));

describe("filterClient", () => {
  test("should return the client objects that match the given criteria", () => {
    const client = filterClients("test", { showDetailedCard: true });
    expect(client).toEqual([
      {
        clientId: "hmrcClient",
        showInAccounts: true,
        showInServices: false,
        showInActivityHistory: true,
        showInDeleteAccount: true,
        isAvailableInWelsh: false,
        showDetailedCard: true,
        showInSearchableList: false,
        isOffboarded: false,
      },
    ]);
  });

  test("should return correct environment values", () => {
    const client = filterClients("nonProduction", { isAvailableInWelsh: true });
    expect(client).toEqual([
      {
        clientId: "welshClientNonProd",
        showInAccounts: true,
        showInServices: false,
        showInActivityHistory: true,
        showInDeleteAccount: true,
        isAvailableInWelsh: true,
        showDetailedCard: false,
        showInSearchableList: true,
        isOffboarded: false,
      },
    ]);
  });

  test("should work with filters that have environment-specific values", () => {
    const result = filterClients("production", { showInSearchableList: true });
    expect(result).toHaveLength(3);

    const result2 = filterClients("nonProduction", {
      showInSearchableList: true,
    });
    expect(result2).toHaveLength(2);

    const result3 = filterClients("production", {
      showInSearchableList: false,
    });
    expect(result3).toHaveLength(2);

    const result4 = filterClients("nonProduction", {
      showInSearchableList: false,
    });
    expect(result4).toHaveLength(3);
  });

  test("should work with boolean filters", () => {
    const result = filterClients("nonProduction", { showDetailedCard: true });
    expect(result).toHaveLength(1);
  });

  test("should return clients matching multiple filters (showInAccounts: true, isOffboarded: false)", () => {
    const result = filterClients("production", {
      showInAccounts: true,
      showInServices: false,
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
        showInAccounts: true,
        showInServices: false,
        showInActivityHistory: true,
        showInDeleteAccount: true,
        isAvailableInWelsh: true,
        showDetailedCard: false,

        showInSearchableList: true,
        isOffboarded: false,
      },
    ]);
  });

  test("should correctly apply environment transformation for nonProduction", () => {
    const result = filterClients("nonProduction", { isAvailableInWelsh: true });
    expect(result).toEqual([
      {
        clientId: "welshClientNonProd",
        showInAccounts: true,
        showInServices: false,
        showInActivityHistory: true,
        showInDeleteAccount: true,
        isAvailableInWelsh: true,
        showDetailedCard: false,
        showInSearchableList: true,
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
    const result = filterClients("production", { showDetailedCard: false });
    expect(result).toHaveLength(4);
  });
});
