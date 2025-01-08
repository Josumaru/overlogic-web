"use client";

import { PolarAngleAxis, Radar, RadarChart } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { NextPage } from "next";

const chartConfig = {
  range: {
    label: "",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface Props {
    params: {
    stats: string;
    range: number;
  }[];
}

export const PriceRadarChart:NextPage<Props> = ({params}) => {
  return (
    <Card>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto w-full max-h-[250px]"
        >
          <RadarChart data={params}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="stats" />
            <Radar
              dataKey="range"
              fill="var(--color-one)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
