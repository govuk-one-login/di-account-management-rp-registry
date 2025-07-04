import { Client } from "../interfaces/client.interface";

const dbtApplyForAnImportLicense: Client = {
  clientId: {
    production: "gSKx5snZtYsQWSQZRoKI2oV-7lQ",
    integration: "gSKx5snZtYsQWSQZRoKI2oV-7lQ",
    nonProduction: "dbtApplyForAnImportLicense",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: true,
  translations: {
    en: {
      header: "Apply for an import licence",
      description:
        "Apply for an import licence for anti-personnel mines, torture equipment for display, firearms and ammunition.",
      linkText: "Go to your import licence account",
      linkUrl: "https://apply-for-an-import-licence.service.gov.uk/workbasket/",
      startUrl: "https://www.gov.uk/guidance/import-controls",
      startText: "Apply for an import licence",
    },
  },
  isOffboarded: false,
};

export default dbtApplyForAnImportLicense;
