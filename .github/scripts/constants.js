const lhMetricValues = {
  fcp: {
    name: "firstContentfulPaint",
    reportValue: "chromeUserTiming.firstContentfulPaint",
    label: "FCP",
    displayValue: "s",
    max: 3,
    min: 1.8,
  },
  lcp: {
    name: "largestContentfulPaint",
    reportValue: "chromeUserTiming.LargestContentfulPaint",
    label: "LCP",
    displayValue: "s",
    max: 4,
    min: 2.5,
  },
  tti: {
    name: "timeToInteractive",
    reportValue: "",
    label: "TTI",
    displayValue: "s",
    max: 7.3,
    min: 3.8,
  },
  fid: {
    name: "firstInputDelay",
    reportValue: "maxFID",
    label: "FID",
    displayValue: "ms",
    max: 300,
    min: 100,
  },
  cls: {
    name: "cumulativeLayoutShift",
    reportValue: "chromeUserTiming.CumulativeLayoutShift",
    label: "CLS",
    displayValue: null,
    max: 0.25,
    min: 0.1,
  },
  tfb: {
    name: "timeToFirstByte",
    reportValue: "TTFB",
    label: "TFB",
    displayValue: "s",
    max: 1.8,
    min: 0.8,
  },
  tbt: {
    name: "totalBlockingTime",
    reportValue: "TotalBlockingTime",
    label: "TBT",
    displayValue: "ms",
    max: 600,
    min: 200,
    notes: "TBT is the difference between FCP & TTI",
  },
  si: {
    name: "speedIndex",
    reportValue: "SpeedIndex",
    label: "SI",
    displayValue: "s",
    max: 5.8,
    min: 3.4,
  },
};

const slackEmojis = {
  GREEN_CIRCLE: ":large_green_circle:",
  ORANGE_DIAMOND: ":large_orange_diamond:",
  RED_SQUARE: ":large_red_square:",
};

module.exports = {
  lhMetricValues,
  slackEmojis,
};
