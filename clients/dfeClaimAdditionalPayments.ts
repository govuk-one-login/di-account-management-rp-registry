import { Client } from "../interfaces/client.interface";

const dfeClaimAdditionalPayments: Client = {
  clientId: {
    production: "IJ_TuVEgIqAWT2mCe9b5uocMyNs",
    integration: "IJ_TuVEgIqAWT2mCe9b5uocMyNs",
    nonProduction: "dfeClaimAdditionalPayments",
  },
  isAvailableInWelsh: false,
  clientType: "service",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: false, nonProduction: false },
  translations: {
    en: {
      header: "Claim additional payments for teaching",
      linkText: "Claim additional payments for teaching",
      linkUrl:
        "https://www.gov.uk/government/collections/additional-payments-for-teaching-eligibility-and-payment-details",
    },
  },
  isOffboarded: false,
};

export default dfeClaimAdditionalPayments;
