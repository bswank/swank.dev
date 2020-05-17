// Adapted from https://github.com/wesbos/wesbos/blob/master/functions/ogimage/ogimage.js

const chrome = require('chrome-aws-lambda')
const puppeteer = require('puppeteer-core')

const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount))

const cached = new Map()

const localChromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

async function getOptions(isDev) {
  return {
    product: 'chrome',
    args: isDev ? [] : chrome.args,
    executablePath: isDev ? localChromePath : await chrome.executablePath,
    headless: true // chrome.headless
  }
}

async function getScreenshot(url, isDev) {
  const cachedImage = cached.get(url)
  if (cachedImage) return cachedImage
  const options = await getOptions(isDev)
  const browser = await puppeteer.launch(options)
  const page = await browser.newPage()
  await page.setViewport({ width: 1200, height: 630 })
  await page.goto(url)
  await wait(1000)
  const buffer = await page.screenshot({ type: 'png' })
  const base64Image = buffer.toString('base64')
  cached.set(url, base64Image)
  return base64Image
}

exports.handler = async event => {
  const qs = new URLSearchParams(event.queryStringParameters)
  const url = `${process.env.URL}/ogimage?${qs.toString()}`
  const isDev = process.env.URL.includes('http://localhost')
  const photoBuffer = await getScreenshot(url, isDev)
  return {
    statusCode: 200,
    body: photoBuffer,
    isBase64Encoded: true
  }
}
