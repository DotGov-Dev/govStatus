
import puppeteer from 'puppeteer';
import assert from 'node:assert';


export default async function statusCodeCheck(url: string, statusCode: number) {

    // Launch a headless Chrome browser and open a new page
    const browser = await puppeteer.launch({ headless: true, timeout: 0 });
    const page = await browser.newPage();

    // Navigate to the target URL
    const result = await page.goto(url, { waitUntil: 'load' });

    // Confirm successful navigation
    await assert.equal(result.status(), statusCode);

    // Print the page title to the console
    const title = await page.title();
    console.log(`My Page title: ${title} `);

    // Close the browser
    await browser.close();
}

