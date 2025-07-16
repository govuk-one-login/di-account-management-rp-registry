import { Client } from "../interfaces/client.interface";

const dfeClaimAdditionalPayments: Client = {
  clientId: {
    production: "IJ_TuVEgIqAWT2mCe9b5uocMyNs",
    integration: "IJ_TuVEgIqAWT2mCe9b5uocMyNs",
    nonProduction: "dfeClaimAdditionalPayments",
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
      header: "Claim additional payments for teaching",
      linkText: "Claim additional payments for teaching",
      linkUrl:
        "https://www.gov.uk/government/collections/additional-payments-for-teaching-eligibility-and-payment-details",
      startUrl:
        "https://www.gov.uk/government/collections/additional-payments-for-teaching-eligibility-and-payment-details",
      startText: "Claim additional payments for teaching",
    },
  },
  isOffboarded: false,
};

export default dfeClaimAdditionalPayments;
