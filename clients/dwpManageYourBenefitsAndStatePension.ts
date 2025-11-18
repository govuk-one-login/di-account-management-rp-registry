import { Client } from "../interfaces/client.interface";

const dwpManageYourBenefitsAndStatePension: Client = {
  clientId: {
    production: "fFINUNDOgj6yjWru8UUlfNvuz94",
    integration: "fFINUNDOgj6yjWru8UUlfNvuz94",
    nonProduction: "dwpManageYourBenefitsAndStatePension",
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
      header: "Manage your benefits and State Pension",
      description:
        "Get proof of your benefits or State Pension and update your personal information.",
      linkText: "Go to your benefits and State Pension account",
      linkUrl:
        "https://www.manage-benefits-state-pension.service.gov.uk/account-home/your-account",
      startText: "Manage your benefits and State Pension",
      startUrl: "https://www.gov.uk/proof-benefits-state-pension",
    },
    cy: {
      header: "Rheoli eich budd-daliadau a Phensiwn y Wladwriaeth",
      description:
        "Cael prawf o'ch budd-daliadau neu Bensiwn y Wladwriaeth a diweddaru eich manylion personol.",
      linkText: "Ewch i'ch cyfrif budd-daliadau a Phensiwn y Wladwriaeth",
      linkUrl:
        "https://www.manage-benefits-state-pension.service.gov.uk/account-home/your-account",
      startText: "Rheoli eich budd-daliadau a Phensiwn y Wladwriaeth",
      startUrl: "https://www.gov.uk/prawf-budd-daliadau-pensiwn-y-wladwriaeth",
    },
  },
  isOffboarded: false,
};

export default dwpManageYourBenefitsAndStatePension;
