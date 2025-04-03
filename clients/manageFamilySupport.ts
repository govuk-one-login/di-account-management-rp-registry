import { Client } from "../interfaces/client.interface";

const manageFamilySupport: Client = {
  clientId: {
    production: "zbNToJPcre4BXEap0na8kOjniKg",
    integration: "zbNToJPcre4BXEap0na8kOjniKg",
    nonProduction: "manageFamilySupport",
  },
  isAvailableInWelsh: false,
  isAllowed: true,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: true, nonProduction: true },
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
};

export default manageFamilySupport;
