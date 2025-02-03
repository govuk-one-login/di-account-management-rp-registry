import { Client } from "../interfaces/client.interface";

const emailSubscriptionsClient: Client = {
    clientId: {
        production: "LcueBVCnGZw-YFdTZ4S07XbQx7I",
        integration: "CEr97IZfEPQFgBxq8QNcM8LFxw4",
        nonProduction: "gov-uk"
    },
    isAllowed: true,
    isAvailableInWelsh: true,
    isHmrc: false,
    showInClientSearch: true,
    isReportSuspiciousActivityEnabled: true,
    translations: {
        en: {
            header: "GOV.UK email subscriptions",
            description: "See and manage the updates you get about GOV.UK pages you’re interested in.",
            linkText: "Go to your GOV.UK email subscriptions",
            linkUrl: {
                production: "https://www.gov.uk/email/manage?from=your-services",
                integration: "https://www.integration.publishing.service.gov.uk/email/manage?from=your-services",
                nonProduction: "https://www.integration.publishing.service.gov.uk/email/manage?from=your-services",
            }
        },
        cy: {
            header: "GOV.UK email subscriptions",
            description: "See and manage the updates you get about GOV.UK pages you’re interested in.",
            linkText: "Go to your GOV.UK email subscriptions",
            linkUrl: {
                production: "https://www.gov.uk/email/manage?from=your-services",
                integration: "https://www.integration.publishing.service.gov.uk/email/manage?from=your-services",
                nonProduction: "https://www.integration.publishing.service.gov.uk/email/manage?from=your-services",
            }
        }
    }
}

export default emailSubscriptionsClient;