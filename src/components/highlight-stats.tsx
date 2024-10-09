import clsx from 'clsx';
import { ChevronDownIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { focusRing } from '~/lib/utils';

const stats = [
  {
    name: 'Monthly Active Users',
    value: '3,284',
  },
  {
    name: 'Annual Unique Learners',
    value: '12,523',
  },
];

export function HighlightStats() {
  return (
    <dl className="-mx-6 grid grid-cols-1 md:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-b border-r-0 p-6 md:border-b-0 md:border-r"
        >
          <dt className="text-sm font-medium leading-6 text-muted-foreground">
            {stat.name}
          </dt>
          <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight">
            {stat.value}
          </dd>
        </div>
      ))}
      <HighlightsCredits />
    </dl>
  );
}

export function HighlightsCredits() {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 p-6">
      <dt className="text-sm font-medium leading-6 text-muted-foreground">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className={clsx(
                'flex items-center gap-x-1 rounded-md',
                focusRing
              )}
            >
              <span>All Credits</span>
              <ChevronDownIcon className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>AMA/PRA Category 1</DropdownMenuItem>
            <DropdownMenuItem>ANA</DropdownMenuItem>
            <DropdownMenuItem>Attendance w/o Credit</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </dt>
      <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight">
        465
      </dd>
    </div>
  );
}
