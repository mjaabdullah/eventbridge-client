import { LuCalendar1 } from "react-icons/lu";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
      <div className="w-16 h-16 rounded-full bg-[#ECFEFF] flex items-center justify-center text-[#7C3AED] mb-4 text-2xl">
        <LuCalendar1></LuCalendar1>
      </div>
      <h3 className="text-xl font-bold text-[#0F172A] mb-2">No Events Found</h3>
      <p className="text-slate-500 max-w-sm mb-6">
        You haven&apos;t created any events yet. Host your first event to get
        started!
      </p>
    </div>
  );
};

export default EmptyState;
