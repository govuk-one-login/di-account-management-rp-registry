import getTranslations from "../src/get-translations";
import puppeteer from "puppeteer";

const AXIOS_TIMEOUT = 10000;

function getUniqueLinks(): Set<string> {
  const enClients = Object.values(getTranslations("production", "en"));
  console.log("Number of RPs:", Object.values(enClients).length);
  const cyClients = Object.values(getTranslations("production", "cy"));

  const uniqueLinks = new Set<string>();
  enClients.forEach((client) => uniqueLinks.add(client.link_href));
  cyClients.forEach((client) => uniqueLinks.add(client.link_href));

  return uniqueLinks;
}

async function checkUrls(urls: string[]): Promise<Record<string, string>> {
  const invalidUrls: Record<string, string> = {};
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    headless: false,
  });

  await Promise.all(
    urls.map(async (url) => {
      try {
        const page = await browser.newPage();
        await page.setUserAgent(
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36"
        );

        const response = await page.goto(url, { waitUntil: "networkidle2" });

        const status = response?.status();
        if (status && (status < 200 || status >= 400)) {
          invalidUrls[url] = `Status code: ${status}`;
        }
      } catch (error: any) {
        invalidUrls[url] = `Error: ${error.message}`;
      }
    })
  );

  await browser.close();
  return invalidUrls;
}
async function main() {
  const uniqueLinks = getUniqueLinks();
  console.log("Number of URLs to check:", uniqueLinks.size);
  const invalidLinks = await checkUrls(Array.from(uniqueLinks));

  if (Object.values(invalidLinks).length > 0) {
    console.error("Invalid URLs:", invalidLinks);
    console.log("Number of Invalid URLs:", Object.values(invalidLinks).length);
    return invalidLinks;
  } else {
    console.log("All links are OK!");
  }
}

main();
