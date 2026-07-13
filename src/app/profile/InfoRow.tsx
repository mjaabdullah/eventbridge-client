import { ReactNode } from "react";

interface InfoRowProps {
  icon: ReactNode;
  label: string;
  value: string;
}

const InfoRow = ({ icon, label, value }: InfoRowProps) => {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ECFEFF] text-[#7C3AED]">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-medium text-[#0F172A]/60">{label}</p>
        <p className="truncate text-sm font-medium text-[#0F172A]">{value}</p>
      </div>
    </div>
  );
};

export default InfoRow;
