import { Text } from '@/components/shared/text';
import { StatusBar } from 'expo-status-bar';
import { Platform, View } from 'react-native';

export default function ModalScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background p-4">
      <Text className="text-h1 font-bold text-text mb-4">Настройки</Text>
      
      <View className="h-[1px] w-full bg-border my-4" />
      
      <Text className="text-body text-text-muted text-center">
        Здесь будут фильтры поиска или настройки профиля.
      </Text>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}