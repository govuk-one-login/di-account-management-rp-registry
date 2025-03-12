import * as clients from "../clients";
import { Client } from "../interfaces/client.interface";
import { RegistryEntry } from "../interfaces/registry.interface";
import { transformClientObject } from "./utils";

const filterClients = (
  environment: string,
  filters: Partial<Client> = {}
): RegistryEntry[] => {
  return Object.values(clients)
    .filter((client) => {
      return (
        client.clientId !== undefined &&
        Object.entries(filters).every(([key, value]) => {
          return client[key as keyof Client] === value;
        })
      );
    })
    .map((client) => transformClientObject(client, environment));
};

export default filterClients;
