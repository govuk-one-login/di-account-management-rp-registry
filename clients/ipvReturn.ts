import { Client } from "../interfaces/client.interface";

const ipvReturn: Client = {
  clientId: {
    production: "OdwbXmA5NLlYmMGHy3kjKFVD3PQ",
    integration: "OdwbXmA5NLlYmMGHy3kjKFVD3PQ",
    nonProduction: "ipvReturn",
  },
  isAvailableInWelsh: false,
  clientType: "internal",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: false, nonProduction: false },
  translations: { en: {} },
  isOffboarded: false,
};

export default ipvReturn;
