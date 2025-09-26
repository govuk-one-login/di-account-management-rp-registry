import { Client } from "../interfaces/client.interface";

const dwpManageMyStatePension: Client = {
  clientId: {
    production: "cugiITLIAK6BbpfAnjiAxMDcJ9o",
    integration: "cugiITLIAK6BbpfAnjiAxMDcJ9o",
    nonProduction: "dwpManageMyStatePension",
  },
  isAvailableInWelsh: true,
  showInAccounts: true,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: true,
  translations: {
    en: {
      header: "Manage your State Pension",
      description:
        "View your State Pension payment schedule and manage your contact details.",
      linkText: "Go to your Manage your State Pension account",
      linkUrl:
        "https://www.manage-state-pension.service.gov.uk/your-state-pension",
      startText: "Manage your State Pension account",
      startUrl: "https://www.manage-state-pension.service.gov.uk/start",
    },
    cy: {
      header: "Rheoli eich Pensiwn y Wladwriaeth",
      description:
        "Gweld eich amserlen talu Pensiwn y Wladwriaeth a rheoli eich manylion cyswllt.",
      linkText: "Ewch i'ch cyfrif Rheoli eich Pensiwn y Wladwriaeth",
      linkUrl:
        "https://www.manage-state-pension.service.gov.uk/your-state-pension?lang=cy",
      startText: "Cyfrif Rheoli eich Pensiwn y Wladwriaeth",
      startUrl: "https://www.manage-state-pension.service.gov.uk/start?lang=cy",
    },
  },
  isOffboarded: false,
};

export default dwpManageMyStatePension;
