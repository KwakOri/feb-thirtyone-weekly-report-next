"use client";

import axios from "axios";
import { toPng } from "html-to-image";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import BGImage from "../../../../../public/images/bg_03.png";
import Item from "../../../../components/Item/Item";

import Paragraph from "../../../../components/Paragraph/Paragraph";
import Title from "../../../../components/Title/Title";
import { ReportType } from "../../../../types/report";

const ReportPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [report, setReport] = useState<ReportType | null>(null);

  const exportElementAsPNG = (el: HTMLElement, filename: string) => {
    toPng(el).then((image: string) => {
      const link = window.document.createElement("a");
      link.style.display = "none";
      link.download = filename + ".png";
      link.href = image;
      link.click();
    });
  };
  const divRef = useRef(null);

  useEffect(() => {
    const getReport = async () => {
      const {
        data: { data },
      } = await axios.get(`http://localhost:3000/report/${id}`);
      setReport(data);
      setIsLoading(false);
    };
    getReport();
  }, []);

  if (isLoading) return <h1>불러오는 중입니다</h1>;
  return (
    <div
      ref={divRef}
      className="w-full h-full flex justify-center items-center"
    >
      <div className="w-full h-screen absolute ">
        <Image alt="" fill src={BGImage} />
      </div>
      <div className="relative z-10 text-black ">
        <Item title={"이름:"} description={report?.name} />
        <Item title={"학교:"} description={report?.school} />
        <Item title={"과목:"} description={report?.subject} />
        <Item title={"날짜:"} description={report?.date} />
        <Item title={"학기:"} description={report?.term} />
        <Item title={"단원:"} description={report?.unit} />
        <Item title={"출결:"} description={report?.present} />
        <div className="mt-10"></div>
        <Title>코멘트</Title>
        <Paragraph>{report?.comment}</Paragraph>
      </div>
      <button
        onClick={() =>
          divRef.current &&
          exportElementAsPNG(
            divRef.current,
            `${report?.name} ${report?.subject} ${report?.week}`
          )
        }
        className="absolute bottom-10 right-10 rounded-lg bg-white px-4 py-1.5 font-bold border-2 border-primary-95 text-black"
      >
        리포트 다운로드
      </button>
    </div>
  );
};

export default ReportPage;
