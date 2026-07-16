import { Client } from "../interfaces/client.interface";

const jointNatureConservationCommitteeAirPollutionAssessment: Client = {
  clientId: {
    production: "glcH6E9VxtnCAPPwBt550zDh22Q",
    integration: "glcH6E9VxtnCAPPwBt550zDh22Q",
    nonProduction: "joinNatureConservationCommittee",
  },
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  isAvailableInWelsh: true,
  translations: {
    en: {
      header: "Air pollution assessment service",
      description:
        "Upload environmental risk assessment results to use for in-combination assessments.",
      linkText: "Go to your Air pollution assessment service account",
      linkUrl: "https://archive.get-an-air-pollution-assessment.service.gov.uk",
    },
    cy: {
      header: "Gwasanaeth asesu llygredd aer",
      description:
        "Llwytho canlyniadau asesu risg amgylcheddol i'w defnyddio ar gyfer asesiadau cyfunol.",
      linkText: "Ewch i'ch Cyfrif gwasanaeth asesu llygredd aer",
      linkUrl: "https://archive.get-an-air-pollution-assessment.service.gov.uk",
    },
  },
  isOffboarded: false,
};

export default jointNatureConservationCommitteeAirPollutionAssessment;
