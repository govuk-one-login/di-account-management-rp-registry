import { Client } from "../interfaces/client.interface";

const govuk: Client = {
  clientId: {
    production: "LcueBVCnGZw-YFdTZ4S07XbQx7I",
    integration: "CEr97IZfEPQFgBxq8QNcM8LFxw4",
    nonProduction: "gov-uk",
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
      header: "GOV.UK email subscriptions",
      description:
        "See and manage the updates you get about GOV.UK pages you’re interested in.",
      linkText: "Go to your GOV.UK email subscriptions",
      linkUrl: {
        nonProduction:
          "https://www.integration.publishing.service.gov.uk/email/manage?from=your-services",
        integration:
          "https://www.staging.publishing.service.gov.uk/email/manage?from=your-services",
        production: "https://www.gov.uk/email/manage?from=your-services",
      },
      startUrl: "https://www.gov.uk/email/manage/authenticate",
      startText: "GOV.UK email subscriptions",
    },
  },
  isOffboarded: false,
};

export default govuk;
