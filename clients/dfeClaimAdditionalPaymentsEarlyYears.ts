import { Client } from "../interfaces/client.interface";

const dfeClaimAdditionalPaymentsEarlyYears: Client = {
  clientId: {
    production: "6Rsn6Xg-Focyzjct9MdVuz1tvgc",
    integration: "6Rsn6Xg-Focyzjct9MdVuz1tvgc",
    nonProduction: "dfeClaimAdditionalPaymentsEarlyYears",
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
      header: "Early years financial incentives",
      description:
        "Start or continue an application to claim an early years financial incentive if you are an early years educator.",
      linkText:
        "Start or continue an application to claim a targeted retention incentive payment",
      linkUrl:
        "https://www.gov.uk/government/collections/additional-payments-for-teaching-eligibility-and-payment-details",
      startUrl:
        "https://www.gov.uk/government/collections/additional-payments-for-teaching-eligibility-and-payment-details",
      startText: "Early years financial incentives",
    },
  },
  isOffboarded: false,
};

export default dfeClaimAdditionalPaymentsEarlyYears;
