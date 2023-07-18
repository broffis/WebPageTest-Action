import fetch from "node-fetch";

const fetchData = () => {
  fetch("https://www.build.com")
    .then((res) => {
      console.log(res.headers);
      const siteVersion = res.headers.get("x-fergy-app-version");
      core.setOutput("site-version", siteVersion);
    })
    .catch((err) => {
      console.log(err);
    });
};

fetchData();
