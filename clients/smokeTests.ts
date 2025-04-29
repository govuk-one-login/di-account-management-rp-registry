import { Client } from "../interfaces/client.interface";

const smokeTests: Client = {
  clientId: {
    production: "MjQc1h7nFVbNM05iawAdkkZ2W89uloDK",
    integration: "MjQc1h7nFVbNM05iawAdkkZ2W89uloDK",
    nonProduction: "smokeTests",
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

export default smokeTests;
