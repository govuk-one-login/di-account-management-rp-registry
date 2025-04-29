import { Client } from "../interfaces/client.interface";

const dfeFindAndUseAnApi: Client = {
  clientId: {
    production: "9uEx86ZHEp8ycgdHNqC8VK87E1A",
    integration: "9uEx86ZHEp8ycgdHNqC8VK87E1A",
    nonProduction: "dfeFindAndUseAnApi",
  },
  isAvailableInWelsh: false,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: true, nonProduction: true },
  translations: {
    en: {
      header: "Find and use an API from the Department for Education",
      description:
        "Find and use a Department for Education API to connect to their digital services.",
      linkText: "Go to your DfE find and use an API account",
      linkUrl:
        "https://beta-find-and-use-an-api.education.gov.uk/identity/signin",
    },
  },
  isOffboarded: false,
};

export default dfeFindAndUseAnApi;
