import { browser, Config } from "protractor";
import { reporter } from "./helpers/reporter";

export const config: Config = {
  framework: "jasmine",
  specs: ["../test/google.spec.js"],
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless", "--disable-gpu"],
    },
  },
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
  },
};
