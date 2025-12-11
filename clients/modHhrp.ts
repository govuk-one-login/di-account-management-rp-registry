import { Client } from "../interfaces/client.interface";

const modHhrp: Client = {
  clientId: {
    production: "5n048LYRQ4zTlInf7sqxgsYMGyI",
    integration: "5n048LYRQ4zTlInf7sqxgsYMGyI",
    nonProduction: "modHhrp",
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
    },
  },
  isOffboarded: false,
};

export default modHhrp;
