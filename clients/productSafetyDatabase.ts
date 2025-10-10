import { Client } from "../interfaces/client.interface";

const productSafetyDatabase: Client = {
  clientId: {
    production: "NV6DqTjfl4s6MTBX3jDCLPev2d4",
    integration: "NV6DqTjfl4s6MTBX3jDCLPev2d4",
    nonProduction: "productSafetyDatabase",
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
      header: "Product Safety Database",
      description:
        "Report, track and share product safety information with the product safety community.",
      linkText: "Go to your Product Safety Database account",
      linkUrl: "https://www.product-safety-database.service.gov.uk/",
      startText: "Product Safety Database",
      startUrl: "https://www.product-safety-database.service.gov.uk/",
    },
  },
  isOffboarded: false,
};

export default productSafetyDatabase;
