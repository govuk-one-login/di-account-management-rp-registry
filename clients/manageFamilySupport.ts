import { Client } from "../interfaces/client.interface";

const manageFamilySupport: Client = {
  clientId: {
    production: "zbNToJPcre4BXEap0na8kOjniKg",
    integration: "zbNToJPcre4BXEap0na8kOjniKg",
    nonProduction: "manageFamilySupport",
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
      header: "Manage family support services and accounts",
      description:
        "Add and manage accounts and services in 'Find support for your family' and 'Connect families to support'.",
      linkText: "Go to your manage family support services account",
      linkUrl:
        "https://manage-family-support-services-and-accounts.education.gov.uk/Welcome",
    },
  },
  isOffboarded: true,
};

export default manageFamilySupport;
