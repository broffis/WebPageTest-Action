const fetch = require("node-fetch");

const PX_TOKEN = process.env.PX_TOKEN;

module.exports = ({ core }) => {
  fetch("https://www.build.com", {
    method: "GET",
    headers: {
      "x-px-captcha-testing": PX_TOKEN,
    },
  })
    .then((res) => {
      const { headers, status } = res;
      const siteVersion = headers.get("x-site-version");
      console.log({ status, siteVersion });
      core.setOutput("site-version", siteVersion);
    })
    .catch((err) => {
      console.log(err);
    });
};
