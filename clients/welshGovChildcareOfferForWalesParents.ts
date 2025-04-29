import { Client } from "../interfaces/client.interface";

const welshGovChildcareOfferForWalesParents: Client = {
  clientId: {
    production: "gdSTmZ0aYkk8_WelrcniDkFKOMw",
    integration: "gdSTmZ0aYkk8_WelrcniDkFKOMw",
    nonProduction: "welshGovChildcareOfferForWalesParents",
  },
  isAvailableInWelsh: true,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: false, nonProduction: false },
  translations: {
    en: {
      header: "Childcare Offer for Wales: Parents and Guardians",
      description: "Childcare Offer for Wales parents/guardians.",
      linkText: "Sign in to your Childcare Offer for Wales account",
      linkUrl: "https://parent.childcareoffer.service.gov.wales",
    },
    cy: {
      header: "Cynnig Gofal Plant Cymru: Rhieni a Gwarcheidwaid",
      description: "Cynnig Gofal Plant Cymru i rieni/gwarcheidwaid.",
      linkText: "Mewngofnodi i’ch cyfrif Cynnig Gofal Plant Cymru",
      linkUrl: "https://rhieni.cynniggofalplant.gwasanaeth.llyw.cymru",
    },
  },
  isOffboarded: false,
};

export default welshGovChildcareOfferForWalesParents;
