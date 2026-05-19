import { Text } from '@/components/shared/text';
import { cn } from '@/lib/utils';
import { formatScoreDelta } from '@/lib/format';
import type { LeaderboardEntry } from '@/lib/types';
import { Image, View } from 'react-native';

interface PodiumProps {
  entries: LeaderboardEntry[];
}

/**
 * Shows the top-3 ranked players in the classic 2-1-3 podium layout.
 * Heights and surfaces are derived from rank, so the centre column
 * (rank #1) is always visually dominant.
 */
export function Podium({ entries }: PodiumProps) {
  if (entries.length < 3) return null;
  const [first, second, third] = entries;

  return (
    <View className="px-5 flex-row items-end justify-center gap-2 mt-2">
      <PodiumColumn entry={second} variant="silver" height={170} />
      <PodiumColumn entry={first} variant="gold" height={200} highlighted />
      <PodiumColumn entry={third} variant="bronze" height={170} />
    </View>
  );
}

interface PodiumColumnProps {
  entry: LeaderboardEntry;
  variant: 'gold' | 'silver' | 'bronze';
  height: number;
  highlighted?: boolean;
}

const COLUMN_BG: Record<PodiumColumnProps['variant'], string> = {
  gold: 'bg-primary-soft',
  silver: 'bg-surface',
  bronze: 'bg-elevated',
};

function PodiumColumn({
  entry,
  variant,
  height,
  highlighted,
}: PodiumColumnProps) {
  return (
    <View
      className={cn(
        'flex-1 items-center rounded-2xl pt-3 pb-5 px-2',
        COLUMN_BG[variant],
        highlighted && 'shadow-card'
      )}
      style={{ height }}
    >
      <Wreath rank={entry.rank} />
      <View className="w-12 h-12 rounded-full bg-background border-2 border-background overflow-hidden mt-2">
        {entry.player.avatar ? (
          <Image
            source={{ uri: entry.player.avatar }}
            className="w-full h-full"
          />
        ) : null}
      </View>
      <Text
        className="text-body-md text-text font-bold mt-2"
        numberOfLines={1}
      >
        {entry.player.username}
      </Text>
      {entry.player.position ? (
        <Text className="text-caption text-text-muted">
          {entry.player.position}
        </Text>
      ) : null}
      <View className="flex-1" />
      <Text className="text-h3 font-bold" style={{ color: '#22C55E' }}>
        {formatScoreDelta(entry.score)}
      </Text>
    </View>
  );
}

function Wreath({ rank }: { rank: number }) {
  return (
    <View className="flex-row items-center gap-1">
      <Text style={{ fontSize: 14 }}>🌿</Text>
      <Text className="text-body-md text-text font-bold">{rank}</Text>
      <Text style={{ fontSize: 14, transform: [{ scaleX: -1 }] }}>🌿</Text>
    </View>
  );
}
