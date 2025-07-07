import { Client } from "../interfaces/client.interface";

const faa: Client = {
  clientId: {
    production: "CCdLjqwGtpAA1Td2CrNHT1yFbqa",
    integration: "CCdLjqwGtpAA1Td2CrNHT1yFbqa",
    nonProduction: "faa",
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
      header: "Find an apprenticeship",
      description: "Search and apply for apprenticeships in England.",
      linkText: "Go to your account to search for an apprenticeship",
      linkUrl:
        "https://www.findapprenticeship.service.gov.uk/apprenticeshipsearch",
      startUrl: "https://www.gov.uk/apply-apprenticeship",
      startText: "Find an apprenticeship in England",
    },
  },
  isOffboarded: false,
};

export default faa;
