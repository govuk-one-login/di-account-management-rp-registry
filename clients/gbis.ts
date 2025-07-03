import { Client } from "../interfaces/client.interface";

const gbis: Client = {
  clientId: {
    production: "FakIq5aYsHQ02dBOc6XwyA1wRRs",
    integration: "FakIq5aYsHQ02dBOc6XwyA1wRRs",
    nonProduction: "gbis",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Great British Insulation Scheme (GBIS)",
      description:
        "Send your completed customer energy efficiency measures to Ofgem for review.",
      linkText: "Go to your GBIS dashboard",
      linkUrl: "https://gbinsulationscheme.ofgem.gov.uk/",
    },
  },
  isOffboarded: false,
};

export default gbis;
