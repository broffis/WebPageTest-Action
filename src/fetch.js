import fetch from "node-fetch";

const fetchData = () => {
  fetch("https://www.build.com")
    .then((res) => {
      const { headers } = res;
      const siteVersion = headers.get("x-fergy-app-version");
      core.setOutput("site-version", siteVersion);
    })
    .catch((err) => {
      console.log(err);
    });
};

fetchData();
