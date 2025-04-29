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
  isActivityLogEnabled: false,
  showInClientSearch: { production: false, nonProduction: false },
  translations: {
    en: {},
  },
};

export default hmrcGovernmentGateway;
