import { Client } from "../interfaces/client.interface";

// this client has not been onboarded but is live on production
// it exists here to stop errors appearing in production

const mojPensionRelief: Client = {
  clientId: {
    production: "c2DL-h6T8YQcLDCTj1voXYipiZ8",
    integration: "c2DL-h6T8YQcLDCTj1voXYipiZ8",
    nonProduction: "mojPensionRelief",
  },
  showInAccounts: false,
  showInServices: false,
  showInActivityHistory: false,
  showInDeleteAccount: false,
  showInSearchableList: false,
  isAvailableInWelsh: false,
  translations: {
    en: {
      header: "MOJ Pension Relief",
      description: "placeholder",
      linkText: "Go to your MOJ Pension Relief account",
      linkUrl:
        "https://example.com",
      startUrl:
        "https://example.com",
      startText: "MOJ Pension Relief",
    },
  },
  isOffboarded: true,
};

export default mojPensionRelief;
