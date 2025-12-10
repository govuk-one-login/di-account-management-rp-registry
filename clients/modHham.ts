import { Client } from "../interfaces/client.interface";

const modHham: Client = {
  clientId: {
    production: "GQf70-tvgfHyQsdQhJ2-b80wJcs",
    integration: "GQf70-tvgfHyQsdQhJ2-b80wJcs",
    nonProduction: "modHham",
  },
  isAvailableInWelsh: false,
  showInAccounts: false,
  showInServices: true,
  showDetailedCard: false,
  showInActivityHistory: false,
  showInDeleteAccount: false,
  showInSearchableList: false,
  translations: {
    en: {
      header: "A service run by the Ministry of Defence (MOD)",
      linkText: "Go to your HomeHub appointments account.",
      linkUrl: "https://homehub.pinnacleservicefamilies.co.uk/appts",
      hintText: "Book a repair appointment.",
      paragraph1:
        "Manage appointments for repairs for your service family accommodation.",
    },
  },
  isOffboarded: false,
};

export default modHham;
