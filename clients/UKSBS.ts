import { Client } from "../interfaces/client.interface";

const ukSBS: Client = {
  clientId: {
    production: "3BF8QDjd6aSvXWLCwVliAMiIuzQ",
    integration: "3BF8QDjd6aSvXWLCwVliAMiIuzQ",
    nonProduction: "UKSBS",
  },
  isAvailableInWelsh: false,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: false, nonProduction: false },
  translations: {
    en: {
      header:
        "Oracle Fusion - used by UKRI (UK Research and Innovation) and UKSBS (UK Shared Business Services)",
      description:
        "Sign in to Oracle Fusion to complete tasks such as onboarding (for job applicants) or using the iSupplier portal (for suppliers).",
      linkText: "Go to your Oracle Fusion account",
      linkUrl: "https://fa-evzn-saasfaukgovprod1.fa.ocs.oraclecloud.com",
    },
  },
  isOffboarded: false,
};

export default ukSBS;
