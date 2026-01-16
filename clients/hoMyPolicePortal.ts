import { Client } from "../interfaces/client.interface";

const hoMyPolicePortal: Client = {
  clientId: {
    production: "lpbs49XzcfyPfDkMfLwrqxYpFlw",
    integration: "lpbs49XzcfyPfDkMfLwrqxYpFlw",
    nonProduction: "hoMyPolicePortal",
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
      header: "Get updates from the police",
      description:
        "Sign in to police force websites to get notifications, receive personalised updates and exchange messages.",
      linkText: "Go to your police account",
      linkUrl: "www.police.uk/portal/account",
    },
  },
  isOffboarded: false,
};

export default hoMyPolicePortal;
