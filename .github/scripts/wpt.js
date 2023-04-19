const WebPageTest = require("webpagetest");
const {
  extractChromeUserData,
  extractWaterfallImg,
  generateSlackValues,
} = require("./helpers");
const { data } = require("./test-data");

const api_key = process.env.WEBPAGETEST_API_KEY;

const wpt = new WebPageTest("https://www.webpagetest.org", api_key);
const defaultSlug = "product/summary/433454";

let options = {
  firstViewOnly: true,
  location: "Dulles:Chrome",
  runs: 9,
  pollResults: 5,
  timeout: 240,
};

module.exports = ({ core }, { options, slug }) => {
  // const testUrl = slug
  //   ? `https://www.build.com/${slug}`
  //   : `https://www.build.com/${defaultSlug}`;

  const { average, median } = data;

  const cruxData = extractChromeUserData(average.firstView);
  const img = extractWaterfallImg(median.firstView);

  console.log({ cruxData, img });

  const FCP = generateSlackValues(cruxData.firstContentfulPaint, "FCP");
  const LCP = generateSlackValues(cruxData.firstContentfulPaint, "LCP");
  const TTI = generateSlackValues(cruxData.firstContentfulPaint, "TTI");
  const FID = generateSlackValues(cruxData.firstContentfulPaint, "FID");
  const CLS = generateSlackValues(cruxData.firstContentfulPaint, "CLS");
  const TFB = generateSlackValues(cruxData.firstContentfulPaint, "TFB");
  const TBT = generateSlackValues(cruxData.firstContentfulPaint, "TBT");
  const SI = generateSlackValues(cruxData.firstContentfulPaint, "SI");

  console.log("slack outputs", { FCP, LCP, TTI, FID, CLS, TFB, TBT, SI });

  // wpt.runTest(testUrl, options, (err, result) => {
  //   if (result) {
  //     const { average, median } = result.data;

  //     const data = extractChromeUserData(average.firstView);
  //     const img = extractWaterfallImg(median.firstView);

  //     console.log({ data, img });
  //   } else {
  //     console.log(err);
  //   }
  // });
};
