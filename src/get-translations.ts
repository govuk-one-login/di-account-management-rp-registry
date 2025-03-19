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
): Translation => {
  return {
    header: translations.header,
    link_text: translations.linkText,
    link_href: getValueForEnvironment(environment, translations.linkUrl),
    ...(translations.description && { description: translations.description }),
    ...(translations.hintText && { hint_text: translations.hintText }),
    ...(translations.paragraph1 && { paragraph1: translations.paragraph1 }),
    ...(translations.paragraph2 && { paragraph2: translations.paragraph2 }),
  };
};

const getTranslations = (
  environment: string,
  language: "en" | "cy"
): TranslationsObject => {
  const translations: TranslationsObject = {};

  Object.keys(clients)
    .filter((key) => key !== "__esModule") //this is required for the tests to work
    .forEach((client) => {
      const clientData = clients[client as keyof typeof clients];
      const clientTranslations =
        clientData.isAvailableInWelsh && language === "cy"
          ? clientData.translations.cy
          : clientData.translations.en;
      const clientId = getValueForEnvironment(environment, clientData.clientId);

      translations[clientId] = convertToTranslation(
        clientTranslations,
        environment
      );
    });

  return translations;
};

export default getTranslations;
