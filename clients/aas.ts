import { Client } from "../interfaces/client.interface";

const aas: Client = {
  clientId: {
    production: "MJ8nBsh32LHweUjb6x3p7qf-_TE",
    integration: "MJ8nBsh32LHweUjb6x3p7qf-_TE",
    nonProduction: "aas",
  },
  isAvailableInWelsh: false,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: true,
  showInClientSearch: { production: true, nonProduction: true },
  translations: {
    en: {
      header: "Apprenticeship assessment service (AAS)",
      description: "See or record your apprenticeship assessments.",
      linkText: "Go to your apprenticeship assessments account",
      linkUrl:
        "https://assessors.apprenticeships.education.gov.uk/account/signin",
      startUrl:
        "https://www.gov.uk/guidance/apply-to-the-apar-as-an-apprenticeship-training-provider",
      startText: "Apprenticeship assessment service",
    },
  },
  isOffboarded: false,
};

export default aas;
