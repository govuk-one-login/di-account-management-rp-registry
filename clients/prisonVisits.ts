import { Client } from "../interfaces/client.interface";

const prisonVisits: Client = {
  clientId: {
    production: "XbPzF-ccO0utCxlifxSyA4Ng0API2XTCQQ",
    integration: "XbPzF-ccO0utCxlifxSyA4Ng0API2XTCQQ",
    nonProduction: "prisonVisits",
  },
  isAvailableInWelsh: true,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: true,
  translations: {
    en: {
      header: "Visit someone in prison",
      description: "Make a booking to visit someone in prison.",
      linkText: "Go to your visit someone in prison account",
      linkUrl: "https://prison-visits.service.justice.gov.uk/",
      startUrl: "https://www.gov.uk/prison-visits",
      startText: "Visit someone in prison",
    },
    cy: {
      header: "Ymweld â rhywun yn y carchar",
      description: "Gwneud archeb i ymweld â rhywun yn y carchar.",
      linkText: "Ewch i'ch cyfrif ymweld â rhywun yn y carchar",
      linkUrl: "https://prison-visits.service.justice.gov.uk/",
      startUrl: "https://www.gov.uk/prison-visits",
      startText: "Ymweld â rhywun yn y carchar",
    }
  },
  isOffboarded: false,
};

export default prisonVisits;
