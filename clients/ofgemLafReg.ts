import { Client } from "../interfaces/client.interface";

const ofgemLafReg: Client = {
  clientId: {
    production: "eywumu-XiJCz7RHyw4Zv8iTgsuc",
    integration: "eywumu-XiJCz7RHyw4Zv8iTgsuc",
    nonProduction: "ofgemLafReg",
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
      header: "Local authority flexible register",
      description:
        "Upload declaration notification templates to Ofgem and manage your users' accounts.",
      linkText: "Go to your flexible register account",
      linkUrl: "https://laf.ofgem.gov.uk/",
    },
  },
  isOffboarded: false,
};

export default ofgemLafReg;
