import {
  endOfToday,
  format,
  isSameDay,
  startOfMonth,
  startOfToday,
  startOfYear,
  subDays,
  subYears,
} from 'date-fns';
import { CalendarIcon, CogIcon } from 'lucide-react';
import type { ComponentPropsWithoutRef } from 'react';
import type { DateRange } from 'react-day-picker';

import { Button } from '~/components/ui/button';
import { Calendar } from '~/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '~/components/ui/select';
import { cn } from '~/lib/utils';
import { useDateRangeStore } from '~/stores/date-range-store';

const ranges: Array<{ label: string; value: DateRange }> = [
  {
    label: 'Today',
    value: {
      from: startOfToday(),
      to: undefined,
    },
  },
  {
    label: 'Last 7 days',
    value: {
      from: subDays(startOfToday(), 7),
      to: endOfToday(),
    },
  },
  {
    label: 'Last 30 days',
    value: {
      from: subDays(startOfToday(), 30),
      to: endOfToday(),
    },
  },
  {
    label: 'Last 90 days',
    value: {
      from: subDays(startOfToday(), 90),
      to: endOfToday(),
    },
  },
  {
    label: 'Last Year',
    value: {
      from: subYears(startOfToday(), 1),
      to: endOfToday(),
    },
  },
  {
    label: 'Month to Date',
    value: {
      from: startOfMonth(new Date()),
      to: endOfToday(),
    },
  },
  {
    label: 'Year to Date',
    value: {
      from: startOfYear(new Date()),
      to: endOfToday(),
    },
  },
];

export function FilterBar({ className }: ComponentPropsWithoutRef<'div'>) {
  const dateRange = useDateRangeStore((state) => state.dateRange);
  const setDateRange = useDateRangeStore((state) => state.setDateRange);

  // In rare cases, this may not pick what the user selected (e.g., if the user
  // chose 'Year to Date` on the seventh day of the year, 'Last 7 Days' will be
  // selected since since it comes first in the array)
  const selectedRange = ranges.find(
    (r) =>
      r.value.from && dateRange.from && isSameDay(r.value.from, dateRange.from)
  );

  function datePickerLabel() {
    if (dateRange.from && dateRange.to) {
      return (
        format(dateRange.from, 'LLL dd, y') +
        ' - ' +
        format(dateRange.to, 'LLL dd, y')
      );
    } else if (dateRange.from) {
      return format(dateRange.from, 'LLL dd, y');
    } else {
      return 'Pick a date';
    }
  }

  return (
    <div className={cn('flex items-center justify-between', className)}>
      <div className="flex items-center">
        <Select
          value={selectedRange?.label ?? 'Custom'}
          onValueChange={(label) => {
            const range = ranges.find((r) => r.label === label);
            if (!range) return;
            setDateRange(range.value);
          }}
        >
          <SelectTrigger className="w-full rounded-r-none focus:z-10 md:w-[180px]">
            {selectedRange?.label ?? 'Custom'}
          </SelectTrigger>
          <SelectContent>
            {ranges.map((range) => (
              <SelectItem value={range.label}>{range.label}</SelectItem>
            ))}
            {!selectedRange && <SelectItem value="Custom">Custom</SelectItem>}
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={'outline'}
              className={cn(
                '-ml-px w-[300px] justify-start rounded-l-none text-left font-normal hover:bg-background focus:z-10',
                !dateRange && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {datePickerLabel()}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={dateRange?.from}
              selected={dateRange}
              onSelect={(newDateRange) =>
                newDateRange ? setDateRange(newDateRange) : null
              }
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="hidden md:block">
        <Button variant="outline">
          <CogIcon className="mr-1 h-4 w-4" />
          <span>Edit</span>
        </Button>
      </div>
    </div>
  );
}
