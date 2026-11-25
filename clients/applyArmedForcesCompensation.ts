import { Client } from "../interfaces/client.interface";

const applyArmedForcesCompensation: Client = {
  clientId: {
    production: "gKJ2YINNmukQJV3C00-vXvZiAwM",
    integration: "gKJ2YINNmukQJV3C00-vXvZiAwM",
    nonProduction: "applyArmedForcesCompensation",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: true,
  translations: {
    en: {
      header: "Apply for Armed Forces Compensation or a War Pension",
      description:
        "Apply for compensation if you’re a veteran or serviceperson.",
      linkText: "Go to your Apply for Armed Forces Compensation or a War Pension application",
      linkUrl: "https://apply-armed-forces-compensation-or-war-pension.service.gov.uk/tasklist",
      startUrl: "https://www.gov.uk/guidance/apply-for-armed-forces-compensation-or-a-war-pension",
      startText: "Apply for Armed Forces Compensation or War Pension Application",
    },
  },
  isOffboarded: false,
};

export default applyArmedForcesCompensation;
