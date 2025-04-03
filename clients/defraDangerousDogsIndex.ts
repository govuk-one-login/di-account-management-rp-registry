import { Client } from "../interfaces/client.interface";

const defraDangerousDogsIndex: Client = {
  clientId: {
    production: "u6cETcTbDeT5PZaRRvUskHQeZq8",
    integration: "u6cETcTbDeT5PZaRRvUskHQeZq8",
    nonProduction: "defraDangerousDogsIndex",
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
      header: "Dangerous dogs index",
      description:
        "Search the Dangerous dogs index for dogs or owners to view their details and exemption status.",
      linkText: "Go to your Dangerous dogs index account",
      linkUrl: "https://dogsindex.defra.gov.uk",
    },
  },
};

export default defraDangerousDogsIndex;
