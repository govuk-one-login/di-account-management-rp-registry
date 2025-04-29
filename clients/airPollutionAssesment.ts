import { Client } from "../interfaces/client.interface";

const airPollutionAssesment: Client = {
  clientId: {
    production: "glcH6E9VxtnCAPPwBt550zDh22Q",
    integration: "glcH6E9VxtnCAPPwBt550zDh22Q",
    nonProduction: "airPollutionAssesment",
  },
  isAvailableInWelsh: false,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: true, nonProduction: true },
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
