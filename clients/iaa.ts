import { Client } from "../interfaces/client.interface";

const iaa: Client = {
  clientId: {
    production: "Gk-D7WMvytB44Nze7oEC5KcThQZ4yl7sAA",
    integration: "Gk-D7WMvytB44Nze7oEC5KcThQZ4yl7sAA",
    nonProduction: "iaa",
  },
  isAvailableInWelsh: false,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: true, nonProduction: true },
  translations: {
    en: {
      header: "Immigration Advice Authority",
      description:
        "Authorise and register an immigration adviser or organisation.",
      linkText: "Go to your Immigration Advice Authority account",
      linkUrl: "https://portal.immigrationadviceauthority.gov.uk/s/",
    },
  },
};

export default iaa;
