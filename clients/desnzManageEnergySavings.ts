import { Client } from "../interfaces/client.interface";

const desnzManageEnergySavings: Client = {
  clientId: {
    production: "zNRRx57bVhTdAZQEMa9Q0lXRb5o",
    integration: "zNRRx57bVhTdAZQEMa9Q0lXRb5o",
    nonProduction: "desnzManageEnergySavings",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: {
    production: new Date("Tue, 30 Sep 2025 00:00:00 GMT+1"),
    nonProduction: true,
  },
  translations: {
    en: {
      header: "Manage your Energy Savings Opportunity Scheme reporting",
      description:
        "Create, edit and submit notifications of compliance, action plans and progress updates to comply with the Energy Savings Opportunity Scheme (ESOS).",
      linkText: "Go to your ESOS dashboard",
      linkUrl:
        "https://manage-energy-saving-opportunities-reporting.service.gov.uk/dashboard",
      startUrl:
        "https://manage-energy-saving-opportunities-reporting.service.gov.uk/",
      startText: "Energy Savings Opportunity Scheme reporting",
    },
  },
  isOffboarded: false,
};

export default desnzManageEnergySavings;
