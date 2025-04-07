import { Client } from "../interfaces/client.interface";

const ukmcab: Client = {
  clientId: {
    production: "9fduJ6KAE8WwCb1VCKp788BC8mM",
    integration: "KiYrXyFTTy0JFZyYJI22WuxPIf8",
    nonProduction: "ukmcab",
  },
  isAvailableInWelsh: false,
  isAllowed: true,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: true, nonProduction: true },
  translations: {
    en: {
      header: "Find a UK market conformity assessment body",
      description: "Manage conformity assessment bodies on the register.",
      linkText: "Go to your conformity assessment body account",
      linkUrl:
        "https://find-a-conformity-assessment-body.service.gov.uk/account/login",
    },
  },
};

export default ukmcab;
