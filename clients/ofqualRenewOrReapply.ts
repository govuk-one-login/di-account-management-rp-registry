import { Client } from "../interfaces/client.interface";

const ofqualRenewOrReapply: Client = {
  clientId: {
    production: "P0kf8mj3m-CXcpvgyvp__gTCyNc",
    integration: "P0kf8mj3m-CXcpvgyvp__gTCyNc",
    nonProduction: "ofqualRenewOrReapply",
  },
  isAvailableInWelsh: false,
  showInAccounts: false,
  showInServices: true,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: true,
  translations: {
    en: {
      header: "Renew or reapply as an Ofqual subject matter specialist",
      linkText:
        "Go to your Renew or reapply as an Ofqual subject matter specialist account",
      linkUrl: "https://subject-matter-specialists.ofqual.gov.uk/application",
      startUrl:
        "https://www.gov.uk/guidance/subject-matter-specialists-for-ofqual",
      startText: "Renew or reapply to be an Ofqual subject matter specialist",
    },
  },
  isOffboarded: false,
};

export default ofqualRenewOrReapply;
