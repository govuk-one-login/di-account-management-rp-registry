import { Client } from "../interfaces/client.interface";

const childDevelopmentTraining: Client = {
  clientId: {
    production: "txsGLvMYYCPaWPZRq2L7XxEnyro",
    integration: "txsGLvMYYCPaWPZRq2L7XxEnyro",
    nonProduction: "childDevelopmentTraining",
  },
  isAvailableInWelsh: true,
  isAllowed: true,
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
    },
    cy: {
      header: "Hyfforddiant datblygiad plant blynyddoedd cynnar",
      description:
        "Hyfforddiant ar ddatblygiad plant, gan gynnwys cyngor ar gefnogi datblygiad plant yn eich lleoliad blynyddoedd cynnar.",
      linkText:
        "Ewch i'ch cyfrif hyfforddiant datblygiad plant blynyddoedd cynnar",
      linkUrl: "https://child-development-training.education.gov.uk/my-modules",
    },
  },
};

export default childDevelopmentTraining;
