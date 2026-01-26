import { Client } from "../interfaces/client.interface";

const aas: Client = {
  clientId: {
    production: "testClient",
    integration: "testClient",
    nonProduction: "testClient",
  },
  showInAccounts: false,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: false,
  showInDeleteAccount: false,
  showInSearchableList: {
    production: false,
    integration: false,
    nonProduction: true,
  },
  isAvailableInWelsh: false,
  translations: {
    en: {
      header: "Test Client",
      description: "non functional client that only appears in lower environments",
      linkText: "Go to your test client account",
      linkUrl:
        "https://example.com",
      startUrl:
        "https://example.com",
      startText: "Test Client",
    },
  },
  alternativeClients: [
    {
      en: {
        header: "Alternative Client for Test Client",
        description: "This is an alternative client for testing purposes.",
        startText: "Alternative Test Client",
        startUrl: "https://alternative-example.com",
      },
    },
  ],
  isOffboarded: false,
};

export default aas;
