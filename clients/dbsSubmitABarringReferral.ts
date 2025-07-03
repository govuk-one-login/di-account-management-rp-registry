import { Client } from "../interfaces/client.interface";

const dbsSubmitABarringReferral: Client = {
  clientId: {
    production: "bzy7BV0jTuApvQC9E4xw7b2gAIw",
    integration: "bzy7BV0jTuApvQC9E4xw7b2gAIw",
    nonProduction: "dbsSubmitABarringReferral",
  },
  isAvailableInWelsh: true,
  showInAccounts: true,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: true,
  translations: {
    en: {
      header: "Submit a barring referral",
      description:
        "Submit a barring referral if you are concerned that an individual may have harmed, or put at risk, a child or vulnerable adult.",
      linkText: "Go to your Submit a barring referral account",
      linkUrl:
        "https://www.submit-a-barring-referral.service.gov.uk/save-and-return/dashboard?lang=en",
      startUrl: "https://www.submit-a-barring-referral.service.gov.uk/start",
      startText: "Submit a barring referral",
    },
    cy: {
      header: "Cyflwyno atgyfeiriad gwahardd",
      description:
        "Cyflwyno atgyfeiriad gwahardd os ydych yn poeni y gallai plentyn, neu oedolyn bregus, fod mewn perygl.",
      linkText: "Ewch i'ch Cyfrif Cyflwyno atgyfeiriad gwahardd",
      linkUrl:
        "https://www.submit-a-barring-referral.service.gov.uk/save-and-return/dashboard?lang=cy",
      startUrl:
        "https://www.submit-a-barring-referral.service.gov.uk/start?lang=cy",
      startText: "Cyflwyno atgyfeiriad gwahardd",
    },
  },
  isOffboarded: false,
};

export default dbsSubmitABarringReferral;
