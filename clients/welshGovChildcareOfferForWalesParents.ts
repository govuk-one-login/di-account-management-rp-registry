import { Client } from "../interfaces/client.interface";

const welshGovChildcareOfferForWalesParents: Client = {
  clientId: {
    production: "gdSTmZ0aYkk8_WelrcniDkFKOMw",
    integration: "gdSTmZ0aYkk8_WelrcniDkFKOMw",
    nonProduction: "welshGovChildcareOfferForWalesParents",
  },
  isAvailableInWelsh: true,
  isAllowed: true,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: false, nonProduction: false },
  translations: {
    en: {
      header: "Childcare Offer for Wales: Parents and Guardians",
      description:
        "The Childcare Offer for Wales parents/guardians service allows account enables parents/guardians to apply for funded childcare and set up Childcare Offer Agreements with childcare settings.",
      linkText: "Sign in to your Childcare Offer for Wales account",
      linkUrl: "https://parent.childcareoffer.service.gov.wales",
    },
    cy: {
      header: "Cynnig Gofal Plant Cymru: Rhieni a Gwarcheidwaid",
      description:
        "Mae’r gwasanaeth rhieni/gwarcheidwaid Cynnig Gofal Plant Cymru yn galluogi rhieni/gwarcheidwaid i ymgeisio am ofal plant a ariennir a threfnu Cytundebau Cynnig Gofal Plant gyda lleoliadau gofal plant.",
      linkText: "Mewngofnodi i’ch cyfrif Cynnig Gofal Plant Cymru",
      linkUrl: "https://rhieni.cynniggofalplant.gwasanaeth.llyw.cymru",
    },
  },
};

export default welshGovChildcareOfferForWalesParents;
