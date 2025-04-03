import { Client } from "../interfaces/client.interface";

const faa: Client = {
  clientId: {
    production: "CCdLjqwGtpAA1Td2CrNHT1yFbqa",
    integration: "CCdLjqwGtpAA1Td2CrNHT1yFbqa",
    nonProduction: "faa",
  },
  isAvailableInWelsh: false,
  isAllowed: true,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: true, nonProduction: true },
  translations: {
    en: {
      header: "Find an apprenticeship",
      description: "Search and apply for apprenticeships in England.",
      linkText: "Go to your account to search for an apprenticeship",
      linkUrl:
        "https://www.findapprenticeship.service.gov.uk/apprenticeshipsearch",
    },
  },
};

export default faa;
