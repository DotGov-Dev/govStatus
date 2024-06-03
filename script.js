
const puppeteer = require('puppeteer');
const assert = require('node:assert');


async function foo() {

    // Launch a headless Chrome browser and open a new page
    const browser = await puppeteer.launch({ headless: 'new', timeout: 0 });
    const page = await browser.newPage();

    // Navigate to the target URL
    const result = await page.goto('https://www.example.com', { waitUntil: 'load' });

    // Confirm successful navigation
    await assert.equal(result.status(), 200);

    // Print the page title to the console
    const title = await page.title();
    console.log(`My Page title: ${title} `);

    // Close the browser
    await browser.close();
}

foo();