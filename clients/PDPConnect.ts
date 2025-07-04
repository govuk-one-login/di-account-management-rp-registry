import { Client } from "../interfaces/client.interface";

const PDPConnect: Client = {
  clientId: {
    production: "sdlgbEirK30fvgbrf0C78XY60qN",
    integration: "sdlgbEirK30fvgbrf0C78XY60qN",
    nonProduction: "PDPConnect",
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
      header: "PDP Connect",
      description: "Connect and manage pension data in PDP Connect.",
      linkText: "Go to your PDP Connect account",
      linkUrl: "https://www.pensionsdashboard-service.org.uk/s/",
    },
  },
  isOffboarded: false,
};

export default PDPConnect;
