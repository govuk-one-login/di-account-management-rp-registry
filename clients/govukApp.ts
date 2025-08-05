import { Client } from "../interfaces/client.interface";

const govukApp: Client = {
  clientId: {
    production: "EznkQXGrWxi0cQMSACY15UzvG1Q",
    integration: "EznkQXGrWxi0cQMSACY15UzvG1Q",
    nonProduction: "govukApp",
  },
  isAvailableInWelsh: false,
  showInAccounts: false,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Your GOV.UK app",
    },
  },
  isOffboarded: false,
};

export default govukApp;
