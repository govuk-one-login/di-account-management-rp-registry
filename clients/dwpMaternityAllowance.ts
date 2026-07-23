import { Client } from "../interfaces/client.interface";

const goLiveAt = new Date("Mon Jun 1 2026 00:00:00 GMT+0100");

const dwpMaternityAllowance: Client = {
  clientId: {
    production: "fa96gl_XKILTF5IyuzmVUPnSa20",
    integration: "fa96gl_XKILTF5IyuzmVUPnSa20",
    nonProduction: "dwpMaternityAllowance",
  },
  isAvailableInWelsh: false,
  showInAccounts: goLiveAt,
  showInServices: false,
  showInActivityHistory: goLiveAt,
  showInDeleteAccount: goLiveAt,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Maternity Allowance",
      description:
        "Apply for Maternity Allowance if you need financial support.",
      linkText: "Go to apply for Maternity Allowance",
      linkUrl:
        "https://maternity-allowance.dwp.gov.uk/maternity-allowance/apply/claimant-details/your-name",
    },
  },
  isOffboarded: false,
};

export default dwpMaternityAllowance;
