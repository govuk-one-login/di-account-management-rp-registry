import { Client } from "../interfaces/client.interface";

const HNTAS: Client = {
  clientId: {
    production: "7GfZd9BDeYbXvEAkJKlORRGq6XI", // pragma: allowlist secret
    integration: "7GfZd9BDeYbXvEAkJKlORRGq6XI", // pragma: allowlist secret
    nonProduction: "HNTAS",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Certify your heat networks",
      description: "Share your network details and track the progress of your certification.",
      linkText: "Go to your Certify your heat networks account",
      linkUrl: "https://certify-your-heat-networks.service.gov.uk/dashboard",
    }
  },
  isOffboarded: false,
};

export default HNTAS;