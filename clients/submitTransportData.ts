import { Client } from "../interfaces/client.interface";

const submitTransportData: Client = {
  clientId: {
    production: "3382C-WpmLG68IHdDxQ-xGVLvzo",
    integration: "3382C-WpmLG68IHdDxQ-xGVLvzo",
    nonProduction: "submitTransportData",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Submit transport data",
      description:
        "Manage and monitor local transport data collections from local authorities.",
      linkText: "Go to your Submit transport data account",
      linkUrl: "https://submit-transport-data.dft.gov.uk/Account",
    }
  },
  isOffboarded: false,
};

export default submitTransportData;
