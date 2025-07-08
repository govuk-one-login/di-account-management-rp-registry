import { Client } from "../interfaces/client.interface";

const dbTrade: Client = {
  clientId: {
    production: "dPIP320ek5A50_12a00U2sEoM0k",
    integration: "dPIP320ek5A50_12a00U2sEoM0k",
    nonProduction: "dbTrade",
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
      header: "Apply for a licence to provide sanctioned trade services",
      description:
        "Start or continue a licence application to provide sanctioned trade services.",
      linkText: "Go to your sanctioned trade services account",
      linkUrl: "https://apply-sanctioned-services-licence.trade.gov.uk/apply",
    },
  },
  isOffboarded: false,
};

export default dbTrade;
