import fetch from "node-fetch";

module.exports = ({ core }) => {
  const response = fetch("https://www.build.com");
  const headers = response.headers;
  const siteVersion = headers.get("x-build-version");

  core.setOutput("site-version", siteVersion);
};
