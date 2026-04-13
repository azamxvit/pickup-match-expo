import { Text } from '@/components/shared/text';
import { Bell, ChevronDown, Search, Users } from 'lucide-react-native';
import { ScrollView, TouchableOpacity, View } from 'react-native';

export default function FeedScreen() {
  return (
    <ScrollView 
      className="flex-1 bg-white"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40, paddingTop: 60 }} 
    >
      <View className="px-5">
        
        <View className="flex-row justify-between items-center mb-1">
          <Text className="text-[22px] font-extrabold text-black">Футбол в Astana</Text>
          <View className="flex-row gap-5">
            <Search size={24} color="#000" strokeWidth={1.5} />
            <Bell size={24} color="#000" strokeWidth={1.5} />
          </View>
        </View>

        <TouchableOpacity className="flex-row items-center gap-1 mb-6">
          <Text className="text-[15px] text-gray-400">Радиус 100 км</Text>
          <ChevronDown size={16} color="#9CA3AF" />
        </TouchableOpacity>

        <View className="w-full bg-[#1A261A] rounded-[24px] p-6 mb-8">
          <Text className="text-[18px] leading-6 font-bold text-white mb-3">
            Скоро мы объявим новые игры! Следи за обновлениями!
          </Text>
          <Text className="text-[14px] leading-5 text-gray-300">
            Хотите организовать игры или стать партнером и развивать футбол в вашем регионе?{' '}
            <Text className="text-white underline font-bold">Создайте игру</Text> и начните!
          </Text>
        </View>

        <Text className="text-[18px] font-extrabold text-black mb-4">Последние результаты</Text>
        
        <Text className="text-[15px] text-gray-400 mb-4">16 июля, Ср</Text>

        <View className="bg-white rounded-[24px] p-4 border border-gray-300 mb-4">
          
          <View className="flex-row justify-between items-start">
            <View className="flex-row gap-3">
              <View className="w-12 h-12 bg-[#F3E5D8] rounded-full items-center justify-center">
                <Users size={24} color="#B49372" strokeWidth={1.5} />
              </View>
              <View className="justify-center">
                <Text className="text-[16px] font-bold text-black leading-5">6x6 игра</Text>
                <Text className="text-[14px] text-gray-400">Pickup, Рейтинговая</Text>
              </View>
            </View>
            
            <View className="px-3 py-1.5 rounded-full border border-gray-400">
              <Text className="text-[13px] text-gray-500">Завершена</Text>
            </View>
          </View>

          <View className="flex-row items-center gap-2 mt-4 mb-5 px-1">
            <Text className="text-[16px] font-extrabold text-black">20:45</Text>
            <Text className="text-[15px] text-gray-400">English School, Есиль</Text>
          </View>

          <View className="flex-row justify-between items-center px-1">
            <View className="flex-row items-center gap-3">
              
              <View className="flex-row">
                <View className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white z-30" />
                <View className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white -ml-3 z-20" />
                <View className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white -ml-3 z-10" />
              </View>
              
              <Text className="text-[14px] text-gray-500 font-bold">+15</Text>
              
              <View className="flex-row items-center gap-1.5 px-2.5 py-1 rounded-md border border-gray-400 ml-1">
                <View className="w-2 h-2 rounded-full bg-[#EF4444]" />
                <Text className="text-[13px] text-gray-500">Легенда</Text>
              </View>
            </View>
            
            <View className="w-[72px] h-[48px] bg-gray-200 rounded-xl" />
          </View>

        </View>

      </View>
    </ScrollView>
  );
}