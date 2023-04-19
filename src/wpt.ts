import WebPageTest from "webpagetest";
import { config } from "dotenv";
import {
  extractChromeUserData,
  extractWaterfallImg,
} from "./helpers/extract.helpers";

import { generateSlackValues } from "./helpers/slack.helpers";

config();

const api_key = process.env.WEBPAGETEST_API_KEY;

const wpt = new WebPageTest("https://www.webpagetest.org", api_key);
const testUrl = "https://www.build.com/product/summary/433454";

let options = {
  firstViewOnly: true,
  location: "Dulles:Chrome",
  runs: 1,
  pollResults: 5,
  timeout: 240,
  emulateMobile: true,
};

wpt.runTest(testUrl, options, (err, result) => {
  if (result) {
    const { average, median, summary } = result.data;

    const cruxData = extractChromeUserData(average.firstView);
    const img = extractWaterfallImg(median.firstView);

    console.log({ cruxData, img });

    const FCP = generateSlackValues(cruxData.firstContentfulPaint, "FCP");
    const LCP = generateSlackValues(cruxData.largestContentfulPaint, "LCP");
    const TTI = generateSlackValues(cruxData.timeToInteractive, "TTI");
    const FID = generateSlackValues(cruxData.firstInputDelay, "FID");
    const CLS = generateSlackValues(cruxData.cumulativeLayoutShift, "CLS");
    const TFB = generateSlackValues(cruxData.timeToFirstByte, "TFB");
    const TBT = generateSlackValues(cruxData.totalBlockingTime, "TBT");
    const SI = generateSlackValues(cruxData.speedIndex, "SI");

    console.log("slack outputs", {
      FCP,
      LCP,
      TTI,
      FID,
      CLS,
      TFB,
      TBT,
      SI,
      img,
      summary,
    });
  } else {
    console.log(err);
  }
});
