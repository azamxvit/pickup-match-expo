import { Segmented } from '@/components/shared/segmented';
import { useState } from 'react';
import { View } from 'react-native';

type Tab = 'upcoming' | 'results';

interface ProfileTabsProps {
  value?: Tab;
  onChange?: (tab: Tab) => void;
}

export function ProfileTabs({ value, onChange }: ProfileTabsProps) {
  const [internal, setInternal] = useState<Tab>('results');
  const active = value ?? internal;
  const handle = (next: Tab) => {
    setInternal(next);
    onChange?.(next);
  };
  return (
    <View className="px-4 mt-4">
      <Segmented
        value={active}
        onChange={handle}
        options={[
          { value: 'upcoming', label: 'Предстоящие события' },
          { value: 'results', label: 'Результаты' },
        ]}
      />
    </View>
  );
}
