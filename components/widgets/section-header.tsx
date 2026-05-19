import { Text } from '@/components/shared/text';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { Pressable, View } from 'react-native';

interface SectionHeaderProps {
  title: string;
  trailing?: React.ReactNode;
  onActionPress?: () => void;
  actionLabel?: string;
  className?: string;
}

export function SectionHeader({
  title,
  trailing,
  onActionPress,
  actionLabel,
  className,
}: SectionHeaderProps) {
  return (
    <View
      className={cn(
        'flex-row items-center justify-between mb-3',
        className
      )}
    >
      <Text className="text-h3 text-text">{title}</Text>
      {trailing ?? (actionLabel ? (
        <Pressable
          accessibilityRole="link"
          onPress={onActionPress}
          hitSlop={8}
          className="active:opacity-60"
        >
          <Text className="text-body-md text-primary font-semibold">
            {actionLabel}
          </Text>
        </Pressable>
      ) : null)}
    </View>
  );
}
