import { Client } from "../interfaces/client.interface";

const welshFisheriesPermit: Client = {
  clientId: {
    production: "tPCCSyoMaFNbLTt0gEW609h15Uc",
    integration: "tPCCSyoMaFNbLTt0gEW609h15Uc",
    nonProduction: "welshFisheriesPermit",
  },
  isAvailableInWelsh: true,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: true, nonProduction: true },
  translations: {
    en: {
      header: "Manage fishing permits and catch returns in Wales",
      description:
        "Apply for a fishing permit and submit your catch returns in Wales.",
      linkText: "Go to your fishing permits and catch returns account",
      linkUrl: "https://fishingpermitsandcatches.service.gov.wales",
      startUrl: "https://www.gov.wales/apply-fishing-permit",
      startText: "manage fishing permits and catch returns in Wales",
    },
    cy: {
      header: "Rheoli trwyddedau pysgota a datganiadau dalfeydd yng Nghymru",
      description:
        "Gwneud cais am drwydded bysgota a chyflwyno eich datganiadau dalfeydd yng Nghymru.",
      linkText: "Ewch i’ch cyfrif trwyddedau pysgota a datganiadau dalfeydd",
      linkUrl: "https://fishingpermitsandcatches.service.gov.wales",
      startUrl: "https://www.llyw.cymru/cais-am-drwydded-bysgota",
      startText: "Rheoli trwyddedau pysgota a datganiadau dalfeydd yng Nghymru",
    },
  },
  isOffboarded: false,
};

export default welshFisheriesPermit;
