import { Button } from "@heroui/react";
import { FiEdit2, FiSettings } from "react-icons/fi";

const QuickActions = () => {
  return (
    <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-base font-semibold text-[#0F172A]">
        Quick Actions
      </h2>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7C3AED] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#6D28D9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2">
          <FiEdit2 size={16} />
          Edit Profile
        </Button>
        <Button className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-5 py-2.5 text-sm font-medium text-[#0F172A] transition-colors hover:bg-[#ECFEFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2">
          <FiSettings size={16} />
          Manage Events
        </Button>
      </div>
    </section>
  );
};

export default QuickActions;
