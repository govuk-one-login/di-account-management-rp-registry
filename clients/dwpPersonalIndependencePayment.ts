import { Client } from "../interfaces/client.interface";

const dwpPersonalIndependencePayment: Client = {
  clientId: {
    production: "A03QrGd-By1RbjBRez8U88xgx3w",
    integration: "A03QrGd-By1RbjBRez8U88xgx3w",
    nonProduction: "dwpPersonalIndependencePayment",
  },
  isAvailableInWelsh: true,
  showInAccounts: true,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: true,
  translations: {
    en: {
      header: "Apply for Personal Independence Payment (PIP)",
      description:
        "Apply for PIP, upload evidence and view your application.",
      linkText: "Go to PIP Home",
      linkUrl:
        "https://www.apply-for-pip.dwp.gov.uk/home",
      startText: "Apply for Personal Independence Payment (PIP)",
      startUrl: "https://www.gov.uk/pip",
    },
    cy: {
      header: "Gwneud cais am Daliad Annibyniaeth Personol (PIP)",
      description:
        "Gwneud cais am PIP, llwytho tystiolaeth a gweld eich cais.",
      linkText: "Ewch i Hafan PIP",
      linkUrl:
        "https://www.apply-for-pip.dwp.gov.uk/home",
      startText: "Gwneud cais am Daliad Annibyniaeth Personol (PIP)",
      startUrl: "https://www.gov.uk/pip",
    },
  },
  isOffboarded: false,
};

export default dwpPersonalIndependencePayment;
