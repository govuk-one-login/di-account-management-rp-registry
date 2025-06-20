import { Client } from "../interfaces/client.interface";

const govukapp: Client = {
  clientId: {
    production: "EznkQXGrWxi0cQMSACY15UzvG1Q",
    integration: "EznkQXGrWxi0cQMSACY15UzvG1Q",
    nonProduction: "govukapp",
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

export default govukapp;
