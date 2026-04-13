import { Text } from '@/components/shared/text';
import { BarChart2, Footprints, Goal } from 'lucide-react-native';
import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

export function ProfileStats() {
  const [format, setFormat] = useState<'5x5' | 'all'>('5x5');

  return (
    <View className="flex-1 px-4 mt-6 gap-4">
      <Text className="text-h2">Производительность</Text>
      
      <View className="flex-row gap-2 mb-2">
        <TouchableOpacity 
          onPress={() => setFormat('5x5')}
          className={`px-4 py-1.5 rounded-full ${format === '5x5' ? 'bg-primary' : 'bg-surface'}`}
        >
          <Text className={format === '5x5' ? 'text-primary-foreground font-bold' : 'text-text'}>5x5</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={() => setFormat('all')}
          className={`px-4 py-1.5 rounded-full ${format === 'all' ? 'bg-primary' : 'bg-surface border border-border'}`}
        >
          <Text className={format === 'all' ? 'text-primary-foreground font-bold' : 'text-text'}>Общее</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row gap-3">
        <View className="flex-[3] bg-surface p-4 rounded-2xl">
          <View className="flex-row justify-between mb-2">
            <View>
              <View className="flex-row items-center gap-2">
                <BarChart2 size={16} className="text-primary" />
                <Text className="text-h2 font-bold">489</Text>
              </View>
              <Text className="text-caption text-text-muted">PBX Rank</Text>
            </View>
            <View>
              <Text className="text-body font-bold text-center">505</Text>
              <Text className="text-caption text-text-muted text-center">Глобаль...</Text>
            </View>
            <View>
              <Text className="text-body font-bold text-center">19</Text>
              <Text className="text-caption text-text-muted text-center">Локаль...</Text>
            </View>
          </View>
        </View>

        <View className="flex-[2] bg-surface p-4 rounded-2xl justify-center items-center">
          <Text className="text-h2 font-bold">49%</Text>
          <Text className="text-caption text-text-muted text-center mt-1">Уровень доверия</Text>
        </View>
      </View>

      <View className="w-full bg-surface p-4 rounded-2xl flex-row items-center justify-between">
        <View>
          <Text className="text-caption text-text-muted mb-1">Процент побед</Text>
          <Text className="text-h1 font-bold">44%</Text>
        </View>
        <View className="flex-row gap-2">
          <View className="bg-green-50 px-3 py-1.5 rounded-lg flex-row gap-1 items-center">
            <Text className="text-green-600 font-bold">W</Text>
            <Text className="text-text font-bold">7</Text>
          </View>
          <View className="bg-orange-50 px-3 py-1.5 rounded-lg flex-row gap-1 items-center">
            <Text className="text-orange-400 font-bold">D</Text>
            <Text className="text-text font-bold">6</Text>
          </View>
          <View className="bg-red-50 px-3 py-1.5 rounded-lg flex-row gap-1 items-center">
            <Text className="text-red-500 font-bold">L</Text>
            <Text className="text-text font-bold">9</Text>
          </View>
        </View>
      </View>

      <View className="flex-row gap-3">
        <View className="flex-1 bg-surface p-4 rounded-2xl">
          <Goal size={20} className="text-text-muted mb-2" />
          <Text className="text-h3 font-bold">5</Text>
          <Text className="text-caption text-text-muted mt-1">Голы</Text>
        </View>
        <View className="flex-1 bg-surface p-4 rounded-2xl">
          <Footprints size={20} className="text-text-muted mb-2" />
          <Text className="text-h3 font-bold">1</Text>
          <Text className="text-caption text-text-muted mt-1">Передачи</Text>
        </View>
      </View>
      
    </View>
  );
}