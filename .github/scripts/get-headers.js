import fetch from "node-fetch";

module.exports = ({ core }) => {
  fetch("https://www.build.com").then((res) => {
    const { headers } = res;
    const siteVersion = headers.get("X-Fergy-App-Version");
    console.log({ headers, siteVersion });
    core.setOutput("site-version", siteVersion);
  });
};
