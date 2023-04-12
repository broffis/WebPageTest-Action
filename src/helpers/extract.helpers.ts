import { lhMetricValues } from "../types/metrics.constants";
import { LHMetrics } from "../types/metrics.types";

export const extractChromeUserData = (report): LHMetrics => {
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

export const extractWaterfallImg = (medianRun): string => {
  return medianRun.images.waterfall;
};
