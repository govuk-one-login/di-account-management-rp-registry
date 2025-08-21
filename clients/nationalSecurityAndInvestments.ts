import { Client } from "../interfaces/client.interface";

const nationalSecurityAndInvestments: Client = {
  clientId: {
    production: "x0cK4DGNDnCXmsPrYC6cJRV1LC0",
    integration: "x0cK4DGNDnCXmsPrYC6cJRV1LC0",
    nonProduction: "nationalSecurityAndInvestments",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: true,
  translations: {
    en: {
      header: "Submit a National Security and Investment notification",
      description:
        "Notify the government of acquisitions that fall under the National Security and Investment Act 2021 (NSI Act).",
      linkText: "Go to your National Security and Investment notifications",
      linkUrl: {
        nonProduction: "https://nsi.beis.gov.uk/dashboard",
        integration: "https://nsi-stg.beis.gov.uk/dashboard",
        production: "https://nsi.beis.gov.uk/dashboard",
      },
      startText: "Submit a National Security and Investment notification",
      startUrl:
        "https://www.gov.uk/government/collections/national-security-and-investment-act",
    },
  },
  isOffboarded: false,
};

export default nationalSecurityAndInvestments;
