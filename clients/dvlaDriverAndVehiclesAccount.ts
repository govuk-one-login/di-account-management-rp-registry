import { Client } from "../interfaces/client.interface";

const dvlaDriverAndVehiclesAccount: Client = {
  clientId: {
    production: "HPAUPxK87FyljocDdQxijxdti08",
    integration: "HPAUPxK87FyljocDdQxijxdti08",
    nonProduction: "dvlaDriverAndVehiclesAccount",
  },
  isAvailableInWelsh: true,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: true, nonProduction: true },
  translations: {
    en: {
      header: "Driver and vehicles account",
      description:
        "View and manage your details held by the Driver and Vehicle Licensing Agency (DVLA).",
      linkText: "Go to your Driver and vehicles account",
      linkUrl:
        "https://driver-and-vehicles-account.service.gov.uk/home?locale=en",
    },
    cy: {
      header: "Cyfrif gyrwyr a cherbydau",
      description:
        "Edrych ar a rheoli eich manylion a gedwir gan yr Asiantaeth Trwyddedu Gyrwyr a Cherbydau (DVLA).",
      linkText: "Ewch i'ch Cyfrif gyrwyr a cherbydau",
      linkUrl:
        "https://driver-and-vehicles-account.service.gov.uk/home?locale=cy",
    },
  },
  isOffboarded: false,
};

export default dvlaDriverAndVehiclesAccount;
