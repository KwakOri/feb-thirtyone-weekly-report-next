import { REPORT_STATUS } from "@/constants/constants";
import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import { ReportStatusType } from "../../types/report";

interface ReportStatusLabelProps {
  status: ReportStatusType;
}

const labelVariants = cva(
  "px-4 py-1.5 rounded-lg text-white font-bold flex items-center justify-center",
  {
    variants: {
      status: {
        [REPORT_STATUS.LOADING]: "bg-primary-95",
        [REPORT_STATUS.VALID]: "bg-green-600",
        [REPORT_STATUS.INVALID]: "bg-red-600",
      },
    },
  }
);

const ReportStatusLabel = ({ status }: ReportStatusLabelProps) => {
  return (
    <p className={cn(labelVariants({ status }))}>
      {status === REPORT_STATUS.LOADING && "로딩중"}
      {status === REPORT_STATUS.INVALID && "작성중"}
      {status === REPORT_STATUS.VALID && "완료됨"}
    </p>
  );
};

export default ReportStatusLabel;
