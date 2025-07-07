import { Client } from "../interfaces/client.interface";

const hoOnlineApis: Client = {
  clientId: {
    production: "B-T4i1nN4hvNEKuxNAzrjzc917o",
    integration: "B-T4i1nN4hvNEKuxNAzrjzc917o",
    nonProduction: "hoOnlineApis",
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
      header: "Online APIS",
      description:
        "Submit an online APIS (advance passenger information submission) report if you are a carrier of a scheduled aviation aircraft intending to travel to or from the UK.",
      linkText: "Go to your Online APIS account",
      linkUrl: {
        nonProduction:
          "https://www.submit-an-online-apis-report.service.gov.uk/dashboard",
        integration:
          "https://www.submit-an-online-apis-report.service.gov.uk/dashboard",
        production:
          "https://www.submit-an-online-apis-report.service.gov.uk/dashboard",
      },
      startText:
        "Submit an online APIS (advance passenger information submission)",
      startUrl:
        "https://www.gov.uk/government/publications/providing-information-about-scheduled-aviation-flights",
    },
  },
  isOffboarded: false,
};

export default hoOnlineApis;
