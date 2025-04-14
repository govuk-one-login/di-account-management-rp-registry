import getTranslations from "./src/get-translations";
import getClient from "./src/get-client";
import filterClients from "./src/filter-clients";
import getClientIDs from "./src/get-clientIds";
import {
  Translation,
  TranslationsObject,
} from "./interfaces/translations.interface";

export { getTranslations, getClient, filterClients, getClientIDs };
export type { Translation, TranslationsObject };
