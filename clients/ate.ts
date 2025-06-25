import { Client } from "../interfaces/client.interface";

const ate: Client = {
  clientId: {
    production: "S1hl5G31dSsMYqPaOuiRVOLhBX0",
    integration: "S1hl5G31dSsMYqPaOuiRVOLhBX0",
    nonProduction: "ate",
  },
  isAvailableInWelsh: false,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: true,
  showInClientSearch: { production: false, nonProduction: false },
  translations: {
    en: {
      header: "Update your capital schemes",
      description: "Update Active Travel England about your capital schemes.",
      linkText: "Go to your capital schemes",
      linkUrl:
        "https://update-your-capital-schemes.activetravelengland.gov.uk/",
    },
  },
  isOffboarded: false,
};

export default ate;
