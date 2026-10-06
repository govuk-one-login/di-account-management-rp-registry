import { Client } from "../interfaces/client.interface";

const bistPaymentPracticesReporting: Client = {
  clientId: {
    production: "NE3xe8nTQ_3ag9Wz5ToaSb8GfFA",
    integration: "NE3xe8nTQ_3ag9Wz5ToaSb8GfFA",
    nonProduction: "bistPaymentPracticesReporting",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Payment Practices Reporting",
      description:
        "Publish a payment practice report.",
      linkText: "Go to your draft payment practice reports",
      linkUrl:
        "https://publish-payment-practices.service.gov.uk/publish/drafts/",
    },
  },
  isOffboarded: false,
};

export default bistPaymentPracticesReporting;
