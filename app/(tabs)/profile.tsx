import { Text } from '@/components/shared/text';
import { Activity } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { ScrollView, TouchableOpacity, View } from 'react-native';

import { ProfileHeader } from '@/components/sections/profile/ProfileHeader';
import { ProfileStats } from '@/components/sections/profile/ProfileStats';
import { ProfileTabs } from '@/components/sections/profile/ProfileTabs';

export default function ProfileScreen() {
  const { t } = useTranslation();

  return (
    <ScrollView 
      className="flex-1 bg-background" 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <View className="flex-1 pb-6">
        
        <ProfileHeader />

        <ProfileTabs />

        <ProfileStats />

        <View className="px-4 mt-6">
          <TouchableOpacity 
            className="w-full bg-surface border border-border rounded-2xl flex-row justify-center items-center py-4 gap-2 active:opacity-70"
          >
            <Activity size={20} className="text-text" />
            <Text className="text-button text-text font-bold">
              {t('analyze', 'Анализ')}
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}