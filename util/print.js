const { sep, resolve } = require('path')
const puppeteer = require('puppeteer')

async function run() {
    const paths = __dirname.split(sep)
    const pres = paths[paths.length - 2]
    const today = new Date().toISOString().substr(0, 10)

    const output = resolve(`${__dirname}/../${pres}_${today}.pdf`)
    console.log(`Generating ${output}`)
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:5000', { waitUntil: 'networkidle2' })
    await page.pdf({
        path: output,
        format: 'A4',
        headerTemplate: '',
        footerTemplate: '',
        landscape: true,
        printBackground: true,
        scale: 0.7,
    })

    await browser.close()
}

run()
