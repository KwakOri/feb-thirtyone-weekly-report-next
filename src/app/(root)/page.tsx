"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

import ReportTab from "@/components/ReportTab/ReportTab";
import { REPORT_STATUS } from "@/constants/constants";
import ReportBox from "../../components/ReportBox";
import { CurrentTapType, ReportType } from "../../types/report";
import { getReportStatus, hasObjectEmptyValue } from "../../utils/utils";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [reports, setReports] = useState<ReportType[]>([]);
  const [notCompleteStudentReports, setNotCompleteStudentReports] = useState<
    ReportType[]
  >([]);
  const [currentTab, setCurrentTab] = useState<CurrentTapType>("INVALID");
  useEffect(() => {
    const getReports = async () => {
      const {
        data: { data },
      } = await axios.get("http://localhost:3000/report");

      setReports(data);
      setIsLoading(false);
    };
    getReports();
  }, []);

  useEffect(() => {
    if (reports.length === 0) return;
    const getNotCompleteStudentReports = () => {
      const students: ReportType[] = [];
      reports.forEach((report) => {
        if (hasObjectEmptyValue(report)) return students.push(report);
      });
      setNotCompleteStudentReports(students);
    };
    getNotCompleteStudentReports();
  }, [reports]);

  if (isLoading) return <h1>불러오는 중입니다</h1>;
  return (
    <main className="bg-white p-4">
      <h1 className="text-black text-2xl font-bold pt-4 pb-10">
        2월31일학원 주간보고서 발송도우미
      </h1>

      <div className="flex gap-2">
        <button
          className="font-extrabold rounded-lg bg-primary-95 grow py-1.5 hover:opacity-70"
          onClick={() => {}}
        >
          주간보고서 체크
        </button>
        <button
          className="font-extrabold rounded-lg bg-primary-95 grow py-1.5 hover:opacity-70"
          onClick={() => {
            alert("전송되었습니다");
          }}
        >
          주간보고서 전송
        </button>
      </div>

      <div className="flex border-t-2 border-black mt-10">
        <ReportTab
          currentTab={currentTab}
          value={"INVALID"}
          onClick={() => setCurrentTab("INVALID")}
        >
          작성중인 학생
        </ReportTab>
        <ReportTab
          currentTab={currentTab}
          value={"ALL"}
          onClick={() => setCurrentTab("ALL")}
        >
          모든 학생
        </ReportTab>
      </div>

      <ul className="flex flex-col gap-2 mt-10">
        {currentTab === "INVALID" &&
          notCompleteStudentReports.map((report: ReportType) => (
            <li key={report.post_id}>
              <Link href={`/report/${report.post_id}`}>
                <ReportBox report={report} status={REPORT_STATUS.INVALID} />
              </Link>
            </li>
          ))}
        {currentTab === "ALL" &&
          reports.map((report: ReportType) => {
            const status = getReportStatus<ReportType>(report);
            return (
              <li key={report.post_id}>
                <Link href={`/report/${report.post_id}`}>
                  <ReportBox report={report} status={status} />
                </Link>
              </li>
            );
          })}
      </ul>
    </main>
  );
}
