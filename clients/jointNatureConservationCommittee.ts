import { Client } from "../interfaces/client.interface";

const jointNatureConservationCommittee: Client = {
  clientId: {
    production: "glcH6E9VxtnCAPPwBt550zDh22Q",
    integration: "glcH6E9VxtnCAPPwBt550zDh22Q",
    nonProduction: "joinNatureConservationCommittee",
  },
  showInAccounts: true,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  isAvailableInWelsh: true,
  translations: {
    en: {
      header: "Air pollution assessment service",
      description: "Upload environmental risk assessment results to use for in-combination assessments.",
      linkText: "Go to your Air pollution assessment service account",
      linkUrl:
        "https://get-an-air-pollution-assessment-archive.service.gov.uk",
      startUrl:
        "https://www.gov.uk/guidance/get-an-air-pollution-assessment",
    },
    cy: {
      header: "Gwasanaeth asesu llygredd aer",
      description: "Llwytho canlyniadau asesu risg amgylcheddol i'w defnyddio ar gyfer asesiadau cyfunol.",
      linkText: "Ewch i'ch Cyfrif gwasanaeth asesu llygredd aer",
      linkUrl:
        "https://get-an-air-pollution-assessment-archive.service.gov.uk",
      startUrl:
        "https://www.gov.uk/guidance/get-an-air-pollution-assessment",
    }
  },
  isOffboarded: false,
};

export default jointNatureConservationCommittee;
