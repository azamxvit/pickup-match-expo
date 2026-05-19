import { Text } from '@/components/shared/text';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { View } from 'react-native';

type Tone =
  | 'neutral'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'outline';

const TONE: Record<Tone, { container: string; text: string }> = {
  neutral: { container: 'bg-surface', text: 'text-text' },
  primary: { container: 'bg-primary-soft', text: 'text-primary' },
  success: { container: 'bg-success-soft', text: 'text-success' },
  warning: { container: 'bg-warning-soft', text: 'text-warning' },
  danger: { container: 'bg-danger-soft', text: 'text-danger' },
  info: { container: 'bg-info-soft', text: 'text-info' },
  outline: {
    container: 'border border-border-strong bg-transparent',
    text: 'text-text-muted',
  },
};

export interface BadgeProps {
  label: string;
  tone?: Tone;
  leadingIcon?: React.ReactNode;
  className?: string;
}

export function Badge({
  label,
  tone = 'neutral',
  leadingIcon,
  className,
}: BadgeProps) {
  const t = TONE[tone];
  return (
    <View
      className={cn(
        'flex-row items-center gap-1.5 rounded-pill px-2.5 py-1',
        t.container,
        className
      )}
    >
      {leadingIcon}
      <Text className={cn('text-caption font-semibold', t.text)}>{label}</Text>
    </View>
  );
}
