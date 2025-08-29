import { expect, test, describe, jest, afterEach } from "@jest/globals";
import getClient from "../src/get-client";

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
    showInServices: false,
    showDetailedCard: false,
    showInActivityHistory: true,
    showInDeleteAccount: true,
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
    showDetailedCard: false,
    showInActivityHistory: true,
    showInDeleteAccount: true,
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
        paragraph1: "paragraph 1 en",
        paragraph2: "paragraph 2 en",
      },
    },
    clientId: "englishClient",
    showInAccounts: true,
    showInServices: false,
    showDetailedCard: false,
    showInActivityHistory: true,
    showInDeleteAccount: true,
    showInSearchableList: true,
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

describe("getClient", () => {
  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  test("should return the client object for the given clientId", () => {
    const client = getClient("test", "welshClientNonProd");
    expect(client).toEqual({
      clientId: "welshClientNonProd",
      showInAccounts: true,
      showInServices: false,
      showInActivityHistory: true,
      showInDeleteAccount: true,
      isAvailableInWelsh: true,
      showDetailedCard: false,
      showInSearchableList: true,
    });
  });

  test("should return correct environment values", () => {
    const client = getClient("production", "welshClientProd");
    expect(client).toEqual({
      clientId: "welshClientProd",
      showInAccounts: true,
      showInServices: false,
      showInActivityHistory: true,
      showInDeleteAccount: true,
      isAvailableInWelsh: true,
      showDetailedCard: false,
      showInSearchableList: true,
    });
  });

  test("should return true for dated properties which are in the past", () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2099, 11, 31).getTime());

    expect(getClient("production", "datedClient1")).toEqual({
      clientId: "datedClient1",
      showInAccounts: true,
      showInServices: true,
      showInActivityHistory: true,
      showInDeleteAccount: true,
      isAvailableInWelsh: false,
      showDetailedCard: true,
      showInSearchableList: true,
      isOffboarded: true,
    });

    expect(getClient("test", "datedClient1")).toEqual({
      clientId: "datedClient1",
      showInAccounts: true,
      showInServices: true,
      showInActivityHistory: true,
      showInDeleteAccount: true,
      isAvailableInWelsh: false,
      showDetailedCard: true,
      showInSearchableList: false,
      isOffboarded: true,
    });
  });

  test("should return false for dated properties which are in the future", () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(1970, 0, 1).getTime());

    expect(getClient("production", "datedClient2")).toEqual({
      clientId: "datedClient2",
      showInAccounts: false,
      showInServices: false,
      showInActivityHistory: false,
      showInDeleteAccount: false,
      isAvailableInWelsh: true,
      showDetailedCard: false,
      showInSearchableList: false,
      isOffboarded: false,
    });

    expect(getClient("test", "datedClient2")).toEqual({
      clientId: "datedClient2",
      showInAccounts: false,
      showInServices: false,
      showInActivityHistory: false,
      showInDeleteAccount: false,
      isAvailableInWelsh: true,
      showDetailedCard: false,
      showInSearchableList: true,
      isOffboarded: false,
    });
  });
});
