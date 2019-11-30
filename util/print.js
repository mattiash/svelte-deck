const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5000', {waitUntil: 'networkidle2'});
  await page.pdf({
      path: 'presentation.pdf',
      format: 'A4',
        headerTemplate: '',
        footerTemplate: '',
        landscape: true,
        printBackground: true,
    });

  await browser.close();
})();