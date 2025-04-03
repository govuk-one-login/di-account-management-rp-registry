import { Client } from "../interfaces/client.interface";

const aas: Client = {
  clientId: {
    production: "dVrdJ7aemrvR0YlX7lDRaXnz0mE",
    integration: "dVrdJ7aemrvR0YlX7lDRaXnz0mE",
    nonProduction: "aas",
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
      header: "Apprenticeship assessment service (AAS)",
      description: "See or record your apprenticeship assessments.",
      linkText: "Go to your apprenticeship assessments account",
      linkUrl:
        "https://assessors.apprenticeships.education.gov.uk/account/signin",
    },
  },
};

export default aas;
