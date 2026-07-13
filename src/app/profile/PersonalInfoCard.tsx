import { FiAlertCircle, FiCheckCircle, FiMail, FiUser } from "react-icons/fi";
import InfoRow from "./InfoRow";

interface PersonalInfoCardProps {
  fullName: string;
  email: string;
  emailVerified: boolean;
}

const PersonalInfoCard = ({
  fullName,
  email,
  emailVerified,
}: PersonalInfoCardProps) => {
  return (
    <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-base font-semibold text-[#0F172A]">
        Personal Information
      </h2>
      <div className="space-y-5">
        <InfoRow
          icon={<FiUser size={18} />}
          label="Full Name"
          value={fullName}
        />
        <InfoRow
          icon={<FiMail size={18} />}
          label="Email Address"
          value={email}
        />
        <InfoRow
          icon={
            emailVerified ? (
              <FiCheckCircle size={18} className="text-[#7C3AED]" />
            ) : (
              <FiAlertCircle size={18} className="text-[#F97316]" />
            )
          }
          label="Email Verification"
          value={emailVerified ? "Verified" : "Not Verified"}
        />
      </div>
    </section>
  );
};

export default PersonalInfoCard;
