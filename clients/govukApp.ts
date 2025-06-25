import { Client } from "../interfaces/client.interface";

const govukApp: Client = {
  clientId: {
    production: "EznkQXGrWxi0cQMSACY15UzvG1Q",
    integration: "EznkQXGrWxi0cQMSACY15UzvG1Q",
    nonProduction: "govukApp",
  },
  isAvailableInWelsh: false,
  clientType: "internal",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: true,
  showInClientSearch: { production: false, nonProduction: false },
  translations: {
    en: {
      header: "Your GOV.UK app",
      linkText: " ",
      linkUrl: " ",
    },
  },
  isOffboarded: false,
};

export default govukApp;
