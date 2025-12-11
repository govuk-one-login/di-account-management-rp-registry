import { Client } from "../interfaces/client.interface";

const modHham: Client = {
  clientId: {
    production: "GQf70-tvgfHyQsdQhJ2-b80wJcs",
    integration: "GQf70-tvgfHyQsdQhJ2-b80wJcs",
    nonProduction: "modHham",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: false,
  showInDeleteAccount: false,
  showInSearchableList: false,
  translations: {
    en: {
      header: "HomeHub Appointments Manager",
      description:
        "Manage appointments for repairs for your service family accommodation.",
      linkText: "Go to your HomeHub appointments account",
      linkUrl: "https://homehub.pinnacleservicefamilies.co.uk/appts",
      hintText: "Go to your HomeHub appointments account",
    },
  },
  isOffboarded: false,
};

export default modHham;
