import { Client } from "../interfaces/client.interface";

const dwpAccessToWork: Client = {
  clientId: {
    production: "zc7NmawFmzcouFBU86FgfC6ZrJc",
    integration: "hgJbq8BgcVcNLqjweZS-DP0TdNo",
    nonProduction: "dwpAccessToWork",
  },
  isAvailableInWelsh: true,
  showInAccounts: new Date(2025, 10, 26),
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: new Date(2025, 10, 26),
  showInDeleteAccount: new Date(2025, 10, 26),
  showInSearchableList: new Date(2025, 10, 26),
  translations: {
    en: {
      header: "Claim money from your Access to Work grant",
      description: "Check the progress of your claims and update your details.",
      linkText: "Go to your Access to Work account",
      linkUrl: "https://www.get-disability-work-support.service.gov.uk/claim",
      startText: "Claim money from your Access to Work grant",
      startUrl: "https://www.gov.uk/access-to-work/claiming-from-your-grant",
    },
    cy: {
      header: "Gwneud cais am arian yn ôl gan Mynediad at Waith",
      description:
        "Gwirio datblygiad eich ceisiadau a diweddaru eich manylion.",
      linkText: "Ewch i'ch cyfrif Mynediad at Waith",
      linkUrl: "https://www.get-disability-work-support.service.gov.uk/claim",
      startText: "Gwneud cais am arian yn ôl gan Mynediad at Waith",
      startUrl: "https://www.gov.uk/access-to-work/claiming-from-your-grant",
    },
  },
  isOffboarded: false,
};

export default dwpAccessToWork;
