import { Client } from "../interfaces/client.interface";

const dwpBenefitOwed: Client = {
  clientId: {
    production: "kvGpTatgWm3YqXHbG41eOdDf91k",
    integration: "iOf3hyG7eymusbSUS6LgFeQ7AtU",
    nonProduction: "dwpBenefitOwed",
  },
  isAvailableInWelsh: true,
  showInAccounts: true,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Repay and manage benefit money you owe",
      description:
        "Repay any money you owe to the Department for Work and Pensions (DWP).",
      linkText: "Go to your Repay and manage benefit money you owe account",
      linkUrl: {
        nonProduction:
          "https://www.repay-manage-benefit-owed.service.gov.uk/oidv-sign-in",
        integration: "http://localhost:8000/landing?source=your-services",
        production:
          "https://www.repay-manage-benefit-owed.service.gov.uk/oidv-sign-in",
      },
    },
    cy: {
      header: "Ad-dalu a rheoli arian budd-dal sy'n ddyledus gennych",
      description:
        "Ad-dalu unrhyw arian sy'n ddyledus gennych i'r Adran Gwaith a Phensiynau (DWP).",
      linkText: "Ewch i Ad-dalu a rheoli arian budd-dal sy’n ddyledus gennych",
      linkUrl: {
        nonProduction:
          "https://www.repay-manage-benefit-owed.service.gov.uk/oidv-sign-in",
        integration: "http://localhost:8000/landing?source=your-services",
        production:
          "https://www.repay-manage-benefit-owed.service.gov.uk/oidv-sign-in",
      },
    },
  },
  isOffboarded: false,
};

export default dwpBenefitOwed;
