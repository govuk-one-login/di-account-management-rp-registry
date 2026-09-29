import { Client } from "../interfaces/client.interface";

const heloBlod: Client = {
  clientId: {
    production: "JZruYL8YQ_V_3Pp3L7gJcqdcq5M",
    integration: "JZruYL8YQ_V_3Pp3L7gJcqdcq5M",
    nonProduction: "heloBlod",
  },
  isAvailableInWelsh: true,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Get Welsh translations and advice",
      description: "Use Welsh in your service with Helo Blod.",
      linkText: "Go to your Helo Blod account",
      linkUrl:
        "https://businesswales.gov.wales/heloblod/my-account?check_logged_in=1",
      additionalSearchTerms: "Welsh translation service",
    },
    cy: {
      header:
        "Manteisiwch ar gyfieithiadau Cymraeg a chyngor ar ddefnyddio'r Gymraeg",
      description: "Defnyddiwch y Gymraeg yn eich gwasanaeth gyda Helo Blod.",
      linkText: "Ewch i'ch cyfrif Helo Blod",
      linkUrl:
        "https://busnescymru.llyw.cymru/heloblod/my-account?check_logged_in=1",
    },
  },
  isOffboarded: false,
};

export default heloBlod;
