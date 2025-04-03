import { Client } from "../interfaces/client.interface";

const firs: Client = {
  clientId: {
    production: "sXr5F6w5QytPPJN-Dtsgbl6hegQ",
    integration: "sXr5F6w5QytPPJN-Dtsgbl6hegQ",
    nonProduction: "firs",
  },
  isAvailableInWelsh: false,
  isAllowed: true,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: false, nonProduction: false },
  translations: {
    en: {
      header: "Foreign influence registration scheme",
      description:
        "Register an arrangement of foreign power influence in UK politics.",
      linkText: "Go to your Foreign influence registration scheme account",
      linkUrl: "http://foreign-influence-registration-scheme.service.gov.uk/",
    },
  },
};

export default firs;
