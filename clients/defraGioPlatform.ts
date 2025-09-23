import { Client } from "../interfaces/client.interface";

const defraGioPlatform: Client = {
  clientId: {
    production: "GUFKZJqzRyi1aQVmaZuuLl5lBR4",
    integration: "GUFKZJqzRyi1aQVmaZuuLl5lBR4",
    nonProduction: "defraGioPlatform",
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
      header: "Defra Digital Services",
      description: "Access your Defra Digital Services account.",
      linkText: "Go to your Defra account",
      linkUrl: "https://your-account.defra.gov.uk/management",
    },
  },
  isOffboarded: false,
};

export default defraGioPlatform;
