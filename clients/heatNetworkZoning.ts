import { Client } from "../interfaces/client.interface";

const heatNetworkZoning: Client = {
  clientId: {
    production: "_cv8flGYkTpGUgCQN7Oab8wV15w",
    integration: "_cv8flGYkTpGUgCQN7Oab8wV15w",
    nonProduction: "heatNetworkZoning",
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
      header: "Heat network zoning",
      description:
        "Allows end users to search view and export data based around heat network opportunities.",
      linkText: "Heat Network Zoning",
      linkUrl: "https://www.heat-network-zoning.data.gov.uk/",
    },
  },
  isOffboarded: false,
};

export default heatNetworkZoning;
