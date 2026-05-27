import { Client } from "../interfaces/client.interface";

const dwpMaternityAllowance: Client = {
  clientId: {
    production: "fa96gl_XKILTF5IyuzmVUPnSa20",
    integration: "fa96gl_XKILTF5IyuzmVUPnSa20",
    nonProduction: "dwpMaternityAllowance",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Maternity Allowance",
      description:
        "Apply for Maternity Allowance if you need financial support.",
      linkText: "Go to apply for Maternity Allowance",
      linkUrl:
        "https://maternity-allowance.dwp.gov.uk/maternity-allowance/apply/claimant-details/your-name",
      startUrl: "https://www.gov.uk/maternity-allowance",
    },
  },
  isOffboarded: false,
};

export default dwpMaternityAllowance;
