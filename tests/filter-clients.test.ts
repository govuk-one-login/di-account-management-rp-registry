import {
  expect,
  test,
  describe,
  jest,
  beforeEach,
  afterEach,
} from "@jest/globals";
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
  datedClient1: {
    isAvailableInWelsh: false,
    translations: {
      en: {
        header: "header en",
        linkText: "link text en",
        linkUrl: "link url en",
        description: "description en",
      },
    },
    clientId: "datedClient1",
    showInAccounts: new Date(2025, 7, 29),
    showInServices: new Date(2025, 7, 29),
    showDetailedCard: new Date(2025, 7, 29),
    showInActivityHistory: new Date(2025, 7, 29),
    showInDeleteAccount: new Date(2025, 7, 29),
    showInSearchableList: {
      production: new Date(2025, 7, 29),
      nonProduction: false,
    },
    isOffboarded: new Date(2025, 7, 29),
  },
  datedClient2: {
    isAvailableInWelsh: true,
    translations: {
      en: {
        header: "header en",
        linkText: "link text en",
        linkUrl: "link url en",
        description: "description en",
      },
    },
    clientId: "datedClient2",
    showInAccounts: new Date(2025, 7, 29),
    showInServices: new Date(2025, 7, 29),
    showDetailedCard: new Date(2025, 7, 29),
    showInActivityHistory: new Date(2025, 7, 29),
    showInDeleteAccount: new Date(2025, 7, 29),
    showInSearchableList: {
      production: new Date(2025, 7, 29),
      nonProduction: true,
    },
    isOffboarded: new Date(2025, 7, 29),
  },
}));

describe("filterClient", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(1970, 11, 31).getTime());
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

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

    jest.setSystemTime(new Date(2099, 11, 31).getTime());

    const client2 = filterClients("test", { showDetailedCard: true });
    expect(client2).toEqual([
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
      {
        clientId: "datedClient1",
        showInAccounts: true,
        showInServices: true,
        showInActivityHistory: true,
        showInDeleteAccount: true,
        isAvailableInWelsh: false,
        showDetailedCard: true,
        showInSearchableList: false,
        isOffboarded: true,
      },
      {
        clientId: "datedClient2",
        showInAccounts: true,
        showInServices: true,
        showInActivityHistory: true,
        showInDeleteAccount: true,
        isAvailableInWelsh: true,
        showDetailedCard: true,
        showInSearchableList: true,
        isOffboarded: true,
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
      {
        clientId: "datedClient2",
        showInAccounts: false,
        showInServices: false,
        showInActivityHistory: false,
        showInDeleteAccount: false,
        isAvailableInWelsh: true,
        showDetailedCard: false,
        showInSearchableList: true,
        isOffboarded: false,
      },
    ]);

    jest.setSystemTime(new Date(2099, 11, 31).getTime());

    const client2 = filterClients("nonProduction", {
      isAvailableInWelsh: true,
    });
    expect(client2).toEqual([
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
      {
        clientId: "datedClient2",
        showInAccounts: true,
        showInServices: true,
        showInActivityHistory: true,
        showInDeleteAccount: true,
        isAvailableInWelsh: true,
        showDetailedCard: true,
        showInSearchableList: true,
        isOffboarded: true,
      },
    ]);
  });

  test("should work with filters that have environment-specific values", () => {
    const result = filterClients("production", { showInSearchableList: true });
    expect(result).toHaveLength(3);

    const result2 = filterClients("nonProduction", {
      showInSearchableList: true,
    });
    expect(result2).toHaveLength(3);

    const result3 = filterClients("production", {
      showInSearchableList: false,
    });
    expect(result3).toHaveLength(4);

    const result4 = filterClients("nonProduction", {
      showInSearchableList: false,
    });
    expect(result4).toHaveLength(4);

    jest.setSystemTime(new Date(2099, 11, 31).getTime());

    const result5 = filterClients("production", { showInSearchableList: true });
    expect(result5).toHaveLength(5);

    const result6 = filterClients("nonProduction", {
      showInSearchableList: true,
    });
    expect(result6).toHaveLength(3);

    const result7 = filterClients("production", {
      showInSearchableList: false,
    });
    expect(result7).toHaveLength(2);

    const result8 = filterClients("nonProduction", {
      showInSearchableList: false,
    });
    expect(result8).toHaveLength(4);
  });

  test("should work with boolean filters", () => {
    const result = filterClients("nonProduction", { showDetailedCard: true });
    expect(result).toHaveLength(1);

    jest.setSystemTime(new Date(2099, 11, 31).getTime());

    const result2 = filterClients("nonProduction", { showDetailedCard: true });
    expect(result2).toHaveLength(3);
  });

  test("should return clients matching multiple filters (showInAccounts: true, isOffboarded: false)", () => {
    const result = filterClients("production", {
      showInAccounts: true,
      showInServices: false,
      isOffboarded: false,
    });
    expect(result).toHaveLength(3);

    jest.setSystemTime(new Date(2099, 11, 31).getTime());

    const result2 = filterClients("production", {
      showInAccounts: true,
      showInServices: false,
      isOffboarded: false,
    });
    expect(result2).toHaveLength(3);
  });

  test("should return empty array if no clients match the filters", () => {
    const result = filterClients("production", { clientId: "No Match" });
    expect(result).toEqual([]);

    jest.setSystemTime(new Date(2099, 11, 31).getTime());

    const result2 = filterClients("production", { clientId: "No Match" });
    expect(result2).toEqual([]);
  });

  test("should return all clients if no filters are provided", () => {
    const result = filterClients("production");
    expect(result).toHaveLength(7);

    jest.setSystemTime(new Date(2099, 11, 31).getTime());

    const result2 = filterClients("production");
    expect(result2).toHaveLength(7);
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
      {
        clientId: "datedClient2",
        isAvailableInWelsh: true,
        isOffboarded: false,
        showDetailedCard: false,
        showInAccounts: false,
        showInActivityHistory: false,
        showInDeleteAccount: false,
        showInSearchableList: false,
        showInServices: false,
      },
    ]);

    jest.setSystemTime(new Date(2099, 11, 31).getTime());

    const result2 = filterClients("production", { isAvailableInWelsh: true });
    expect(result2).toEqual([
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
      {
        clientId: "datedClient2",
        isAvailableInWelsh: true,
        isOffboarded: true,
        showDetailedCard: true,
        showInAccounts: true,
        showInActivityHistory: true,
        showInDeleteAccount: true,
        showInSearchableList: true,
        showInServices: true,
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
      {
        clientId: "datedClient2",
        isAvailableInWelsh: true,
        isOffboarded: false,
        showDetailedCard: false,
        showInAccounts: false,
        showInActivityHistory: false,
        showInDeleteAccount: false,
        showInSearchableList: true,
        showInServices: false,
      },
    ]);

    jest.setSystemTime(new Date(2099, 11, 31).getTime());

    const result2 = filterClients("nonProduction", {
      isAvailableInWelsh: true,
    });
    expect(result2).toEqual([
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
      {
        clientId: "datedClient2",
        isAvailableInWelsh: true,
        isOffboarded: true,
        showDetailedCard: true,
        showInAccounts: true,
        showInActivityHistory: true,
        showInDeleteAccount: true,
        showInSearchableList: true,
        showInServices: true,
      },
    ]);
  });

  test("should return empty array when filtering by non-existent key", () => {
    const result = filterClients("production", {
      nonExistentKey: "someValue",
    } as any);
    expect(result).toEqual([]);

    jest.setSystemTime(new Date(2099, 11, 31).getTime());

    const result2 = filterClients("production", {
      nonExistentKey: "someValue",
    } as any);
    expect(result2).toEqual([]);
  });

  test("should correctly handle falsy values in filters", () => {
    const result = filterClients("production", { showDetailedCard: false });
    expect(result).toHaveLength(6);

    jest.setSystemTime(new Date(2099, 11, 31).getTime());

    const result2 = filterClients("production", { showDetailedCard: false });
    expect(result2).toHaveLength(4);
  });
});
