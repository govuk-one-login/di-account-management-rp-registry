import { Client } from "../interfaces/client.interface";

const modSupplierCyberProtection: Client = {
  clientId: {
    production: "oNDHNPrkflBnNyNijFx1yr3Kth8",
    integration: "oNDHNPrkflBnNyNijFx1yr3Kth8",
    nonProduction: "modSupplierCyberProtection",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Supplier Cyber Protection Service",
      description:
        "The tool supporting the Cyber Security Model (DEFCON 658). Your portal to completing and managing MOD Supplier Assurance Questionnaires (SAQs).",
      linkText: "Go to your Supplier Cyber Protection Service account",
      linkUrl: "https://www.supplier-cyber-protection.service.gov.uk/",
      startUrl: "https://www.supplier-cyber-protection.service.gov.uk/",
      startText: "Supplier Cyber Protection",
    },
  },
  isOffboarded: false,
};

export default modSupplierCyberProtection;
