import { Client } from "../interfaces/client.interface";

const welshRevAuthVisitorAccomodationProviders: Client = {
  clientId: {
    production: "2mhgqmHQtJn8pVnS74V0wY7Mlo0",
    integration: "2mhgqmHQtJn8pVnS74V0wY7Mlo0",
    nonProduction: "welshRevAuthVisitorAccomodationProviders",
  },
  isAvailableInWelsh: true,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Register your visitor accommodation in Wales",
      description: "Register your visitor accommodation and search for visitor accommodation providers in Wales.",
      linkText: "Go to your Register your visitor accommodation in Wales account",
      linkUrl: "https://registervisitoraccommodation.service.gov.wales/user/your-name",
    },
    cy: {
      header: "",
      description: "Cofrestrwch eich llety i ymwelwyr yng Nghymru.",
      linkText: "Ewch i'ch cyfrif llety i ymwelwyr yng Nghymru",
      linkUrl: "https://registervisitoraccommodation.service.gov.wales/user/your-name",
    },
  },
  isOffboarded: false,
};

export default welshRevAuthVisitorAccomodationProviders;