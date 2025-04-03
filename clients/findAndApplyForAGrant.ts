import { Client } from "../interfaces/client.interface";

const findAndApplyForAGrant: Client = {
  clientId: {
    production: "tya4DoMpw_B7FK5YvuMAj3asc0A",
    integration: "tya4DoMpw_B7FK5YvuMAj3asc0A",
    nonProduction: "findAndApplyForAGrant",
  },
  isAvailableInWelsh: false,
  isAllowed: true,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: true, nonProduction: true },
  translations: {
    en: {
      header: "Find and apply for a grant",
      description: "Search and apply for government grant funding.",
      linkText: "Go to your grants account",
      linkUrl:
        "https://find-government-grants.service.cabinetoffice.gov.uk/apply/applicant",
    },
  },
};

export default findAndApplyForAGrant;
