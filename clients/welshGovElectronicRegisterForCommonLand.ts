import { Client } from "../interfaces/client.interface";

const welshGovElectronicRegisterForCommonLand: Client = {
  clientId: {
    production: "3LlqQpWN3XySoIJmkw1OyBdeIWM",
    integration: "3LlqQpWN3XySoIJmkw1OyBdeIWM",
    nonProduction: "welshGovElectronicRegisterForCommonLand",
  },
  isAvailableInWelsh: true,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: true,
  translations: {
    en: {
      header: "Manage the Register of Common Land in Wales",
      description: "Update and maintain common land registers.",
      linkText: "Go to your Manage the Register of Common Land account",
      linkUrl: "https://commonland.service.gov.wales/admin",
      startUrl:
        "https://commonland.service.gov.wales/",
      startText: "Manage the Register of Common Land in Wales",
    },
    cy: {
      header: "Rheoli’r Gofrestr Tir Comin yng Nghymru",
      description: "Diweddaru a chynnal cofrestrau tir comin yng Nghymru.",
      linkText: "Ewch i'ch cyfrif Rheoli'r Gofrestr Tir Comin yng Nghymru",
      linkUrl: "https://tircomin.gwasanaeth.llyw.cymru/admin",
      startUrl:
        "https://tircomin.gwasanaeth.llyw.cymru/",
      startText: "Rheoli’r Gofrestr Tir Comin yng Nghymru",
    },
  },
  isOffboarded: false,
};

export default welshGovElectronicRegisterForCommonLand;
