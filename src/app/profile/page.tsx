import { getSessionUserFromServer } from "@/lib/getSessionFromServer";
import AccountInfoCard from "./AccountInfoCard";
import PersonalInfoCard from "./PersonalInfoCard";
import ProfileHeader from "./ProfileHeader";
import QuickActions from "./QuickActions";

// const profileUser = {
//   id: "6a53533bc651b76506711b4b",
//   name: "Mr Ranga",
//   email: "ranga@admin.com",
//   emailVerified: false,
//   userRole: "admin",
//   createdAt: "Sun Jul 12 2026 14:41:31 GMT+0600 (Bangladesh Standard Time)",
//   updatedAt: "Sun Jul 12 2026 14:41:31 GMT+0600 (Bangladesh Standard Time)",
// };

const formatDate = (date: Date | string | undefined) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const parseUserAgent = (ua: string) => {
  let os = "Unknown OS";
  let browser = "Unknown Browser";

  // OS detect
  if (ua.includes("Windows")) os = "Windows";
  else if (ua.includes("Mac")) os = "MacOS";
  else if (ua.includes("Android")) os = "Android";
  else if (ua.includes("iPhone")) os = "iOS";

  // Browser detect
  if (ua.includes("Chrome")) browser = "Chrome";
  else if (ua.includes("Firefox")) browser = "Firefox";
  else if (ua.includes("Safari")) browser = "Safari";
  else if (ua.includes("Edge")) browser = "Edge";

  return `${browser} on ${os}`;
};

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

const ProfilePage = async () => {
  const getProfileUser = await getSessionUserFromServer();

  const profileUser = getProfileUser?.user;

  if (!profileUser) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <ProfileHeader
          fullName={profileUser?.name || ""}
          email={profileUser?.email || ""}
          role={profileUser?.userRole || ""}
          joinDate={
            profileUser?.createdAt ? formatDate(profileUser.createdAt) : ""
          }
          initials={getInitials(profileUser?.name || "")}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <PersonalInfoCard
            fullName={profileUser?.name || ""}
            email={profileUser?.email || ""}
            emailVerified={profileUser?.emailVerified}
          />
          <AccountInfoCard
            userRole={profileUser?.userRole || ""}
            memberSince={formatDate(profileUser?.createdAt)}
            lastUpdated={formatDate(profileUser?.updatedAt)}
            userId={profileUser?.id || ""}
            deviceInfo={parseUserAgent(
              getProfileUser?.session?.userAgent || "",
            )}
          />
        </div>

        <QuickActions />
      </div>
    </main>
  );
};

export default ProfilePage;
