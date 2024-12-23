import { reportTabVariants } from "@/components/ReportTab/reportTab.variants";
import { CurrentTapType } from "@/types/report";
import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface ReportTabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  currentTab: CurrentTapType;
  value: CurrentTapType;
}

const ReportTab = ({
  currentTab,
  value,
  children,
  className,
  ...props
}: PropsWithChildren<ReportTabProps>) => {
  const isActive = currentTab === value;
  return (
    <button
      {...props}
      className={cn(reportTabVariants({ isActive, className }))}
    >
      {children}
    </button>
  );
};

export default ReportTab;
