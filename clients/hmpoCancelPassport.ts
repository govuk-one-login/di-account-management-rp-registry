import { Client } from "../interfaces/client.interface";

const hmpoCancelPassport: Client = {
  clientId: {
    production: "l6GFmD8ndn7afVcm6SqAHlM8IVM",
    integration: "l6GFmD8ndn7afVcm6SqAHlM8IVM",
    nonProduction: "hmpoCancelPassport",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: true,
  translations: {
    en: {
      header: "Cancel a lost or stolen passport",
      description:
        "Report a passport as lost or stolen or apply for a replacement.",
      linkText: "Go to your cancel a lost or stolen passport account",
      linkUrl:
        "https://www.loststolenpassport.service.gov.uk/lost-stolen/passport-holder",
      startUrl: "https://www.gov.uk/report-a-lost-or-stolen-passport",
      startText: "Cancel a lost or stolen passport",
    },
  },
  isOffboarded: false,
};

export default hmpoCancelPassport;
