import { Text } from '@/components/shared/text';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { Platform, Pressable, View, type PressableProps } from 'react-native';

type FabProps = PressableProps & {
  label: string;
  leadingIcon?: React.ReactNode;
  /** Container className for positioning */
  containerClassName?: string;
};

/**
 * A floating action button shaped like the "Создать игру" pill in the
 * mockup. The component renders its own absolute positioning by
 * default so screens can drop it in without extra wrappers.
 */
export function Fab({
  label,
  leadingIcon,
  className,
  containerClassName,
  ...rest
}: FabProps) {
  return (
    <View
      className={cn(
        'absolute right-4 bottom-4',
        containerClassName
      )}
      style={
        Platform.OS === 'web'
          ? undefined
          : {
              shadowColor: '#0F172A',
              shadowOpacity: 0.18,
              shadowRadius: 16,
              shadowOffset: { width: 0, height: 8 },
              elevation: 6,
            }
      }
      pointerEvents="box-none"
    >
      <Pressable
        accessibilityRole="button"
        className={cn(
          'flex-row items-center gap-2 rounded-pill bg-background border border-border-strong px-5 py-3.5 active:opacity-80',
          className
        )}
        {...rest}
      >
        {leadingIcon}
        <Text className="text-button text-text">{label}</Text>
      </Pressable>
    </View>
  );
}
