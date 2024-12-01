"use client";

import { Area, AreaChart, ResponsiveContainer } from "recharts";

import { Card } from "./card";
import { ChartContainer } from "./chart";

const data = [
  { month: "APR", value: 30 },
  { month: "MAY", value: 85 },
  { month: "JUN", value: 45 },
  { month: "JUL", value: 25 },
  { month: "AUG", value: 85 },
  { month: "SEPT", value: 75 },
  { month: "OCT", value: 55 },
  { month: "NOV", value: 45 },
  { month: "DEC", value: 40 },
];

export default function Graph() {
  return (
    <Card className="w-full pt-4">
      <ChartContainer
        config={{
          data: {
            // label: "Data",
            color: "rgb(0, 0, 255)",
          },
        }}
        className="h-[400px]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgb(0, 0, 255, 0.1)" />
                <stop offset="100%" stopColor="rgb(255, 255, 255, 0)" />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke="rgb(0, 0, 255)"
              strokeWidth={2}
              fill="url(#gradient)"
              dot={false}
              activeDot={{
                r: 6,
                fill: "rgb(0, 0, 255)",
                stroke: "white",
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
      <div className="flex justify-between px-8 py-4 text-sm font-medium text-blue-900">
        {data.map((item) => (
          <div key={item.month}>{item.month}</div>
        ))}
      </div>
    </Card>
  );
}
