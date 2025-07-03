import { Client } from "../interfaces/client.interface";

const ukSBS: Client = {
  clientId: {
    production: "3BF8QDjd6aSvXWLCwVliAMiIuzQ",
    integration: "3BF8QDjd6aSvXWLCwVliAMiIuzQ",
    nonProduction: "UKSBS",
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
      header: "Oracle Fusion - used by UKRI and UKSBS",
      description:
        "Sign in to Oracle Fusion to complete tasks such as onboarding (for job applicants) or using the iSupplier portal (for suppliers).",
      linkText: "Go to your Oracle Fusion account",
      linkUrl: "https://fa-evzn-saasfaukgovprod1.fa.ocs.oraclecloud.com",
    },
  },
  isOffboarded: false,
};

export default ukSBS;
