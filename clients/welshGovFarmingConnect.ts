import { Client } from "../interfaces/client.interface";

const welshGovFarmingConnect: Client = {
  clientId: {
    production: "Fu8Uu_QXznnDAm9yhkaYB6dtaT8",
    integration: "Fu8Uu_QXznnDAm9yhkaYB6dtaT8",
    nonProduction: "welshGovFarmingConnect",
  },
  isAvailableInWelsh: false,
  showInAccounts: false,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: false,
  showInDeleteAccount: false,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Welsh Government: Farming Connect",
      description: "",
      linkText: "",
      linkUrl: "",
    },
  },
  isOffboarded: false,
};

export default welshGovFarmingConnect;
