import { Client } from "../interfaces/client.interface";

const desnzHomeEnergyAdvice: Client = {
  clientId: {
    production: "DY8Amii0Y5fBuUCfqyN5OBLl70A",
    integration: "DY8Amii0Y5fBuUCfqyN5OBLl70A",
    nonProduction: "desnzHomeEnergyAdvice",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Home Energy Advice (HEA)",
      description: "Get personalised advice for your property, check if you’re eligible for a grant, and explore simple guides to make your home warmer and cheaper to run.",
      linkText: "Go to your Home Energy Advice account",
      linkUrl: "https://www.get-home-energy-advice.service.gov.uk",
    }
  },
  isOffboarded: false,
};

export default desnzHomeEnergyAdvice;