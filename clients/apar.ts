import { Client } from "../interfaces/client.interface";

const apar: Client = {
  clientId: {
    production: "2nAxHa72OqhE6eKymHZIx-sV3vI",
    integration: "2nAxHa72OqhE6eKymHZIx-sV3vI",
    nonProduction: "apar",
  },
  isAvailableInWelsh: false,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: true, nonProduction: true },
  translations: {
    en: {
      header: "Apprenticeship provider and assessment register",
      description:
        "Start or continue an application to join the apprenticeship provider and assessment register.",
      linkText:
        "Go to your apprenticeship provider and assessment register account",
      linkUrl: "https://apply.apprenticeships.education.gov.uk/signIn",
      startUrl:
        "https://www.gov.uk/guidance/apply-to-the-apar-as-an-apprenticeship-training-provider",
      startText: "Apprenticeship provider and assessment register (APAR)",
    },
  },
  isOffboarded: false,
};

export default apar;
