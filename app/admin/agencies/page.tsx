import { Building2, Plus, Trophy } from "lucide-react";
import { StatsCard } from "../components/statcard";
import { DataTable } from "../components/datatable";

const columns = [
  { key: "agencyName", title: "Agency Name" },
  { key: "location", title: "Location" },
  { key: "email", title: "E-mail Address" },
  { key: "signUpDate", title: "Sign-up Date" },
];

type AgencyData = {
  agencyName: string;
  image: string;
  location: string;
  email: string;
  signUpDate: string;
};

const data: AgencyData[] = [
  {
    agencyName: "Eagles Academy",
    image: "/placeholder.svg",
    location: "🇳🇬 Nigeria",
    email: "eaglesacademy@yahoo.com",
    signUpDate: "19. 10. 2024",
  },
  // Add more mock data as needed
];

export default function Agencies() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Total Agencies"
          value="800+"
          change={{
            type: "increase",
            value: "10%",
            text: "Up from yesterday",
          }}
          icon={<Building2 className="w-6 h-6 text-primary" />}
        />
        <StatsCard
          title="New Agencies"
          value="50+"
          change={{
            type: "increase",
            value: "10%",
            text: "Up from yesterday",
          }}
          icon={<Plus className="w-6 h-6 text-primary" />}
        />
        <StatsCard
          title="Success ratio"
          value="90%"
          change={{
            type: "increase",
            value: "10%",
            text: "",
          }}
          icon={<Trophy className="w-6 h-6 text-primary" />}
        />
      </div>

      <DataTable columns={columns} data={data} type="agencies" />
    </div>
  );
}
