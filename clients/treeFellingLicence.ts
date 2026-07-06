import { Client } from "../interfaces/client.interface";

const treeFellingLicence: Client = {
  clientId: {
    production: "DQj6sd_d9n0ZC0HeIUxaprMRsgM",
    integration: "DQj6sd_d9n0ZC0HeIUxaprMRsgM",
    nonProduction: "treeFellingLicence",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Apply for a tree felling licence",
      description:
        "Manage your account, applications, properties and tree felling licences.",
      linkText: "Go to your Apply for a tree felling licence account",
      linkUrl:
        "https://apply-for-a-tree-felling-licence.service.gov.uk/Account/RegisterAccountType",
      startUrl:
        "https://apply-for-a-tree-felling-licence.service.gov.uk/Home/ApplyForALicence",
      startText: "Apply for a tree felling licence",
    },
  },
  isOffboarded: false,
};

export default treeFellingLicence;
