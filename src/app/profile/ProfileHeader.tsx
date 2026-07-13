import { Avatar } from "@heroui/react";
import { FiCalendar, FiMail } from "react-icons/fi";

interface ProfileHeaderProps {
  fullName: string;
  email: string;
  role: string;
  joinDate: string;
  initials: string;
}

const ProfileHeader = ({
  fullName,
  email,
  role,
  joinDate,
  initials,
}: ProfileHeaderProps) => {
  return (
    <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
        <Avatar className="h-20 w-20 shrink-0 sm:h-24 sm:w-24">
          <Avatar.Fallback className="bg-[#ECFEFF] text-lg font-semibold text-[#7C3AED] sm:text-xl">
            {initials}
          </Avatar.Fallback>
        </Avatar>

        <div className="flex-1 space-y-2">
          <div className="flex flex-col items-center gap-2 sm:flex-row">
            <h1 className="text-xl font-semibold text-[#0F172A] sm:text-2xl">
              {fullName}
            </h1>
            <span className="inline-flex items-center rounded-full bg-[#7C3AED]/10 px-3 py-1 text-xs font-medium capitalize text-[#7C3AED]">
              {role}
            </span>
          </div>

          <p className="flex items-center justify-center gap-2 text-sm text-[#0F172A]/70 sm:justify-start">
            <FiMail size={14} />
            {email}
          </p>

          <p className="flex items-center justify-center gap-2 text-sm text-[#0F172A]/70 sm:justify-start">
            <FiCalendar size={14} />
            Joined {joinDate}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
