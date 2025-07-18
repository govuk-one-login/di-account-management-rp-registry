import { Client } from "../interfaces/client.interface";

const dfeFindAndUseAnApi: Client = {
  clientId: {
    production: "9uEx86ZHEp8ycgdHNqC8VK87E1A",
    integration: "9uEx86ZHEp8ycgdHNqC8VK87E1A",
    nonProduction: "dfeFindAndUseAnApi",
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
      header: "Find and use an API from the Department for Education",
      description:
        "Find and use a Department for Education API to connect to their digital services.",
      linkText: "Go to your DfE find and use an API account",
      linkUrl:
        "https://beta-find-and-use-an-api.education.gov.uk/identity/signin",
      startUrl: "https://beta-find-and-use-an-api.education.gov.uk/",
      startText: "Find and use an API from the Department for Education",
    },
  },
  isOffboarded: false,
};

export default dfeFindAndUseAnApi;
