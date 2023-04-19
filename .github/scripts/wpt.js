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

  const data = extractChromeUserData(average.firstView);
  const img = extractWaterfallImg(median.firstView);

  console.log({ data, img });

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
