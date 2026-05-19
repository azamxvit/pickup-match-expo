import { cn } from '@/lib/utils';
import * as React from 'react';
import { Pressable, type PressableProps } from 'react-native';

type Variant = 'ghost' | 'surface' | 'outline' | 'primary';
type Size = 'sm' | 'md' | 'lg';

const VARIANT: Record<Variant, string> = {
  ghost: 'bg-transparent',
  surface: 'bg-surface',
  outline: 'bg-background border border-border',
  primary: 'bg-primary',
};

const SIZE: Record<Size, string> = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};

type IconButtonProps = PressableProps & {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
};

/**
 * Circular tap target wrapping a Lucide icon. Used for header actions,
 * floating action buttons, and the share/settings/wallet triplet on the
 * profile screen.
 */
export function IconButton({
  variant = 'ghost',
  size = 'md',
  className,
  children,
  ...rest
}: IconButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      className={cn(
        'items-center justify-center rounded-full active:opacity-70',
        VARIANT[variant],
        SIZE[size],
        className
      )}
      {...rest}
    >
      {children}
    </Pressable>
  );
}
