import { Users, UserPlus, Users2, Trophy } from "lucide-react";
import { StatsCard } from "./components/statcard";
import { Card } from "../analytics/components/card";

export default function Overview() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="New Signups"
          value="350"
          change={{
            type: "increase",
            value: "10%",
            text: "Up today!",
          }}
          icon={<UserPlus className="w-6 h-6 text-primary" />}
        />
        <StatsCard
          title="Total"
          value="40,800"
          change={{
            type: "increase",
            value: "10%",
            text: "Up from yesterday",
          }}
          icon={<Users className="w-6 h-6 text-primary" />}
        />
        <StatsCard
          title="Total Scouts"
          value="100+"
          change={{
            type: "decrease",
            value: "8.5%",
            text: "Down from yesterday",
          }}
          icon={<Users2 className="w-6 h-6 text-primary" />}
        />
        <StatsCard
          title="Total Players"
          value="500"
          change={{
            type: "increase",
            value: "4%",
            text: "Up from last month",
          }}
          icon={<Trophy className="w-6 h-6 text-primary" />}
        />
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6">Site Activity Graph</h3>
        <div className="h-[400px] flex items-center justify-center text-muted-foreground">
          Graph will be implemented with a charting library
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-6">Userbase</h3>
          <div className="h-[300px] flex items-center justify-center text-muted-foreground">
            Donut chart will be implemented
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-6">
            Projected Content Analytics
          </h3>
          <div className="h-[300px] flex items-center justify-center text-muted-foreground">
            Line chart will be implemented
          </div>
        </Card>
      </div>
    </div>
  );
}
