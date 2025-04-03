import { writeFileSync } from "fs";
import * as clients from "../../clients";
import { Client } from "../../interfaces/client.interface";

const template = `import { Client } from "../interfaces/client.interface";

const {{name}}: Client = {{data}} 

export default {{name}}`;

type ClientModifier = (clientId: string, client: Client) => Client;

export const BulkClientModifier = (fn: ClientModifier) => {
  Object.entries(clients).forEach(([clientId, data]) => {
    const clientData = fn(clientId, data as Client);

    const file = template
      .replace(/{{name}}/g, clientId)
      .replace("{{data}}", JSON.stringify(clientData));

    writeFileSync(`./clients/${clientId}.ts`, file);
  });
};
