import WebPageTest from "webpagetest";
import { config } from "dotenv";
import {
  extractChromeUserData,
  extractWaterfallImg,
} from "./helpers/extract.helpers";

config();

const api_key = process.env.WEBPAGETEST_API_KEY;

const wpt = new WebPageTest("https://www.webpagetest.org", api_key);
const testUrl = "https://www.build.com/product/summary/433454";

let options = {
  firstViewOnly: true,
  location: "Dulles:Chrome",
  runs: 2,
  pollResults: 5,
  timeout: 240,
  emulateMobile: true,
  lighthouse: true,
};

wpt.runTest(testUrl, options, (err, result) => {
  if (result) {
    const { average, median } = result.data;

    const data = extractChromeUserData(average.firstView);
    const img = extractWaterfallImg(median.firstView);

    console.log({ data, img });
  } else {
    console.log(err);
  }
});
