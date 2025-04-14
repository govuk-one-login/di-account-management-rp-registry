import * as clients from "../clients";
import { getValueForEnvironment } from "./utils";

const getClientIds = (environment: string): string[] => {
  const clientIds: string[] = [];
  for (const client in clients) {
    if (client !== "__esModule") {
      const clientData = clients[client as keyof typeof clients];
      clientIds.push(getValueForEnvironment(environment, clientData.clientId));
    }
  }
  return clientIds;
};

export default getClientIds;
