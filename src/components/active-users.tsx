import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '~/components/ui/chart';
import { useDateRangeStore } from '~/stores/date-range-store';

const chartData = [
  { month: 'January', users: 186 },
  { month: 'February', users: 305 },
  { month: 'March', users: 237 },
  { month: 'April', users: 73 },
  { month: 'May', users: 209 },
  { month: 'June', users: 214 },
];

const chartConfig = {
  users: {
    label: 'Users',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export function ActiveUsers() {
  const dateRange = useDateRangeStore((state) => state.dateRange);

  console.log(dateRange);

  return (
    <div>
      <div className="text-sm font-bold">Active Users</div>
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
            dataKey="users"
            type="monotone"
            stroke="var(--color-users)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
