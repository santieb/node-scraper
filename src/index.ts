import { handleScrapping } from './modules/scraper.js';

const main = async () => {
  try {
    await handleScrapping()
    console.log('script')
  } catch (err) {
    console.log(err)
  }
}

main()
