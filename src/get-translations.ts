import {
  TranslationsObject,
} from "../interfaces/translations.interface";
import { convertToTranslation, getValueForEnvironment } from "./utils";
import * as clients from "../clients";

const getTranslations = (
  environment: string,
  language: "en" | "cy"
): TranslationsObject => {
  const translations: TranslationsObject = {};

  Object.keys(clients).forEach((client) => {
    if (client !== "__esModule") {
      const clientData = clients[client as keyof typeof clients];
      const clientTranslations =
        clientData.isAvailableInWelsh && language === "cy"
          ? clientData.translations?.cy
          : clientData.translations?.en;
      const clientId = getValueForEnvironment(environment, clientData.clientId);

      if (clientTranslations) {
        const convertedTranslation = convertToTranslation(
          clientTranslations,
          environment
        );
        if (typeof convertedTranslation !== "undefined") {
          translations[clientId] = convertedTranslation;
        }
      }
    }
  });
  return translations;
};
export default getTranslations;
