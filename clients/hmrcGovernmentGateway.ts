import { Client } from "../interfaces/client.interface";

const hmrcGovernmentGateway: Client = {
  clientId: {
    production: "7y-bchtHDfucVR5kcAe8KaM80wg",
    integration: "7y-bchtHDfucVR5kcAe8KaM80wg",
    nonProduction: "hmrcGovernmentGateway",
  },
  isAvailableInWelsh: false,
  clientType: "internal",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: true,
  showInClientSearch: { production: false, nonProduction: false },
  translations: { en: {} },
  isOffboarded: false,
};

export default hmrcGovernmentGateway;
