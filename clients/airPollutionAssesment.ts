import { Client } from "../interfaces/client.interface";

const airPollutionAssesment: Client = {
  clientId: {
    production: "glcH6E9VxtnCAPPwBt550zDh22Q",
    integration: "glcH6E9VxtnCAPPwBt550zDh22Q",
    nonProduction: "airPollutionAssesment",
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
      header: "Air pollution assessment service",
      description:
        "Upload environmental risk assessment results to use for in-combination assessments.",
      linkText: "Go to your Air pollution assessment service account",
      linkUrl: {
        nonProduction: "https://register-dev.aerius.uk",
        integration:
          "https://get-an-air-pollution-assessment-archive.service.gov.uk",
        production:
          "https://get-an-air-pollution-assessment-archive.service.gov.uk",
      },
    },
  },
  isOffboarded: false,
};

export default airPollutionAssesment;
