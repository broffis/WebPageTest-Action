const fetch = require("node-fetch");

module.exports = ({ core }) => {
  fetch("https://www.build.com")
    .then((res) => {
      console.log(res.headers);
      const siteVersion = res.headers.get("x-site-version");
      core.setOutput("site-version", siteVersion);
    })
    .catch((err) => {
      console.log(err);
    });
};
