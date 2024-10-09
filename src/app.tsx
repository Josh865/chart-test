import * as React from 'react';

import { ActiveUsers } from '~/components/active-users';
import { Activities } from '~/components/activities';
import { CreditsAwarded } from '~/components/credits-awarded';
import { FilterBar } from '~/components/filter-bar';
import { HighlightStats } from '~/components/highlight-stats';
import { LearnerCount } from '~/components/learner-count';
import { Participants } from '~/components/participants';
import { Separator } from '~/components/ui/separator';

export default function App() {
  return (
    <Layout>
      <h3 className="text-xl font-bold">Highlights</h3>
      <HighlightStats />

      <h3 className="mt-8 text-xl font-bold">Overview</h3>
      <FilterBar className="mt-4" />
      <Separator className="mt-4" />
      <div className="mt-8 grid grid-cols-12 gap-x-0 gap-y-14 md:gap-x-14">
        <div className="col-span-12 md:col-span-6">
          <ActiveUsers />
        </div>
        <div className="col-span-12 md:col-span-6">
          <LearnerCount />
        </div>
        <div className="col-span-12 md:col-span-6">
          <CreditsAwarded />
        </div>
        <div className="col-span-12 md:col-span-6">
          <Activities />
        </div>
        <div className="col-span-12">
          <Participants />
        </div>
      </div>
    </Layout>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full">
      <div className="w-60 bg-[#0c5b76] p-8 shadow-[0_14px_28px_rgba(0,0,0,.25),0_10px_10px_rgba(0,0,0,.22)]">
        Sidebar
      </div>
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
}
