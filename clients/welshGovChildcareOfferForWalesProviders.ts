import { Client } from "../interfaces/client.interface";

const welshGovChildcareOfferForWalesProviders: Client = {
  clientId: {
    production: "zxpIi7Wg-Opj9nSIluDLIwMP3V0",
    integration: "zxpIi7Wg-Opj9nSIluDLIwMP3V0",
    nonProduction: "welshGovChildcareOfferForWalesProviders",
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
      header: "Childcare Offer for Wales: Providers/Settings",
      description:
        "The Childcare Offer for Wales: Providers/Settings service allows childcare providers to manage Childcare Offer Agreements with parents and claim payments.",
      linkText: "Sign in to your Childcare Offer for Wales account",
      linkUrl: "https://provider.childcareoffer.service.gov.wales",
    },
    cy: {
      header: "Cynnig Gofal Plant Cymru: Darparwyr/Lleoliadau",
      description:
        "Mae gwasanaeth Cynnig Gofal Plant Cymru: Darparwyr/Lleoliadau yn galluogi darparwyr gofal plant i reoli Cytundebau Cynnig Gofal Plant gyda rhieni a hawlio taliadau.",
      linkText: "Mewngofnodi i’ch cyfrif Cynnig Gofal Plant Cymru",
      linkUrl: "https://darparwr.cynniggofalplant.gwasanaeth.llyw.cymru",
    },
  },
};

export default welshGovChildcareOfferForWalesProviders;
