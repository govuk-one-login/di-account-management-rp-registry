import { Client } from "../interfaces/client.interface";

const welshGovChildcareOfferForWalesParents: Client = {
  clientId: {
    production: "gdSTmZ0aYkk8_WelrcniDkFKOMw",
    integration: "gdSTmZ0aYkk8_WelrcniDkFKOMw",
    nonProduction: "welshGovChildcareOfferForWalesParents",
  },
  isAvailableInWelsh: true,
  showInAccounts: true,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Childcare Offer for Wales: Parents and Guardians",
      description: "Childcare Offer for Wales parents/guardians.",
      linkText: "Sign in to your Childcare Offer for Wales account",
      linkUrl: "https://parent.childcareoffer.service.gov.wales",
      startUrl:
        "https://www.gov.wales/get-30-hours-childcare-3-and-4-year-olds/apply",
      startText: "Childcare Offer for Wales: parents and guardians",
    },
    cy: {
      header: "Cynnig Gofal Plant Cymru: Rhieni a Gwarcheidwaid",
      description: "Cynnig Gofal Plant Cymru i rieni/gwarcheidwaid.",
      linkText: "Mewngofnodi i’ch cyfrif Cynnig Gofal Plant Cymru",
      linkUrl: "https://rhieni.cynniggofalplant.gwasanaeth.llyw.cymru",
      startUrl:
        "https://www.llyw.cymru/cael-30-awr-o-ofal-plant-ar-gyfer-plant-3-4-oed/gwneud-cais",
      startText: "Cynnig Gofal Plant Cymru: rhieni a gwarcheidwaid",
    },
  },
  isOffboarded: false,
};

export default welshGovChildcareOfferForWalesParents;
