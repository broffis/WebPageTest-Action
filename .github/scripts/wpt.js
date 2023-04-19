const WebPageTest = require("webpagetest");
const {
  extractChromeUserData,
  extractWaterfallImg,
  generateSlackValues,
} = require("./helpers");

const api_key = process.env.WEBPAGETEST_API_KEY;

const wpt = new WebPageTest("https://www.webpagetest.org", api_key);
const defaultSlug = "product/summary/433454";

module.exports = ({ core }, { device, slug }) => {
  const testUrl = slug
    ? `https://www.build.com/${slug}`
    : `https://www.build.com/${defaultSlug}`;

  const options = {
    firstViewOnly: true,
    location: "Dulles:Chrome",
    runs: 9,
    pollResults: 5,
    timeout: 240,
    emulateMobile: device === "MOBILE",
  };

  wpt.runTest(testUrl, options, (err, result) => {
    if (result) {
      const { average, median, summary } = result.data;

      const cruxData = extractChromeUserData(average.firstView);
      const img = extractWaterfallImg(median.firstView);

      console.log({ cruxData, img, summary });

      const FCP = generateSlackValues(cruxData.firstContentfulPaint, "FCP");
      const LCP = generateSlackValues(cruxData.largestContentfulPaint, "LCP");
      const TTI = generateSlackValues(cruxData.timeToInteractive, "TTI");
      const FID = generateSlackValues(cruxData.firstInputDelay, "FID");
      const CLS = generateSlackValues(cruxData.cumulativeLayoutShift, "CLS");
      const TFB = generateSlackValues(cruxData.timeToFirstByte, "TFB");
      const TBT = generateSlackValues(cruxData.totalBlockingTime, "TBT");
      const SI = generateSlackValues(cruxData.speedIndex, "SI");

      core.setOutput("wpt-values", {
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
};
