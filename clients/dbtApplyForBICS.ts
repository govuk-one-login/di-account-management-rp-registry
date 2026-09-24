import { Client } from "../interfaces/client.interface";

const dbtApplyForBICS: Client = {
  clientId: {
    production: "M7vqqdwKEfVAwnCpidhUpI4NuXo",
    integration: "M7vqqdwKEfVAwnCpidhUpI4NuXo",
    nonProduction: "dbtApplyForBICS",
  },
  isAvailableInWelsh: false,
  showInAccounts: false,
  showInServices: true,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Apply for the British Industrial Competitiveness Scheme (BICS)",
      linkText: "Create or continue an application for BICS",
      linkUrl: "https://apply-for-bics.service.gov.uk/",
    },
  },
  isOffboarded: false,
};

export default dbtApplyForBICS;
