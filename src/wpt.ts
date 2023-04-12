import WebPageTest from "webpagetest";
import fs from "fs";
import path from "path";
import { config } from "dotenv";

config();

const reportsPath = path.resolve(process.cwd(), "./reports");
const timestamp = new Date().getTime();

const api_key = process.env.WEBPAGETEST_API_KEY;

const wpt = new WebPageTest("https://www.webpagetest.org", api_key);
const testUrl = "https://www.build.com/product/summary/433454";

let options = {
  firstViewOnly: true,
  location: "Dulles:Chrome",
  runs: 9,
  pollResults: 5,
  timeout: 240,
  emulateMobile: true,
};

wpt.runTest(testUrl, options, (err, result) => {
  if (!fs.existsSync(reportsPath)) {
    fs.mkdirSync(reportsPath);
  }

  if (result) {
    const {
      successfulFVRuns,
      testRuns,
      location,
      from,
      average,
      median,
      runs,
    } = result.data;
    fs.writeFileSync(
      `${reportsPath}/${timestamp}.json`,
      JSON.stringify({
        successfulFVRuns,
        testRuns,
        location,
        from,
        average,
        median,
        runs,
      })
    );
  } else {
    console.log(err);
  }
});
