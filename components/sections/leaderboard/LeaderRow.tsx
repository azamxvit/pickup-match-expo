import { Text } from '@/components/shared/text';
import { formatScoreDelta } from '@/lib/format';
import type { LeaderboardEntry } from '@/lib/types';
import { Image, View } from 'react-native';

export function LeaderRow({ entry }: { entry: LeaderboardEntry }) {
  return (
    <View className="flex-row items-center gap-3 py-3">
      <Text className="text-body-md text-text-muted w-6 text-center">
        {entry.rank}
      </Text>
      <View className="w-9 h-9 rounded-full bg-surface overflow-hidden">
        {entry.player.avatar ? (
          <Image
            source={{ uri: entry.player.avatar }}
            className="w-full h-full"
          />
        ) : null}
      </View>
      <Text className="text-body-md text-text flex-1" numberOfLines={1}>
        {entry.player.username}
      </Text>
      <Text className="text-body-md font-bold" style={{ color: '#22C55E' }}>
        {formatScoreDelta(entry.score)}
      </Text>
    </View>
  );
}
