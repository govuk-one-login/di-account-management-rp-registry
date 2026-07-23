import { Client } from "../interfaces/client.interface";

const icba: Client = {
  clientId: {
    production: "yLjuwmORz6y3V_q26uubltbgzYk",
    integration: "yLjuwmORz6y3V_q26uubltbgzYk",
    nonProduction: "icba",
  },
  showInAccounts: false,
  showInServices: true,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  isAvailableInWelsh: false,
  translations: {
    en: {
      header: "Infected blood compensation",
      linkText: "Infected blood compensation",
      linkUrl: "https://ibca.org.uk/",
    },
  },
  isOffboarded: false,
};

export default icba;
