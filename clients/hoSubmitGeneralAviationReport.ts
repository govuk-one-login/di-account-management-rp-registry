import { Client } from "../interfaces/client.interface";

const hoSubmitGeneralAviationReport: Client = {
  clientId: {
    production: "pr5XqmAxS1sVj5e7hVhL-P-hJ9Q",
    integration: "pr5XqmAxS1sVj5e7hVhL-P-hJ9Q",
    nonProduction: "hoSubmitGeneralAviationReport",
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
      header: "Submit a General Aviation Report (GAR)",
      description:
        "Edit, submit, view or cancel a General Aviation Report, and add or remove people on your flight.",
      linkText: "Go to your General Aviation Report account",
      linkUrl: "https://www.submit-general-aviation-report.service.gov.uk/home",
      startUrl:
        "https://www.submit-general-aviation-report.service.gov.uk/welcome/index",
      startText: "Submit a General Aviation Report (GAR)",
    },
  },
  isOffboarded: false,
};

export default hoSubmitGeneralAviationReport;
