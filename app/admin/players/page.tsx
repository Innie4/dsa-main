import { Users } from "lucide-react";
import { StatsCard } from "../components/statcard";
import { DataTable } from "../components/datatable";

const columns = [
  { key: "name", title: "Name" },
  { key: "nationality", title: "Nationality" },
  { key: "age", title: "Age" },
  { key: "position", title: "Position" },
  { key: "videosUploaded", title: "Videos Uploaded" },
];

const data = [
  {
    name: "Oluwa Powers",
    image: "/placeholder.svg",
    nationality: "🇳🇬 Nigeria",
    age: "23 yrs",
    position: "Midfielder",
    videosUploaded: "3",
  },
  // Add more mock data as needed
];

export default function Players() {
  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Players Management Section</h2>
          <p className="text-muted-foreground max-w-[800px]">
            Welcome to the Players Management section, where you can oversee all
            player profiles, monitor activity, and ensure accurate and
            up-to-date information. Easily review and approve new profiles, flag
            accounts, or delete accounts that are no longer active.
          </p>
        </div>
        <StatsCard
          title="Total Players"
          value="500"
          change={{
            type: "increase",
            value: "4%",
            text: "Up from last month",
          }}
          icon={<Users className="w-6 h-6 text-primary" />}
        />
      </div>

      <DataTable columns={columns} data={data} type="players" />
    </div>
  );
}
