import { Client } from "../interfaces/client.interface";

const NHSDentalServicesPortal: Client = {
  clientId: {
    production: "23EBIrseGRgOsTepVziF39X4kDE",
    integration: "23EBIrseGRgOsTepVziF39X4kDE",
    nonProduction: "NHSDentalServicesPortal",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "NHS Dental Services Portal",
      description: "Manage your NHS dental services.",
      linkText: "Manage your NHS dental services",
      linkUrl: "https://www.dentalservicesportal.nhsbsa.nhs.uk/global-navigation/landing-view",
    }
  },
  isOffboarded: false,
};

export default NHSDentalServicesPortal;