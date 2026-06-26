import { Client } from "../interfaces/client.interface";

const hmppsProbationAccount: Client = {
  clientId: {
    production: "38APDWZsRb_ekaVJ3-0WUx1q4AU",
    integration: "38APDWZsRb_ekaVJ3-0WUx1q4AU",
    nonProduction: "hmppsProbationAccount",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Check your probation account",
      description:
        "See your probation officer details, upcoming appointments, sentence details, probation progress and the requirements of your probation.",
      linkText: "Go to your Check your probation account",
      linkUrl:
        "https://probation-account.hmpps.service.justice.gov.uk/",
    },
  },
  isOffboarded: false,
};

export default hmppsProbationAccount;
