import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const focusRing =
  'focus:ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';

export function percentageFormatter(number: number, decimals = 1) {
  const formattedNumber = new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(number);

  const symbol = number > 0 && number !== Infinity ? '+' : '';

  return `${symbol}${formattedNumber}`;
}
