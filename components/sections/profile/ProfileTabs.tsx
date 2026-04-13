import { Text } from '@/components/shared/text';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';

export function ProfileTabs() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'results'>('results');

  return (
    <View className="flex-row w-full border-b border-border mt-4 px-4">
      <TouchableOpacity 
        onPress={() => setActiveTab('upcoming')}
        className={cn(
          "flex-1 pb-3 items-center border-b-2",
          activeTab === 'upcoming' ? "border-primary" : "border-transparent"
        )}
      >
        <Text className={cn(
          "text-body",
          activeTab === 'upcoming' ? "text-text font-bold" : "text-text-muted"
        )}>
          {t('upcoming_events', 'Предстоящие события')}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => setActiveTab('results')}
        className={cn(
          "flex-1 pb-3 items-center border-b-2",
          activeTab === 'results' ? "border-primary" : "border-transparent"
        )}
      >
        <Text className={cn(
          "text-body",
          activeTab === 'results' ? "text-text font-bold" : "text-text-muted"
        )}>
          {t('results', 'Результаты')}
        </Text>
      </TouchableOpacity>
    </View>
  );
}