import { Client } from "../interfaces/client.interface";

const welshGovChildcareOfferForWalesProviders: Client = {
  clientId: {
    production: "zxpIi7Wg-Opj9nSIluDLIwMP3V0",
    integration: "zxpIi7Wg-Opj9nSIluDLIwMP3V0",
    nonProduction: "welshGovChildcareOfferForWalesProviders",
  },
  isAvailableInWelsh: true,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: false, nonProduction: false },
  translations: {
    en: {
      header: "Childcare Offer for Wales: Providers/Settings",
      description: "Childcare Offer for Wales providers.",
      linkText: "Sign in to your Childcare Offer for Wales account",
      linkUrl: "https://provider.childcareoffer.service.gov.wales",
      startUrl:
        "https://www.gov.wales/register-your-childcare-setting-get-childcare-offer-wales",
      startText: "Childcare Offer for Wales: providers",
    },
    cy: {
      header: "Cynnig Gofal Plant Cymru: Darparwyr/Lleoliadau",
      description: "Cynnig Gofal Plant Cymru i ddarparwyr.",
      linkText: "Mewngofnodi i’ch cyfrif Cynnig Gofal Plant Cymru",
      linkUrl: "https://darparwr.cynniggofalplant.gwasanaeth.llyw.cymru",
      startUrl:
        "https://www.llyw.cymru/cofrestrwch-eich-lleoliad-gofal-plant-i-gael-cynnig-gofal-plant-cymru",
      startText: "Cynnig Gofal Plant Cymru: darparwyr",
    },
  },
  isOffboarded: false,
};

export default welshGovChildcareOfferForWalesProviders;
