import {
  Translation,
  TranslationsObject,
} from "../interfaces/translations.interface";
import { getValueForEnvironment } from "./utils";
import * as clients from "../clients";

const convertToTranslation = (
  translations: Translation | undefined,
  environment: string
): Translation | undefined => {
  if (translations?.header) {
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
          ? clientData.translations?.cy
          : clientData.translations?.en;
      const clientId = getValueForEnvironment(environment, clientData.clientId);

      if (clientTranslations) {
        const convertedTranslation = convertToTranslation(
          clientTranslations as Translation,
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
