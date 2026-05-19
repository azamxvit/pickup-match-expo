import { Text } from '@/components/shared/text';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react-native';
import * as React from 'react';
import { Pressable, View, type PressableProps } from 'react-native';

type Variant = 'subtle' | 'outline' | 'solid' | 'soft';

type ChipProps = PressableProps & {
  label: string;
  /** Icon rendered before the label */
  leadingIcon?: React.ReactNode;
  /** When true, renders a small chevron-down (filter chip) */
  withDropdown?: boolean;
  variant?: Variant;
  selected?: boolean;
  size?: 'sm' | 'md';
};

const VARIANT: Record<Variant, string> = {
  subtle: 'bg-surface border border-transparent',
  outline: 'bg-background border border-border',
  solid: 'bg-primary border border-primary',
  soft: 'bg-primary-soft border border-transparent',
};

const TEXT_VARIANT: Record<Variant, string> = {
  subtle: 'text-text',
  outline: 'text-text',
  solid: 'text-primary-foreground',
  soft: 'text-primary',
};

export function Chip({
  label,
  leadingIcon,
  withDropdown,
  variant = 'outline',
  selected,
  size = 'md',
  className,
  ...rest
}: ChipProps) {
  const resolvedVariant: Variant = selected ? 'solid' : variant;

  return (
    <Pressable
      accessibilityRole="button"
      className={cn(
        'flex-row items-center gap-1.5 rounded-pill active:opacity-80',
        size === 'sm' ? 'px-3 py-1' : 'px-3.5 py-2',
        VARIANT[resolvedVariant],
        className
      )}
      {...rest}
    >
      {leadingIcon ? <View>{leadingIcon}</View> : null}
      <Text
        className={cn(
          'font-semibold',
          size === 'sm' ? 'text-caption' : 'text-body-md',
          TEXT_VARIANT[resolvedVariant]
        )}
      >
        {label}
      </Text>
      {withDropdown ? (
        <ChevronDown
          size={14}
          color={resolvedVariant === 'solid' ? '#FFFFFF' : '#6B7280'}
        />
      ) : null}
    </Pressable>
  );
}
