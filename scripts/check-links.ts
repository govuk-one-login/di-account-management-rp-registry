import getTranslations from "../src/get-translations";
import axios from "axios";

function getUniqueLinks(): Set<string> {
  const enClients = Object.values(getTranslations("production", "en"));

  console.log("Number of RPs:", Object.values(enClients).length);

  const cyClients = Object.values(getTranslations("production", "cy"));

  const uniqueLinks = new Set<string>(
    enClients.map((client) => client.link_href)
  );
  cyClients.forEach((client) => uniqueLinks.add(client.link_href));

  return uniqueLinks;
}

async function checkUrls(urls: string[]): Promise<Record<string, string>> {
  const invalidUrls: Record<string, string> = {};

  await Promise.all(
    urls.map(async (url) => {
      try {
        const response = await axios.head(url);
        if (response.status < 200 || response.status >= 300) {
          invalidUrls[url] =
            `Status code: ${response.status} - ${response.statusText}`;
        }
      } catch (error: any) {
        invalidUrls[url] = `Error: ${error.message}`;
      }
    })
  );

  return invalidUrls;
}

async function main() {
  const uniqueLinks = getUniqueLinks();
  console.log("Number of URLs to check:", uniqueLinks.size);

  const invalidLinks = await checkUrls(Array.from(uniqueLinks));
  console.log("Invalid URLs:", invalidLinks);
  console.log("Number of Invalid URLs:", Object.values(invalidLinks).length);
}

main();
