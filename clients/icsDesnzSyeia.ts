import { Client } from "../interfaces/client.interface";

const icsDesnzSyeia: Client = {
  clientId: {
    production: "rzu_1wrYlk1XsKZ9JkjQTJU4DJc",
    integration: "rzu_1wrYlk1XsKZ9JkjQTJU4DJc",
    nonProduction: "icsDesnzSyeia",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Submit your energy infrastructure application",
      description: "Submit and manage your statutory energy infrastructure applications, documents, consultations and payments.",
      linkText: "Go to your Submit your energy infrastructure application account",
      linkUrl:
        "https://syeia.energysecurity.gov.uk/",
    },
  },
  isOffboarded: false,
};

export default icsDesnzSyeia;
