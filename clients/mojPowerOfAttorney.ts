import { Client } from "../interfaces/client.interface";

const mojPowerOfAttorney: Client = {
  clientId: {
    production: "eOdiLYgDEhC7nccrVaObaQ4AgEE",
    integration: "eOdiLYgDEhC7nccrVaObaQ4AgEE",
    nonProduction: "mojPowerOfAttorney",
  },
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: {
    production: new Date(2026, 10, 25),
    nonProduction: true,
  },
  isAvailableInWelsh: false,
  translations: {
    en: {
      header: "Make a lasting power of attorney",
      description: "Start or continue making a lasting power of attorney.",
      linkText: "Go to your Make a lasting power of attorney account",
      linkUrl:
        "https://www.lastingpowerofattorney.service.gov.uk/user/dashboard",
      startText: "Make a lasting power of attorney",
      startUrl: "https://www.gov.uk/power-of-attorney/make-lasting-power",
    },
  },
  isOffboarded: false,
};

export default mojPowerOfAttorney;
