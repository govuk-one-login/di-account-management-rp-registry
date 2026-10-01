import { Client } from "../interfaces/client.interface";

const dhscGetAdultSocialCareDataAdmin: Client = {
  clientId: {
    production: "LtOjB69ejHdOsQdT8rcBsL_D6BY",
    integration: "LtOjB69ejHdOsQdT8rcBsL_D6BY",
    nonProduction: "dhscGetAdultSocialCareDataAdmin",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Get adult social care data",
      description:
        "Manage user applications and perform other admin functions.",
      linkText: "Go to your Get adult social care data account",
      linkUrl: "https://analytics.dhsc.gov.uk/gascd-admin",
    },
  },
  isOffboarded: false,
};

export default dhscGetAdultSocialCareDataAdmin;
