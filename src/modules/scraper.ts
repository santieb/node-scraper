import * as puppeteer from 'puppeteer'
import { takeScreenshot } from '../helpers/scrapingUtils.js'

export const handleScrapping = async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 100
    })

    const page = await browser.newPage()
    await page.setViewport({ width: 1920, height: 1080 })

    await page.goto('http://quotes.toscrape.com')

    await takeScreenshot(page, './data/screens/example.png')
    await browser.close()
  } catch (err) {
    console.log(err)
  }
}
