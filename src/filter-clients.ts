import * as clients from '../clients'
import {Client} from '../interfaces/client.interface'
import {RegistryEntry} from '../interfaces/registry.interface'
import {transformClientObject} from './utils'

const filterClients = (environment: string, filter: Partial<Client>): RegistryEntry[] => {
    return Object.values(clients).filter(client => {
        return Object.keys(filter).some(key => {
            return client[key as keyof Client] === filter[key as keyof Client];
        });
    }).map((client) => transformClientObject(client, environment));
}

export default filterClients;