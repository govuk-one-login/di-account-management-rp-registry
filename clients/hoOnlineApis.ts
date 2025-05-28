import { Client } from "../interfaces/client.interface";

const hoOnlineApis: Client = {
  clientId: {
    production: "B-T4i1nN4hvNEKuxNAzrjzc917o",
    integration: "B-T4i1nN4hvNEKuxNAzrjzc917o",
    nonProduction: "hoOnlineApis",
  },
  isAvailableInWelsh: false,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: true, nonProduction: true },
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
    },
  },
  isOffboarded: false,
};

export default hoOnlineApis;
