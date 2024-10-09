import { endOfToday, startOfToday, subDays } from 'date-fns';
import type { DateRange } from 'react-day-picker';
import { create } from 'zustand';

interface DateRangeState {
  dateRange: DateRange;
  setDateRange: (dateRange: DateRange) => void;
}

const thirtyDaysAgo = subDays(startOfToday(), 30);

export const useDateRangeStore = create<DateRangeState>()((set) => ({
  dateRange: {
    from: thirtyDaysAgo,
    to: endOfToday(),
  },
  setDateRange: (dateRange) => set({ dateRange }),
}));
