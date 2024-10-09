import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '~/components/ui/chart';
import { useDateRangeStore } from '~/stores/date-range-store';

const chartData = [
  { month: 'January', learners: 186 },
  { month: 'February', learners: 305 },
  { month: 'March', learners: 237 },
  { month: 'April', learners: 73 },
  { month: 'May', learners: 209 },
  { month: 'June', learners: 214 },
];

const chartConfig = {
  learners: {
    label: 'Learners',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export function Activities() {
  const dateRange = useDateRangeStore((state) => state.dateRange);

  console.log(dateRange);

  return (
    <div>
      <div className="text-sm font-bold">Activities</div>
      <div className="mt-2 text-2xl">1400</div>
      <ChartContainer config={chartConfig} className="mt-4">
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Line
            dataKey="learners"
            type="monotone"
            stroke="var(--color-learners)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
