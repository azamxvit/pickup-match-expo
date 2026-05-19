import { Text } from '@/components/shared/text';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { View } from 'react-native';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <View
      className={cn(
        'items-center justify-center px-8 py-10 gap-3',
        className
      )}
    >
      {icon ? (
        <View className="w-16 h-16 rounded-full bg-surface items-center justify-center">
          {icon}
        </View>
      ) : null}
      <Text className="text-h3 text-text text-center">{title}</Text>
      {description ? (
        <Text className="text-body-md text-text-muted text-center">
          {description}
        </Text>
      ) : null}
      {action}
    </View>
  );
}
