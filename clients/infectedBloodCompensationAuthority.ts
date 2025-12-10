import { Client } from "../interfaces/client.interface";

const icba: Client = {
  clientId: {
    production: "yLjuwmORz6y3V_q26uubltbgzYk",
    integration: "yLjuwmORz6y3V_q26uubltbgzYk",
    nonProduction: "icba",
  },
  showInAccounts: false,
  showInServices: true,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  isAvailableInWelsh: false,
  translations: {
    en: {
      header: "Infected blood compensation test 123",
      description:
        "Claim compensation if you were infected with or affected by HIV, or Hepatitis B or C through contaminated blood, blood products or tissue. ",
      linkText: "Infected blood compensation",
      linkUrl: "https://ibca.org.uk/",
    },
  },
  isOffboarded: false,
};

export default icba;
