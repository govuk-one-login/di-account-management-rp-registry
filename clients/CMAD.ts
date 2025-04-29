import { Client } from "../interfaces/client.interface";

const CMAD: Client = {
  clientId: {
    production: "Q2tqV5C1nGXFVMUcnpqbOUTrZuw",
    integration: "Q2tqV5C1nGXFVMUcnpqbOUTrZuw",
    nonProduction: "CMAD",
  },
  isAvailableInWelsh: false,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: true, nonProduction: true },
  translations: {
    en: {
      header: "Confirm my apprenticeship details (CMAD)",
      description: "Check and confirm your apprenticeship details.",
      linkText: "Go to your account to confirm your apprenticeship",
      linkUrl: "https://confirm.my.apprenticeships.education.gov.uk/",
    },
  },
};

export default CMAD;
