import { Text } from '@/components/shared/text';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { View } from 'react-native';

interface ScreenHeaderProps {
  title: string;
  subtitle?: React.ReactNode;
  /** Rendered on the right side of the title row. Use icon buttons. */
  actions?: React.ReactNode;
  /** Rendered on the left of the title row. Typically a back button. */
  leading?: React.ReactNode;
  /** Center the title (e.g. for sub-pages with a back button). */
  centerTitle?: boolean;
  className?: string;
}

export function ScreenHeader({
  title,
  subtitle,
  actions,
  leading,
  centerTitle = false,
  className,
}: ScreenHeaderProps) {
  return (
    <View className={cn('px-5 pt-2 pb-3', className)}>
      <View className="flex-row items-center justify-between">
        <View
          className={cn(
            'flex-row items-center gap-2',
            centerTitle && 'flex-1 justify-center'
          )}
        >
          {leading}
          <Text
            className={cn(
              'text-h1 text-text',
              centerTitle && 'text-h3 font-bold'
            )}
            numberOfLines={1}
          >
            {title}
          </Text>
        </View>
        {actions ? (
          <View className="flex-row items-center gap-3">{actions}</View>
        ) : null}
      </View>
      {subtitle ? <View className="mt-1">{subtitle}</View> : null}
    </View>
  );
}
