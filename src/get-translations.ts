import {
  Translation,
  TranslationsObject,
} from "../interfaces/translations.interface";
import { Client } from "../interfaces/client.interface";
import { getValueForEnvironment } from "./utils";
import * as clients from "../clients";

const convertToTranslation = (
  translations: Client["translations"]["en"],
  environment: string
): Translation | undefined => {
  if (translations.header && translations.linkText && translations.linkUrl) {
    return {
      header: translations.header,
      ...(translations.linkText && { linkText: translations.linkText }),
      ...(translations.linkUrl && {
        linkUrl: getValueForEnvironment(environment, translations.linkUrl),
      }),
      ...(translations.description && {
        description: translations.description,
      }),
      ...(translations.hintText && { hintText: translations.hintText }),
      ...(translations.paragraph1 && { paragraph1: translations.paragraph1 }),
      ...(translations.paragraph2 && { paragraph2: translations.paragraph2 }),
      ...(translations.startText && { startText: translations.startText }),
      ...(translations.startUrl && { startUrl: translations.startUrl }),
    };
  }
};
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
          ? clientData.translations.cy
          : clientData.translations.en;
      const clientId = getValueForEnvironment(environment, clientData.clientId);

      const convertedTranslation = convertToTranslation(
        clientTranslations,
        environment
      );
      if (typeof convertedTranslation !== "undefined") {
        translations[clientId] = convertedTranslation;
      }
    }
  });
  return translations;
};
export default getTranslations;
