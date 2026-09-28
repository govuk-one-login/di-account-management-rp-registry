import { Client } from "../interfaces/client.interface";

const publishPaymentPractices: Client = {
  clientId: {
    production: "NE3xe8nTQ_3ag9Wz5ToaSb8GfFA",
    integration: "NE3xe8nTQ_3ag9Wz5ToaSb8GfFA",
    nonProduction: "publishPaymentPractices",
  },
  isAvailableInWelsh: false,
  showInAccounts: false,
  showInServices: true,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: true,
  translations: {
    en: {
      header: "Payment Practices Reporting",
      linkText: "Go to your draft payment practice reports",
      linkUrl:
        "https://publish-payment-practices.service.gov.uk/publish/drafts/",
      startUrl: "https://www.gov.uk/check-when-businesses-pay-invoices",
      startText: "Check when large businesses pay their suppliers",
    },
  },
  isOffboarded: false,
};

export default publishPaymentPractices;
