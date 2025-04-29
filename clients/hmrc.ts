import { Client } from "../interfaces/client.interface";

const hmrc: Client = {
  clientId: {
    production: "mQDXGO7gWdK7V28v82nVcEGuacY",
    integration: "mQDXGO7gWdK7V28v82nVcEGuacY",
    nonProduction: "hmrc",
  },
  isAvailableInWelsh: true,
  clientType: "service",
  isHmrc: true,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: false, nonProduction: false },
  translations: {
    en: {
      header: "A service run by HM Revenue and Customs (HMRC)",
      linkText: "Find the HMRC service you need",
      linkUrl: "https://www.gov.uk/government/organisations/hm-revenue-customs",
      hintText: "For example services about tax, childcare, or state pensions.",
      paragraph1:
        "At the moment, GOV.UK One Login cannot show you which HMRC service you’ve used.",
      paragraph2: "We’re working to make this possible.",
    },
    cy: {
      header: "Gwasanaeth a weithredir gan Gyllid a Thollau EF (CThEF)",
      linkText: "Dod o hyd i wasanaeth CThEF rydych ei angen",
      linkUrl:
        "https://www.gov.uk/government/organisations/hm-revenue-customs.cy",
      hintText:
        "Er enghraifft gwasanaethau am dreth, gofal plant, neu bensiynau'r wladwriaeth.",
      paragraph1:
        "Ar hyn o bryd, ni all GOV.UK One Login ddangos i chi pa wasanaeth CThEF rydych wedi'i ddefnyddio.",
      paragraph2: "Rydym yn gweithio i wneud hyn yn bosibl.",
    },
  },
  isOffboarded: false,
};

export default hmrc;
