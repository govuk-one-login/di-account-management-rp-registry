import * as clients from '../clients'
import {getValueForEnvironment, transformClientObject} from './utils'


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