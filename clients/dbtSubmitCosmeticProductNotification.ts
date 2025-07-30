import { Client } from "../interfaces/client.interface";

const dbtSubmitCosmeticProductNotification: Client = {
  clientId: {
    production: "JhyNhK1J8oe9-Mnn05HQbeKhttk",
    integration: "JhyNhK1J8oe9-Mnn05HQbeKhttk",
    nonProduction: "dbtSubmitCosmeticProductNotification",
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
      header: "Submit cosmetic product notifications",
      description:
        "Add details about your cosmetic product to the Submit cosmetic product notification service.",
      linkText: "Go to the Submit cosmetic product notification service",
      linkUrl: "www.cosmetic-product-notifications.service.gov.uk",
      startText: "Submit cosmetic product notifications",
      startUrl: "http://www.cosmetic-product-notifications.service.gov.uk",
    },
    cy: {
      header: "Cyflwyno hysbysiad cynnyrch cosmetig",
      description:
        "Ychwanegwch fanylion am eich cynnyrch cosmetig i'r Gwasanaeth cyflwyno hysbysiad cynnyrch cosmetig.",
      linkText: "Ewch i'r Gwasanaeth cyflwyno hysbysiad cynnyrch cosmetig",
      linkUrl: "www.cosmetic-product-notifications.service.gov.uk",
      startText: "Cyflwyno hysbysiad cynnyrch cosmetig",
      startUrl: "http://www.cosmetic-product-notifications.service.gov.uk",
    },
  },
  isOffboarded: false,
};

export default dbtSubmitCosmeticProductNotification;
