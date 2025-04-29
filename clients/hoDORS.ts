import { Client } from "../interfaces/client.interface";

const hoDORS: Client = {
  clientId: {
    production: "Y12SlXI_zqYj_z6FFtVHExHjEO8",
    integration: "Y12SlXI_zqYj_z6FFtVHExHjEO8",
    nonProduction: "hoDORS",
  },
  isAvailableInWelsh: false,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: false, nonProduction: false },
  translations: {
    en: {
      header: "DBS online results service",
      description:
        "View your DBS result and share with employers or voluntary organisations.",
      linkText: "Go to the DBS online results service",
      linkUrl: "https://www.view-my-disclosure-result.dbsdigital.io/auth/login",
    },
  },
  isOffboarded: false,
};

export default hoDORS;
