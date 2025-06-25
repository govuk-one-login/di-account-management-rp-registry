import { Client } from "../interfaces/client.interface";

const heatNetworkZoning: Client = {
  clientId: {
    production: "_cv8flGYkTpGUgCQN7Oab8wV15w",
    integration: "_cv8flGYkTpGUgCQN7Oab8wV15w",
    nonProduction: "heatNetworkZoning",
  },
  isAvailableInWelsh: false,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: true,
  showInClientSearch: { production: false, nonProduction: false },
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
