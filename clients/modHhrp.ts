import { Client } from "../interfaces/client.interface";

const modHhrp: Client = {
  clientId: {
    production: "5n048LYRQ4zTlInf7sqxgsYMGyI",
    integration: "5n048LYRQ4zTlInf7sqxgsYMGyI",
    nonProduction: "modHhrp",
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
      linkText: "Go to your HomeHub repairs account.",
      linkUrl: "https://homehub.pinnacleservicefamilies.co.uk",
      hintText: "Report a repair for your service family accommodation.",
      paragraph1:
        "Report and manage repairs for your service family accommodation.",
    },
  },
  isOffboarded: false,
};

export default modHhrp;
