import { Client } from "../interfaces/client.interface";

const desnzFuelFinder: Client = {
  clientId: {
    production: "cIbFPQz3xhXDYJeOr3S7A3tjjjk",
    integration: "cIbFPQz3xhXDYJeOr3S7A3tjjjk",
    nonProduction: "desnzFuelFinder",
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
      header: "Fuel Finder",
      description:
        "Update your petrol filling station details and fuel prices, or access the latest published data sets.",
      linkText: "Go to your Fuel Finder account",
      linkUrl: "https://fuel-finder.service.gov.uk/account-creator-details",
      startText: "Fuel Finder",
      startUrl: "https://fuel-finder.service.gov.uk",
    },
  },
  isOffboarded: false,
};

export default desnzFuelFinder;
