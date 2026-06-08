import { Client } from "../interfaces/client.interface";

const ofgemSupplierUploadPortal: Client = {
  clientId: {
    production: "dTKJW0U9EpT2TeU5J7QAaLk0Tug",
    integration: "dTKJW0U9EpT2TeU5J7QAaLk0Tug",
    nonProduction: "ofgemSupplierUploadPortal",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Ofgem Supplier Upload Portal",
      description:
        "Upload the completed template requested by Ofgem.",
      linkText: "Go to your Ofgem Supplier Upload Portal account",
      linkUrl: "https://marketsdataportal.ofgem.gov.uk/",
      startText: "",
      startUrl: "",
    },
  },
  isOffboarded: false,
};

export default ofgemSupplierUploadPortal;
