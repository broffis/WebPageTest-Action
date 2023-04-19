const { lhMetricValues, slackEmojis } = require("./constants");

const generateSlackValues = (metricValue, label) => {
  const { displayValue, max, min } = lhMetricValues[label.toLowerCase()];
  let calculatedValue = 0;

  if (displayValue === "s") {
    calculatedValue = Number((metricValue / 1000).toFixed(2));
  }

  if (displayValue === null || displayValue === "ms") {
    calculatedValue = Number(metricValue.toFixed(2));
  }

  return {
    id: label,
    emoji: pickSlackEmoji(calculatedValue, min, max),
    value: `${calculatedValue}${displayValue || ""}`,
  };
};

const pickSlackEmoji = (value, min, max) => {
  if (value < min) {
    return slackEmojis.GREEN_CIRCLE;
  } else if (value < max && value >= min) {
    return slackEmojis.ORANGE_DIAMOND;
  } else {
    return slackEmojis.RED_SQUARE;
  }
};

const extractChromeUserData = (report) => {
  let firstContentfulPaint,
    largestContentfulPaint,
    timeToFirstByte,
    timeToInteractive,
    totalBlockingTime,
    firstInputDelay,
    speedIndex,
    cumulativeLayoutShift;

  firstContentfulPaint = report[lhMetricValues.fcp.reportValue];
  largestContentfulPaint = report[lhMetricValues.lcp.reportValue];
  timeToFirstByte = report[lhMetricValues.tfb.reportValue];
  totalBlockingTime = report[lhMetricValues.tbt.reportValue];
  firstInputDelay = report[lhMetricValues.fid.reportValue];
  speedIndex = report[lhMetricValues.si.reportValue];
  cumulativeLayoutShift = report[lhMetricValues.cls.reportValue];

  timeToInteractive = firstContentfulPaint + totalBlockingTime;

  return {
    firstContentfulPaint,
    largestContentfulPaint,
    timeToFirstByte,
    timeToInteractive,
    totalBlockingTime,
    firstInputDelay,
    speedIndex,
    cumulativeLayoutShift,
  };
};

const extractWaterfallImg = (medianRun) => {
  return medianRun.images.waterfall;
};

module.exports = {
  generateSlackValues,
  extractChromeUserData,
  extractWaterfallImg,
};
