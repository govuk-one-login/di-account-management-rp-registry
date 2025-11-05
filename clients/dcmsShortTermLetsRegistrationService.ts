import { Client } from "../interfaces/client.interface";

const dcmsShortTermLetsRegistrationService: Client = {
  clientId: {
    production: "M6lkFVRxW7ZV9W89QVLMLawidww",
    integration: "M6lkFVRxW7ZV9W89QVLMLawidww",
    nonProduction: "dcmsShortTermLetsRegistrationService",
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
      header: "Short-term let registration service",
      description:
        "Register short-term rental accommodation and update the information you’ve provided about it.",
      linkText: "Go to the Short-term let registration service",
      linkUrl: "https://register-short-term-let.dcms.gov.uk",
    },
  },
  isOffboarded: false,
};

export default dcmsShortTermLetsRegistrationService;
