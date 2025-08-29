import * as clients from "../clients";
import { RegistryEntry } from "../interfaces/registry.interface";
import { transformClientObject } from "./utils";

const filterClients = (
  environment: string,
  filters: Partial<RegistryEntry> = {}
): RegistryEntry[] => {
  return Object.values(clients)
    .filter((client) => client.clientId !== undefined)
    .map((client) => transformClientObject(client, environment))
    .filter((client) => {
      return Object.entries(filters).every(([key, value]) => {
        return client[key as keyof RegistryEntry] === value;
      });
    });
};

export default filterClients;
