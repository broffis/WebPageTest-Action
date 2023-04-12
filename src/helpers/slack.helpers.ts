import { lhMetricValues } from "../types/metrics.constants";
import {
  LHMetricLabel,
  SlackEmojisEnum,
  SlackMessageValues,
} from "../types/metrics.types";

export const generateSlackValues = (
  metricValue: number,
  label: LHMetricLabel
): SlackMessageValues => {
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

export const pickSlackEmoji = (
  value: number,
  min: number,
  max: number
): SlackEmojisEnum => {
  if (value < min) {
    return SlackEmojisEnum.GREEN_CIRCLE;
  } else if (value < max && value >= min) {
    return SlackEmojisEnum.ORANGE_DIAMOND;
  } else {
    return SlackEmojisEnum.RED_SQUARE;
  }
};
