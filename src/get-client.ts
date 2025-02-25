import * as clients from '../clients'
import { Client } from '../interfaces/client.interface'
import { RegistryEntry } from '../interfaces/registry.interface'
import { getValueForEnvironment } from './utils'

const transformClientObject = (client: Client, environment: string): RegistryEntry => {
    const clientId = getValueForEnvironment(environment, client.clientId)
    return {
        clientId,
        clientType: client.clientType,
        isAllowed: client.isAllowed,
        isHmrc: client.isHmrc,
        isReportSuspiciousActivityEnabled: client.isReportSuspiciousActivityEnabled,
        isAvailableInWelsh: client.isAvailableInWelsh,
        showInClientSearch: getValueForEnvironment(environment, client.showInClientSearch),
    }
}

const getClient = (environment: string, clientId: string) => {
    const foundEntry = Object.entries(clients).find(([, client]) => {
        return getValueForEnvironment(environment, client.clientId) === clientId
    })
    const client = foundEntry?.[1]

    if (client) {
        return transformClientObject(client, environment)
    }

    return null
}

export default getClient