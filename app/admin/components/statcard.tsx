import { Card, CardContent } from "@/app/analytics/components/card";
import { ArrowDown, ArrowUp } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: {
    type: "increase" | "decrease";
    value: string;
    text: string;
  };
  icon?: React.ReactNode;
}

export function StatsCard({ title, value, change, icon }: StatsCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h2 className="text-3xl font-bold mt-2">{value}</h2>
            {change && (
              <p className="flex items-center gap-1 mt-2 text-sm">
                {change.type === "increase" ? (
                  <ArrowUp className="w-4 h-4 text-green-500" />
                ) : (
                  <ArrowDown className="w-4 h-4 text-red-500" />
                )}
                <span
                  className={
                    change.type === "increase"
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {change.value}
                </span>
                {change.text}
              </p>
            )}
          </div>
          {icon && <div className="bg-primary/5 p-3 rounded-full">{icon}</div>}
        </div>
      </CardContent>
    </Card>
  );
}
