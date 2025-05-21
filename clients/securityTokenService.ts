import { Client } from "../interfaces/client.interface";

const securityTokenService: Client = {
  clientId: {
    production: "ibRd7MKF-uTB5tVtQQvc84lklrc",
    integration: "ibRd7MKF-uTB5tVtQQvc84lklrc",
    nonProduction: "securityTokenService",
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

export default securityTokenService;
