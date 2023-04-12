# WebPageTest Runner

This is a script runner for testing webpages with the WebPageTest Node API Wrapper

## Getting Started

### Clone and install

Clone the app using your preferred method, then run install

```
npm ci
```

### [Get and API Key](https://docs.webpagetest.org/api/keys/)

1. Log in to your [WebPageTest Account](https://www.webpagetest.org/account) and navigate to [API Consumers](https://www.webpagetest.org/account#api-consumers)
2. Create a new key as needed and copy the value
3. Rename the `.env.example` to just `.env` and set the `WEBPAGETEST_API_KEY=` to your new key

```
WEBPAGETEST_API_KEY={your key}
```

### Running

After install, operation is pretty straightforward

```
npm run
```

### More info coming soon

## Notes

### [WPT API Notes](https://docs.webpagetest.org/api/reference/)

### Node JS API Recipes

WPT has published a list of introductory [recipes](https://github.com/WebPageTest/WebPageTest-API-Recipes) for testing the node wrapper for their API. These are incredibly helpful for getting started and writing some commonly needed tests

### Node JS API Options

Within the Node JS API wrapper is a list of [possible options](https://github.com/WebPageTest/webpagetest-api/blob/master/lib/mapping.js). These correlate to options found in the API reference and acceptable values can be found in [the www/settings](https://github.com/WPO-Foundation/webpagetest/tree/master/www/settings)

### Headers

You _might_ be able to [add custom headers](https://github.com/WebPageTest/webpagetest-api/issues/59) by making use of `wpt.scriptToString`. However, I was not able to get the value to pass correctly using [WPT Custom Scripting](https://docs.webpagetest.org/scripting/) and the forum [seems to suggest](https://forums.webpagetest.org/t/ip-address-of-test-location/468) it only works on Desktop

### IP Addresses

WPT publishes the [available IP Addresses](https://www.webpagetest.org/addresses.php) used in their testing for purposes of Allowlisting. Not all IPs are listed, but the majority of tests can/should be run using one of the EC2 instances and MotoG4 device
