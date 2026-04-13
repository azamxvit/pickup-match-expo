import { Text } from '@/components/shared/text';
import { Settings, Share2, Wallet } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { Image, View } from 'react-native';

export function ProfileHeader() {
  const { t } = useTranslation();
  
  return (
    <View className="w-full h-[250px] relative justify-end">
      <View className="absolute top-0 left-0 w-full h-2/3 bg-accent rounded-xl overflow-hidden">
        <View className="w-full h-full bg-stone-300 items-center justify-center">
          <Text className="text-caption text-text-muted">Pitch Background</Text>
        </View>
      </View>
      
      <View className="absolute top-4 right-4 flex-row gap-3">
        <View className="w-10 h-10 bg-background border border-border rounded-full items-center justify-center">
          <Wallet size={20} className="text-primary" />
        </View>
        <View className="w-10 h-10 bg-background border border-border rounded-full items-center justify-center">
          <Share2 size={20} className="text-primary" />
        </View>
        <View className="w-10 h-10 bg-background border border-border rounded-full items-center justify-center">
          <Settings size={20} className="text-primary" />
        </View>
      </View>

      <View className="absolute top-4 left-4 bg-background px-4 py-2 border border-border rounded-full flex-row gap-2 items-center">
        <Wallet size={16} className="text-primary" />
        <Text className="text-body font-bold">0,00 KZT</Text>
      </View>

      <View className="w-full items-center mb-6">
        <View className="w-[120px] h-[120px] border-[6px] border-background rounded-full overflow-hidden bg-background">
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop' }} 
            className="w-full h-full" 
          />
        </View>
        <Text className="text-h1 mt-3">yersaiyn69</Text>
      </View>
    </View>
  );
}