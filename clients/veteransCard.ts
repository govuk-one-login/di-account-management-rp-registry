import { Client } from "../interfaces/client.interface";

const veteransCard: Client = {
  clientId: {
    production: "zFeCxrwpLCUHFm-C4_CztwWtLfQ",
    integration: "zFeCxrwpLCUHFm-C4_CztwWtLfQ",
    nonProduction: "veteransCard",
  },
  isAvailableInWelsh: false,
  showInAccounts: false,
  showInServices: true,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: true,
  translations: {
    en: {
      header: "Apply for an HM Armed Forces Veteran Card",
      linkText: "Apply for an HM Armed Forces Veteran Card",
      linkUrl: "https://www.gov.uk/veteran-card",
      startUrl: "https://www.gov.uk/veteran-card",
      startText: "Apply for an HM Armed Forces Veteran Card",
    },
  },
  isOffboarded: false,
};

export default veteransCard;
