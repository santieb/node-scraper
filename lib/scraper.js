import puppeteer from 'puppeteer'
import randomUseragent from 'random-useragent'

export const handleScrapping = async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 100
    })

    const page = await browser.newPage()
    const userAgent = randomUseragent.getRandom()
    await page.setUserAgent(userAgent)
    await page.setViewport({ width: 1920, height: 1080 })
  } catch (err) {
    console.log(err)
  }
}
