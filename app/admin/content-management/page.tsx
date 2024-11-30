import { FileVideo, Flag, Radio, Zap } from "lucide-react";
import { StatsCard } from "../components/statcard";
import { DataTable2 } from "../components/datatable2";

const columns = [
  { key: "name", title: "Name" },
  { key: "contentType", title: "Content Type" },
  { key: "submissionDate", title: "Submission Date" },
  { key: "status", title: "Status" },
];

const data = [
  {
    name: "Training Ground Drills",
    contentType: "Video",
    submissionDate: "11. 10. 2024",
    status: "Active",
  },
  // Add more mock data as needed
];

export default function ContentManagement() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Posts"
          value="1k+"
          change={{
            type: "increase",
            value: "",
            text: "On the rise!",
          }}
          icon={<Radio className="w-6 h-6 text-primary" />}
        />
        <StatsCard
          title="Pending Videos"
          value="100+"
          icon={<FileVideo className="w-6 h-6 text-primary" />}
        />
        <StatsCard
          title="Flagged Content"
          value="5+"
          change={{
            type: "increase",
            value: "8.5%",
            text: "",
          }}
          icon={<Flag className="w-6 h-6 text-primary" />}
        />
        <StatsCard
          title="Total Streams"
          value="50+"
          change={{
            type: "increase",
            value: "4%",
            text: "Up from last month",
          }}
          icon={<Zap className="w-6 h-6 text-primary" />}
        />
      </div>

      <DataTable2 columns={columns} data={data} />
    </div>
  );
}
