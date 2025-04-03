import { getValueForEnvironment } from "../src/utils";
import { BulkClientModifier } from "./utils/bulk-modify";

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

BulkClientModifier((clientId, clientData) => {
  // make any changes to the client data here
  const productionId = getValueForEnvironment(
    "production",
    clientData.clientId
  );
  clientData.isAvailableInWelsh = isAvailableInWelsh.includes(productionId);

  if (!clientData.isAvailableInWelsh) {
    //@ts-ignore
    delete clientData.translations.cy;
  }

  return clientData;
});
