import { Client } from "../interfaces/client.interface";

const prisonVisits: Client = {
  clientId: {
    production: "XbPzF-ccO0utCxlifxSyA4Ng0API2XTCQQ",
    integration: "XbPzF-ccO0utCxlifxSyA4Ng0API2XTCQQ",
    nonProduction: "prisonVisits",
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
      header: "Visit someone in prison",
      description: "Make a booking to visit someone in prison.",
      linkText: "Go to your visit someone in prison account",
      linkUrl: "https://prison-visits.service.justice.gov.uk/",
    },
  },
  isOffboarded: false,
};

export default prisonVisits;
