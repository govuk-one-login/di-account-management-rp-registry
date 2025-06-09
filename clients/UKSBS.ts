import { Client } from "../interfaces/client.interface";

const ukSBS: Client = {
  clientId: {
    production: "3BF8QDjd6aSvXWLCwVliAMiIuzQ",
    integration: "3BF8QDjd6aSvXWLCwVliAMiIuzQ",
    nonProduction: "UKSBS",
  },
  isAvailableInWelsh: false,
  clientType: "service",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: false, nonProduction: false },
  translations: {
    en: {
      header:
        "SHARP -  Shared Services for HR, Accounting, Reporting and Procurement",
      linkText:
        "SHARP -  Shared Services for HR, Accounting, Reporting and Procurement",
      linkUrl: "https://fa-evzn-saasfaukgovprod1.fa.ocs.oraclecloud.com",
    },
  },
  isOffboarded: false,
};

export default ukSBS;
