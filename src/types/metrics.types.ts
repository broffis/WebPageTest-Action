export type LHMetrics = {
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  timeToInteractive: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToFirstByte: number;
  totalBlockingTime: number;
  speedIndex: number;
};

export type LHMetricConstants = {
  fcp: LHMetricConstant;
  lcp: LHMetricConstant;
  tti: LHMetricConstant;
  fid: LHMetricConstant;
  cls: LHMetricConstant;
  tfb: LHMetricConstant;
  tbt: LHMetricConstant;
  si: LHMetricConstant;
};

export type LHMetricConstant = {
  name: string;
  reportValue: string;
  label: string;
  displayValue: "s" | "ms" | null;
  max: number;
  min: number;
  notes?: string;
};

export type LHMetricLabel =
  | "FCP"
  | "LCP"
  | "TTI"
  | "FID"
  | "CLS"
  | "TFB"
  | "TBT"
  | "SI";
