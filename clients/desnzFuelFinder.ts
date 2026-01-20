import { Client } from "../interfaces/client.interface";

const desnzFuelFinder: Client = {
  clientId: {
    production: "cIbFPQz3xhXDYJeOr3S7A3tjjjk",
    integration: "cIbFPQz3xhXDYJeOr3S7A3tjjjk",
    nonProduction: "desnzFuelFinder",
  },
  isAvailableInWelsh: false,
  showInAccounts: new Date(2025, 11, 18),
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: new Date(2025, 11, 18),
  showInDeleteAccount: new Date(2025, 11, 18),
  showInSearchableList: new Date(2025, 11, 18),
  translations: {
    en: {
      header: "Fuel Finder",
      description:
        "Update your petrol filling station details and fuel prices, or access the latest published data sets.",
      linkText: "Go to your Fuel Finder account",
      linkUrl:
        "https://www.register-fuel-finder-scheme.service.gov.uk/account-creator-details",
      startText: "Fuel Finder",
      startUrl: "https://www.register-fuel-finder-scheme.service.gov.uk",
    },
  },
  isOffboarded: false,
};

export default desnzFuelFinder;
