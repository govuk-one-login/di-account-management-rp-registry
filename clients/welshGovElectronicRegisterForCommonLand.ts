import { Client } from "../interfaces/client.interface";

const welshGovElectronicRegisterForCommonLand: Client = {
  clientId: {
    production: "3LlqQpWN3XySoIJmkw1OyBdeIWM",
    integration: "3LlqQpWN3XySoIJmkw1OyBdeIWM",
    nonProduction: "welshGovElectronicRegisterForCommonLand",
  },
  isAvailableInWelsh: true,
  showInAccounts: new Date(2025, 9, 15),
  showInServices: false,
  showInActivityHistory: new Date(2025, 9, 15),
  showInDeleteAccount: new Date(2025, 9, 15),
  showInSearchableList: false,
  translations: {
    en: {
      header: "Manage the Register of Common Land in Wales",
      description: "Update and maintain common land registers.",
      linkText: "Go to your Manage the Register of Common Land account",
      linkUrl: "https://commonland.service.gov.wales/admin",
    },
    cy: {
      header: "Rheoli’r Gofrestr Tir Comin yng Nghymru",
      description: "Diweddaru a chynnal cofrestrau tir comin yng Nghymru.",
      linkText: "Ewch i'ch cyfrif Rheoli'r Gofrestr Tir Comin yng Nghymru",
      linkUrl: "https://tircomin.gwasanaeth.llyw.cymru/admin",
    },
  },
  isOffboarded: false,
};

export default welshGovElectronicRegisterForCommonLand;
