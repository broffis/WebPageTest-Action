import fetch from "node-fetch";

const PX_TOKEN = process.env.PX_TOKEN;

const fetchData = () => {
  fetch("https://www.build.com", {
    method: "GET",
    headers: {
      "x-px-captcha-testing": PX_TOKEN,
    },
  })
    .then((res) => {
      const { headers, status } = res;
      const siteVersion = headers.get("x-fergy-app-version");
      const siteLength = headers.get("content-length");
      console.log({ siteVersion, status, siteLength });
    })
    .catch((err) => {
      console.log(err);
    });
};

fetchData();
