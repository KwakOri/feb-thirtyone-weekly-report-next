import ReportStatusLabel from "@/components/ReportStatusLabel";
import { ReportStatusType, ReportType } from "../../types/report";

export interface ListItemProps {
  report: ReportType;
  status: ReportStatusType;
}

const ReportBox = ({ report, status }: ListItemProps) => {
  return (
    <article className="flex justify-between p-4 border rounded-lg text-black hover:bg-primary-95 hover:text-white">
      <div className="flex gap-2 items-center">
        <p className={""}>{report.student_id}</p>
        <p className={"font-bold"}>{report.name}</p>
        <p className={""}>{report.school}</p>
      </div>
      <ReportStatusLabel status={status} />
    </article>
  );
};

export default ReportBox;
