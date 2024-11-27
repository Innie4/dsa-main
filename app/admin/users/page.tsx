import { UserPlus, UserCheck } from "lucide-react";
import { StatsCard } from "../components/statcard";
import { DataTable } from "../components/datatable";

const columns = [
  { key: "name", title: "Name" },
  { key: "nationality", title: "Nationality" },
  { key: "email", title: "E-mail Address" },
  { key: "signUpDate", title: "Sign-up Date" },
];

const data = [
  {
    name: "Omo Destiny",
    image: "/placeholder.svg",
    nationality: "🇳🇬 Nigeria",
    email: "Omodestiny@yahoo.com",
    signUpDate: "19. 10. 2024",
  },
  // Add more mock data as needed
];

export default function Users() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Total Users"
          value="40,800"
          change={{
            type: "increase",
            value: "10%",
            text: "Up from yesterday",
          }}
          icon={<Users className="w-6 h-6 text-primary" />}
        />
        <StatsCard
          title="New Signups"
          value="300"
          change={{
            type: "increase",
            value: "10%",
            text: "On the rise for this month",
          }}
          icon={<UserPlus className="w-6 h-6 text-primary" />}
        />
        <StatsCard
          title="Active Users"
          value="3,500"
          change={{
            type: "increase",
            value: "10%",
            text: "",
          }}
          icon={<UserCheck className="w-6 h-6 text-primary" />}
        />
      </div>

      <DataTable columns={columns} data={data} type="users" />
    </div>
  );
}
