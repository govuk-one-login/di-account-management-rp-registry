import { Client } from "../interfaces/client.interface";

const apprenticeshipsService: Client = {
  clientId: {
    production: "x3F_Iu0LgqJpegY5ni0QSB0uezw",
    integration: "x3F_Iu0LgqJpegY5ni0QSB0uezw",
    nonProduction: "apprenticeshipsService",
  },
  isAvailableInWelsh: false,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: true,
  showInClientSearch: { production: true, nonProduction: true },
  translations: {
    en: {
      header: "Manage apprenticeships",
      description:
        "Manage your apprentices, training providers, recruitment and funding.",
      linkText: "Go to your apprenticeship service account",
      linkUrl: "https://accounts.manage-apprenticeships.service.gov.uk/service",
    },
  },
  isOffboarded: false,
};

export default apprenticeshipsService;
