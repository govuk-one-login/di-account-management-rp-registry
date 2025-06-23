import { Client } from "../interfaces/client.interface";

const modernSlavery: Client = {
  clientId: {
    production: "pDqO7_Hu-pq5wam5I4MlURXrv5k",
    integration: "pDqO7_Hu-pq5wam5I4MlURXrv5k",
    nonProduction: "modernSlavery",
  },
  isAvailableInWelsh: false,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: true, nonProduction: true },
  translations: {
    en: {
      header: "Modern slavery statement registry",
      description:
        "Add or edit the statements that say what your organisation is doing to eliminate modern slavery from its supply chains.",
      linkText: "Go to your modern slavery statement registry account",
      linkUrl:
        "https://modern-slavery-statement-registry.service.gov.uk/manage-organisations",
      startUrl:
        "https://www.gov.uk/guidance/add-your-modern-slavery-statement-to-the-statement-registry",
      startText: "Modern slavery statement registry",
    },
  },
  isOffboarded: false,
};

export default modernSlavery;
