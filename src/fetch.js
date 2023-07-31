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
      console.log({ siteVersion, status });
    })
    .catch((err) => {
      console.log(err);
    });
};

fetchData();
