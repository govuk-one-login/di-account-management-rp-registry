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
      header: "Infected blood compensation",
      description:
        "Claim compensation if you were infected with or affected by HIV, or Hepatitis B or C through contaminated blood, blood products or tissue. ",
      linkText: "Go to your infected blood compensation application",
      linkUrl:
        "https://ui.idv.ibca.gov.uk/fHKfqo7qVCApWwcK6if5pqQhIXSe9yx/postoffice?redirect=/one-login-result",
    },
  },
  isOffboarded: false,
};

export default icba;
