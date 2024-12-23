import { REPORT_STATUS } from "../constants/constants";

export type ReportStatusType =
  (typeof REPORT_STATUS)[keyof typeof REPORT_STATUS];

export interface ReportType {
  post_id: string;
  student_id: string;
  subject: string;
  name: string;
  school: string;
  week: string;
  date: string;
  term: string;
  unit: string;
  present: string;
  comment: string;
}

export type CurrentTapType = "INVALID" | "ALL";
