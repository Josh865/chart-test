import * as TabsPrimitive from '@radix-ui/react-tabs';
import clsx from 'clsx';
import { ChartBarDecreasingIcon, ChartPieIcon } from 'lucide-react';
import { useState } from 'react';

import { ParticipantsByProfession } from '~/components/participants-by-profession';
import { BarList, type BarListProps } from '~/components/ui/bar-list';
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { focusRing } from '~/lib/utils';

const data: Record<string, BarListProps['data']> = {
  Specialty: [
    { name: 'Audiology', value: 5 },
    { name: 'Dieticians', value: 5 },
    { name: 'Academic/Research', value: 4 },
    { name: 'Critical Care Medicine', value: 4 },
    { name: 'General Surgery', value: 4 },
    { name: 'Anesthesiology', value: 3 },
    { name: 'Cardiovascular Disease', value: 3 },
    { name: 'Behavioral Health', value: 3 },
    { name: 'Emergency Medicine', value: 3 },
    { name: 'Family Practice', value: 3 },
  ],
  Degree: [
    { name: 'MD', value: 10 },
    { name: 'DO', value: 7 },
    { name: 'MBBS', value: 8 },
    { name: 'MPH', value: 5 },
    { name: 'DNP', value: 6 },
    { name: 'PA', value: 4 },
    { name: 'MSN', value: 5 },
    { name: 'DDS', value: 3 },
  ],
  States: [
    { name: 'OH', value: 90 },
    { name: 'TN', value: 103 },
    { name: 'VA', value: 76 },
    { name: 'CA', value: 53 },
    { name: 'WI', value: 61 },
    { name: 'TX', value: 124 },
    { name: 'NY', value: 49 },
    { name: 'IN', value: 88 },
  ],
};

const tabs = Object.keys(data);

export function Participants() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [chartType, setChartType] = useState('bar');

  return (
    <div>
      <div className="text-sm font-bold leading-6">Participants</div>
      <div className="mt-2 text-2xl">102</div>

      <div className="flex items-center justify-between border-b">
        <TabsPrimitive.Root value={selectedTab} onValueChange={setSelectedTab}>
          <TabsPrimitive.List
            className="-mb-px flex space-x-8"
            aria-label="Manage your account"
          >
            {tabs.map((tab) => (
              <TabsPrimitive.Trigger
                className={clsx(
                  'whitespace-nowrap rounded-t-md border-b-2 border-transparent px-1 py-3 text-sm font-medium text-muted-foreground hover:border-muted-foreground/40 hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-primary',
                  focusRing
                )}
                value={tab}
              >
                {tab}
              </TabsPrimitive.Trigger>
            ))}
          </TabsPrimitive.List>
        </TabsPrimitive.Root>

        <Tabs value={chartType} onValueChange={setChartType}>
          <TabsList>
            <TabsTrigger value="bar">
              <ChartBarDecreasingIcon className="h-4 w-4" />
              <span className="sr-only">View as bar chart</span>
            </TabsTrigger>
            <TabsTrigger value="pie">
              <ChartPieIcon className="h-4 w-4" />
              <span className="sr-only">View as pie chart</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {chartType === 'bar' ? (
        <BarList
          data={data[selectedTab]}
          className="mt-4"
          onValueChange={() => {
            console.log('clicked');
          }}
        />
      ) : (
        <ParticipantsByProfession />
      )}
    </div>
  );
}
