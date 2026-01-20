import { Client } from "../interfaces/client.interface";

const coClientServiceJobs: Client = {
  clientId: {
    production: "JbFTEj93ueyJAvYy75HzIc1790I",
    integration: "JbFTEj93ueyJAvYy75HzIc1790I",
    nonProduction: "coClientServiceJobs",
  },
  isAvailableInWelsh: true,
  showInAccounts: true,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Civil Service Jobs",
      description:
        "Find jobs in the Civil Service and manage your applications.",
      linkText: "Go to Civil Service Jobs",
      linkUrl: "https://beta.civilservicejobs.gov.uk/",
    },
    cy: {
      header: "Swyddi'r Gwasanaeth Sifil",
      description:
        "Dod o hyd i swyddi yn y Gwasanaeth Sifil a rheoli eich ceisiadau.",
      linkText: "Ewch i Swyddi'r Gwasanaeth Sifil",
      linkUrl: "https://beta.civilservicejobs.gov.uk/",
    },
  },
  isOffboarded: true,
};

export default coClientServiceJobs;
