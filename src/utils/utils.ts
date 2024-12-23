import { REPORT_STATUS } from "../constants/constants";
import { ReportStatusType } from "../types/report";

export const IsObjectEmpty = <T extends object>(obj: T): boolean => {
  return Object.keys(obj).length === 0;
};

export const hasObjectEmptyValue = <T extends object>(obj: T): boolean => {
  return !Object.values(obj).every((value) => value !== "");
};

export const getReportStatus = <T extends object>(
  report: T
): ReportStatusType => {
  if (IsObjectEmpty(report || {})) return REPORT_STATUS.LOADING;
  if (hasObjectEmptyValue(report || {})) return REPORT_STATUS.INVALID;
  return REPORT_STATUS.VALID;
};
