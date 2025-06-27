import { Client } from "../interfaces/client.interface";

const companyHouseAccounts: Client = {
  clientId: {
    production: "Hp9xO0Wda9EcI_2IO8OGeYJyrT0",
    integration: "VdmfAXiINT9wpUsGO_vVnPEbsAE",
    nonProduction: "companyHouseAccounts",
  },
  isAvailableInWelsh: false,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: true,
  showInClientSearch: { production: false, nonProduction: false },
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
