import { Client } from "../interfaces/client.interface";

const dfeRetentionIncentives: Client = {
  clientId: {
    production: "IJ_TuVEgIqAWT2mCe9b5uocMyNs",
    integration: "IJ_TuVEgIqAWT2mCe9b5uocMyNs",
    nonProduction: "dfeRetentionIncentives",
  },
  isAvailableInWelsh: false,
  showInAccounts: false,
  showInServices: true,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: true,
  translations: {
    en: {
      header: "Targeted retention incentives for further education teachers",
      linkText: "Targeted retention incentives for further education teachers",
      linkUrl:
        "https://www.gov.uk/government/collections/additional-payments-for-teaching-eligibility-and-payment-details",
      startUrl:
        "https://www.gov.uk/government/collections/additional-payments-for-teaching-eligibility-and-payment-details",
      startText: "Targeted retention incentives for further education teachers",
    },
  },
  isOffboarded: false,
};

export default dfeRetentionIncentives;
