import { Client } from "../interfaces/client.interface";

const ruralPaymentsService: Client = {
  clientId: {
    production: "QUJqUygUEpa98UIEbt5hnKZkTAc",
    integration: "QUJqUygUEpa98UIEbt5hnKZkTAc",
    nonProduction: "ruralPaymentsService",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Rural Payments service",
      description:
        "Register your business details, apply for farming grants, submit land-use claims, and update digital maps of your registered land.",
      linkText: "Go to your Rural Payments service account",
      linkUrl: "https://www.ruralpayments.service.gov.uk/customer-account/login",
    },
  },
  isOffboarded: false,
};

export default ruralPaymentsService;
