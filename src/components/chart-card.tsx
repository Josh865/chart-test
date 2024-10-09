import type { ComponentPropsWithoutRef } from 'react';

import { Badge } from '~/components/ui/badge';
import { percentageFormatter } from '~/lib/utils';

const getBadgeType = (value: number, decreaseIsPositive = false) => {
  let valueAsWholeNumber = Math.round(value * 100);

  if (decreaseIsPositive) {
    valueAsWholeNumber = valueAsWholeNumber * -1;
  }

  if (valueAsWholeNumber > 0) {
    return 'success';
  } else if (valueAsWholeNumber < 0) {
    if (valueAsWholeNumber > -50) {
      return 'warning';
    }
    return 'error';
  } else {
    return 'neutral';
  }
};

interface ChartCardProps extends ComponentPropsWithoutRef<'div'> {
  title: string;
  currentValue: number;
  previousValue: number;
  decreaseIsPositive?: boolean;
}

export function ChartCard({
  title,
  currentValue,
  previousValue,
  children,
  decreaseIsPositive = false,
  ...props
}: ChartCardProps) {
  const change = (currentValue - previousValue) / previousValue;

  return (
    <div {...props}>
      <div className="flex items-center gap-2">
        <div className="text-sm font-bold">{title}</div>
        <Badge variant={getBadgeType(change, decreaseIsPositive)}>
          {percentageFormatter(change)}
        </Badge>
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <div className="text-2xl">{currentValue}</div>
        <div className="text-sm text-muted-foreground">
          {previousValue} previous period
        </div>
      </div>
      {children}
    </div>
  );
}
