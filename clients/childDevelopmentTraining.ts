import { Client } from "../interfaces/client.interface";

const childDevelopmentTraining: Client = {
  clientId: {
    production: "txsGLvMYYCPaWPZRq2L7XxEnyro",
    integration: "txsGLvMYYCPaWPZRq2L7XxEnyro",
    nonProduction: "childDevelopmentTraining",
  },
  isAvailableInWelsh: false,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: true,
  showInClientSearch: { production: true, nonProduction: true },
  translations: {
    en: {
      header: "Early years child development training",
      description:
        "Training on child development, including advice on supporting child development in your early years setting.",
      linkText: "Go to your early years child development training account",
      linkUrl: "https://child-development-training.education.gov.uk/my-modules",
      startUrl: "https://child-development-training.education.gov.uk/",
      startText: "Early years child development training",
    },
  },
  isOffboarded: false,
};

export default childDevelopmentTraining;
