import * as React from 'react';

import { cn } from '~/lib/utils';

const ChartCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => <div ref={ref} {...props} />);
ChartCard.displayName = 'ChartCard';

const ChartCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center gap-x-2', className)}
    {...props}
  />
));
ChartCardHeader.displayName = 'ChartCardHeader';

const ChartCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-sm font-bold leading-none', className)}
    {...props}
  />
));
ChartCardTitle.displayName = 'ChartCardTitle';

const ChartCardCurrentValue = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-2xl', className)} {...props} />
));
ChartCardCurrentValue.displayName = 'ChartCardCurrentValue';

const ChartCardPreviousValue = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  >
    {children} previous period
  </p>
));
ChartCardCurrentValue.displayName = 'ChartCardPreviousValue';

const ChartCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => <div ref={ref} {...props} />);
ChartCardContent.displayName = 'ChartCardContent';

const ChartCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center', className)} {...props} />
));
ChartCardFooter.displayName = 'ChartCardFooter';

export {
  ChartCard,
  ChartCardHeader,
  ChartCardFooter,
  ChartCardTitle,
  ChartCardCurrentValue,
  ChartCardContent,
  ChartCardPreviousValue,
};
