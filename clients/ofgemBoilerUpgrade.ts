import { Client } from "../interfaces/client.interface";

const ofgemBoilerUpgrade: Client = {
  clientId: {
    production: "P3wuL8iIGnKEGCNLwgEVUX7S1eM",
    integration: "P3wuL8iIGnKEGCNLwgEVUX7S1eM",
    nonProduction: "ofgemBoilerUpgrade",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: true,
  translations: {
    en: {
      header: "Boiler Upgrade Scheme",
      description: "Apply for a voucher, redeem a voucher or cancel an application or voucher.",
      linkText: "Go to your BUS installer account",
      linkUrl: "https://boiler-upgrade-scheme.service.gov.uk/",
      startUrl: "https://www.ofgem.gov.uk/environmental-and-social-schemes/boiler-upgrade-scheme-bus/installer-sign-and-apply",
      startText: "Boiler upgrade scheme",
    }
  },
  isOffboarded: false,
};

export default ofgemBoilerUpgrade;