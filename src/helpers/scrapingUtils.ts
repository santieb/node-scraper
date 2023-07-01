export const waitForElement = async (page, selector) => {
  await page.waitForSelector(selector)
}

export const takeScreenshot = async (page, filename) => {
  await page.screenshot({ path: filename })
}
