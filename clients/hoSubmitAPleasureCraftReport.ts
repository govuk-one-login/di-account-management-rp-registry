import { Client } from "../interfaces/client.interface";

const hoSubmitAPleasureCraftReport: Client = {
  clientId: {
    production: "0b_nE_5NWIPUMyTgpniDrXRJL3k",
    integration: "0b_nE_5NWIPUMyTgpniDrXRJL3k",
    nonProduction: "hoSubmitAPleasureCraftReport",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: {
    production: new Date("Wed, 10 Sep 2025 23:00:00 GMT"),
    nonProduction: true,
  },
  translations: {
    en: {
      header: "Submit a Pleasure Craft Report",
      description:
        "Before you sail to or from the UK, submit your voyage plan with details of your vessel, people and goods on board to Border Force and HMRC.",
      linkText: "Go to your Submit a Pleasure Craft Report account",
      linkUrl: "https://www.spcr.homeoffice.gov.uk/voyage-plans",
      startText: "Submit a pleasure craft report",
      startUrl: "https://www.gov.uk/guidance/submit-a-pleasure-craft-report",
    },
  },
  isOffboarded: false,
};

export default hoSubmitAPleasureCraftReport;
