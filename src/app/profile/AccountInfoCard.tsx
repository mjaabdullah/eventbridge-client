import { FiCalendar, FiClock, FiHash, FiShield } from "react-icons/fi";
import { PiDevicesThin } from "react-icons/pi";
import InfoRow from "./InfoRow";

interface AccountInfoCardProps {
  userRole: string;
  memberSince: string;
  lastUpdated: string;
  userId: string;
  deviceInfo: string;
}

const AccountInfoCard = ({
  userRole,
  memberSince,
  lastUpdated,
  userId,
  deviceInfo,
}: AccountInfoCardProps) => {
  return (
    <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-base font-semibold text-[#0F172A]">
        Account Information
      </h2>
      <div className="space-y-5">
        <InfoRow
          icon={<FiShield size={18} />}
          label="Account Role"
          value={userRole.charAt(0).toUpperCase() + userRole.slice(1)}
        />
        <InfoRow
          icon={<FiCalendar size={18} />}
          label="Member Since"
          value={memberSince}
        />
        <InfoRow
          icon={<FiClock size={18} />}
          label="Last Updated"
          value={lastUpdated}
        />
        <InfoRow icon={<FiHash size={18} />} label="User ID" value={userId} />
        <InfoRow
          icon={<PiDevicesThin size={18} />}
          label="Device Info"
          value={deviceInfo}
        />
      </div>
    </section>
  );
};

export default AccountInfoCard;
