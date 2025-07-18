import { Client } from "../interfaces/client.interface";

const intellectualPropertyOffice: Client = {
  clientId: {
    production: "Mh3SUEDHB74A2SIB_1VAXZKG_iw",
    integration: "Mh3SUEDHB74A2SIB_1VAXZKG_iw",
    nonProduction: "intellectualPropertyOffice",
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
      header: "Manage intellectual property",
      description:
        "Manage patents and applications you own or represent with the Intellectual Property Office.",
      linkText: "Go to manage your intellectual property",
      linkUrl: "https://www.manage-intellectual-property.service.gov.uk/",
    },
    cy: {
      header: "Rheoli eiddo deallusol",
      description:
        "Rheoli patentau a cheisiadau rydych yn berchen arnynt neu'n eu cynrychioli gyda'r Swyddfa Eiddo Deallusol.",
      linkText: "Ewch i reoli eich eiddo deallusol",
      linkUrl: "https://www.manage-intellectual-property.service.gov.uk/cy",
    },
  },
  isOffboarded: false,
};

export default intellectualPropertyOffice;
