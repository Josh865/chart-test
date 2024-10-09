import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '~/components/ui/chart';
import { useDateRangeStore } from '~/stores/date-range-store';

const chartData = [
  { month: 'January', category1: 186, category2: 100, attendanceOnly: 12 },
  { month: 'February', category1: 305, category2: 42, attendanceOnly: 86 },
  { month: 'March', category1: 237, category2: 58, attendanceOnly: 23 },
  { month: 'April', category1: 73, category2: 132, attendanceOnly: 101 },
  { month: 'May', category1: 209, category2: 19, attendanceOnly: 58 },
  { month: 'June', category1: 214, category2: 281, attendanceOnly: 97 },
];

const chartConfig = {
  category1: {
    label: 'Category 1',
    color: 'hsl(var(--chart-1))',
  },
  category2: {
    label: 'Category 2',
    color: 'hsl(var(--chart-2))',
  },
  attendanceOnly: {
    label: 'Attendance Only',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig;

export function CreditsAwarded() {
  const dateRange = useDateRangeStore((state) => state.dateRange);

  console.log(dateRange);

  return (
    <div>
      <div className="text-sm font-bold">Credits Awarded</div>
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
            dataKey="category1"
            type="monotone"
            stroke="var(--color-category1)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="category2"
            type="monotone"
            stroke="var(--color-category2)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="attendanceOnly"
            type="monotone"
            stroke="var(--color-attendanceOnly)"
            strokeWidth={2}
            dot={false}
          />
          <ChartLegend content={<ChartLegendContent />} />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
