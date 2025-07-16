import { Client } from "../interfaces/client.interface";

const companyHouseAccounts: Client = {
  clientId: {
    production: "Hp9xO0Wda9EcI_2IO8OGeYJyrT0",
    integration: "VdmfAXiINT9wpUsGO_vVnPEbsAE",
    nonProduction: "companyHouseAccounts",
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
      header: "Find and update company information",
      description:
        "View and update your company information, for example, filing history and registered office address.",
      linkText: "Go to Companies House",
      linkUrl: "https://find-and-update.company-information.service.gov.uk/",
      startUrl: "https://find-and-update.company-information.service.gov.uk/",
      startText: "Find and update company information",
    },
  },
  isOffboarded: false,
};

export default companyHouseAccounts;
