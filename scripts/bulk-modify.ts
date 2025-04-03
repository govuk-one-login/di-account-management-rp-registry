import { writeFileSync } from "fs";
import * as clients from "../clients";
import { Client } from "../interfaces/client.interface";
import { getValueForEnvironment } from "../src/utils";

const template = `import { Client } from "../interfaces/client.interface";

const {{name}}: Client = {{data}} 

export default {{name}}`;

const isAvailableInWelsh = [
  "mQDXGO7gWdK7V28v82nVcEGuacY",
  "L8SSq5Iz8DstkBgno0Hx5aujelE",
  "tPCCSyoMaFNbLTt0gEW609h15Uc",
  "Mh3SUEDHB74A2SIB_1VAXZKG_iw",
  "kvGpTatgWm3YqXHbG41eOdDf91k",
  "RqFZ83csmS4Mi4Y7s7ohD9-ekwU",
  "DduaLZl49t9hHADHyzJBmEwvbsw",
  "KcKmx2g1GH6ersWFvzMi1bhehq4",
];

Object.entries(clients).forEach(([clientId, data]) => {
  const clientData = data as Client;

  const productionId = getValueForEnvironment(
    "production",
    clientData.clientId
  );
  clientData.isAvailableInWelsh = isAvailableInWelsh.includes(productionId);

  if (!clientData.isAvailableInWelsh) {
    //@ts-ignore
    delete clientData.translations.cy;
  }

  const file = template
    .replace(/{{name}}/g, clientId)
    .replace("{{data}}", JSON.stringify(clientData));
  writeFileSync(`./clients/${clientId}.ts`, file);
});
