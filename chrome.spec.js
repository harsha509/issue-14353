const Chrome = require('selenium-webdriver/chrome');
const { Browser, Builder } = require("selenium-webdriver");
const options = new Chrome.Options();

describe('Should be able to Test Command line arguments', function () {
  it('headless', async function () {
    let driver = new Builder()
      .forBrowser(Browser.CHROME)
      .setChromeOptions(options.addArguments('--headless=new'))
      .build();

    await driver.get('https://www.selenium.dev/selenium/web/blank.html');
    await driver.quit();
  });

  it('Basic Chrome test', async function () {
    const Options = new Chrome.Options();
    let driver = new Builder()
      .forBrowser(Browser.CHROME)
      .setChromeOptions(Options)
      .build();

    await driver.get('https://www.selenium.dev/selenium/web/blank.html');
    await driver.quit();
  });
});