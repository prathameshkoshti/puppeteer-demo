const puppeteer = require('puppeteer');
const fs = require("fs");

async function printPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://blog.risingstack.com', {waitUntil: 'networkidle0'});
  const pdf = await page.pdf({ format: 'A4' });

  await browser.close();

  console.log(pdf);
  fs.writeFileSync('some.pdf', pdf);
};

printPDF();