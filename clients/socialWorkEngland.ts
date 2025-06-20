import { Client } from "../interfaces/client.interface";

const socialWorkEngland: Client = {
  clientId: {
    production: "LUIZbIuJ_xVZxwhkNAApcO4O_6o",
    integration: "LUIZbIuJ_xVZxwhkNAApcO4O_6o",
    nonProduction: "socialWorkEngland",
  },
  isAvailableInWelsh: false,
  clientType: "service",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: true, nonProduction: true },
  translations: {
    en: {
      header: "Apply to become a registered social worker in England",
      linkText: "Apply to become a registered social worker in England",
      linkUrl:
        "https://www.socialworkengland.org.uk/registration/apply-for-registration",
      startUrl:
        "https://www.socialworkengland.org.uk/registration/apply-for-registration/",
      startText: "apply to become a registered social worker in England",
    },
  },
  isOffboarded: false,
};

export default socialWorkEngland;
