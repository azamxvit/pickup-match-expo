import { Text } from '@/components/shared/text';
import { cn } from '@/lib/utils';
import { Pressable, View } from 'react-native';

interface SegmentedOption<T extends string> {
  value: T;
  label: string;
}

interface SegmentedProps<T extends string> {
  options: SegmentedOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}

/**
 * Underlined tab selector used on the Profile screen
 * (Предстоящие события / Результаты) and the Leaderboard
 * (Игроки / Команды).
 */
export function Segmented<T extends string>({
  options,
  value,
  onChange,
  className,
}: SegmentedProps<T>) {
  return (
    <View className={cn('flex-row border-b border-border', className)}>
      {options.map((option) => {
        const active = option.value === value;
        return (
          <Pressable
            key={option.value}
            onPress={() => onChange(option.value)}
            accessibilityRole="tab"
            accessibilityState={{ selected: active }}
            className={cn(
              'flex-1 pb-3 items-center border-b-2',
              active ? 'border-primary' : 'border-transparent'
            )}
          >
            <Text
              className={cn(
                'text-body-md',
                active ? 'text-text font-bold' : 'text-text-muted'
              )}
            >
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
