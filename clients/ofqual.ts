import { Client } from "../interfaces/client.interface";

const ofqual: Client = {
  clientId: {
    production: "TGygWFxGDNn8ItyaecWCopqIX3s",
    integration: "TGygWFxGDNn8ItyaecWCopqIX3s",
    nonProduction: "ofqual",
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
      header: "Ofqual subject matter specialist account",
      description: "Apply to give specialist advice to Ofqual.",
      linkText: "Go to your Ofqual subject matter specialist account",
      linkUrl: "https://subject-matter-specialists.ofqual.gov.uk/",
      startUrl:
        "https://www.gov.uk/guidance/subject-matter-specialists-for-ofqual",
      startText: "Ofqual subject matter specialist account",
    },
  },
  isOffboarded: false,
};

export default ofqual;
