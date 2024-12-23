export const REPORT_STATUS = {
  LOADING: "loading",
  VALID: "valid",
  INVALID: "invalid",
} as const;

export type ReportStatusType = typeof REPORT_STATUS;
