import { Client } from "../interfaces/client.interface";

const hoDORS: Client = {
  clientId: {
    production: "Y12SlXI_zqYj_z6FFtVHExHjEO8",
    integration: "Y12SlXI_zqYj_z6FFtVHExHjEO8",
    nonProduction: "hoDORS",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
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
