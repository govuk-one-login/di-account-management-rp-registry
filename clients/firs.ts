import { Client } from "../interfaces/client.interface";

const firs: Client = {
  clientId: {
    production: "sXr5F6w5QytPPJN-Dtsgbl6hegQ",
    integration: "sXr5F6w5QytPPJN-Dtsgbl6hegQ",
    nonProduction: "firs",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: true,
  translations: {
    en: {
      header: "Foreign influence registration scheme",
      description:
        "Register an arrangement of foreign power influence in UK politics.",
      linkText: "Go to your Foreign influence registration scheme account",
      linkUrl: "http://foreign-influence-registration-scheme.service.gov.uk/",
      startText: "Foreign Influence Registration Scheme (FIRS)",
      startUrl:
        "https://www.gov.uk/government/collections/foreign-influence-registration-scheme",
    },
  },
  isOffboarded: false,
};

export default firs;
