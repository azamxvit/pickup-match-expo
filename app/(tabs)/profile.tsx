import { Screen } from '@/components/shared/screen';
import { Text } from '@/components/shared/text';
import { ProfileHeader } from '@/components/sections/profile/ProfileHeader';
import { ProfileStats } from '@/components/sections/profile/ProfileStats';
import { ProfileTabs } from '@/components/sections/profile/ProfileTabs';
import { palette } from '@/constants/theme';
import { currentPlayer } from '@/lib/mock-data';
import { LineChart } from 'lucide-react-native';
import { Pressable, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <Screen scrollable scrollViewProps={{ contentContainerStyle: { paddingBottom: 48 } }}>
      <ProfileHeader player={currentPlayer} />

      <ProfileTabs />

      <ProfileStats player={currentPlayer} />

      <View className="px-4 mt-6">
        <Pressable
          accessibilityRole="button"
          className="flex-row items-center justify-center gap-2 bg-card border border-border rounded-2xl py-4 active:opacity-70"
        >
          <LineChart size={18} color={palette.text} />
          <Text className="text-button text-text">Анализ</Text>
        </Pressable>
      </View>
    </Screen>
  );
}
