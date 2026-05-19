import { Chip } from '@/components/shared/chip';
import { Text } from '@/components/shared/text';
import { palette } from '@/constants/theme';
import type { PlayerProfile } from '@/lib/types';
import { BarChart3, Footprints, Goal, ShieldCheck } from 'lucide-react-native';
import { useState } from 'react';
import { View } from 'react-native';

interface ProfileStatsProps {
  player: PlayerProfile;
}

/**
 * The "Производительность" block.
 *
 * Layout mirrors the mockup exactly:
 *   [ PBX Rank · Global · Local ]   [ Trust % ]
 *   [          Win-rate            ] [W][D][L]
 *   [ Goals ]                       [ Assists ]
 */
export function ProfileStats({ player }: ProfileStatsProps) {
  const [format, setFormat] = useState<'5x5' | 'all'>('5x5');

  return (
    <View className="px-4 mt-6 gap-4">
      <Text className="text-h2 text-text">Производительность</Text>

      <View className="flex-row gap-2">
        <Chip
          label="5x5"
          selected={format === '5x5'}
          variant="soft"
          onPress={() => setFormat('5x5')}
        />
        <Chip
          label="Общее"
          selected={format === 'all'}
          variant="outline"
          onPress={() => setFormat('all')}
        />
      </View>

      <View className="flex-row gap-3">
        <View className="flex-[3] bg-surface p-4 rounded-2xl">
          <View className="flex-row items-center gap-2 mb-3">
            <BarChart3 size={14} color={palette.textMuted} />
            <Text className="text-caption text-text-muted">PBX Rank</Text>
          </View>
          <View className="flex-row items-end justify-between">
            <View>
              <Text className="text-h1 text-text">{player.rankCohort}</Text>
            </View>
            <View className="items-center">
              <Text className="text-body-md text-text font-bold">
                {player.rankGlobal}
              </Text>
              <Text className="text-caption text-text-muted">Глобаль...</Text>
            </View>
            <View className="items-center">
              <Text className="text-body-md text-text font-bold">
                {player.rankLocal}
              </Text>
              <Text className="text-caption text-text-muted">Локаль...</Text>
            </View>
          </View>
        </View>

        <View className="flex-[2] bg-primary-soft p-4 rounded-2xl items-center justify-center">
          <View className="flex-row items-center gap-2">
            <ShieldCheck size={16} color={palette.primary} />
            <Text className="text-h1 text-text">{player.trustPercent}%</Text>
          </View>
          <Text className="text-caption text-text-muted text-center mt-1">
            Уровень доверия
          </Text>
        </View>
      </View>

      <View className="bg-surface p-4 rounded-2xl flex-row items-center justify-between">
        <View>
          <Text className="text-caption text-text-muted mb-1">
            Процент побед
          </Text>
          <Text className="text-h1 text-text">{player.winRatePercent}%</Text>
        </View>
        <View className="flex-row gap-2">
          <Pill tone="success" letter="W" value={player.wins} />
          <Pill tone="warning" letter="D" value={player.draws} />
          <Pill tone="danger" letter="L" value={player.losses} />
        </View>
      </View>

      <View className="flex-row gap-3">
        <View className="flex-1 bg-surface p-4 rounded-2xl">
          <Goal size={18} color={palette.textMuted} />
          <Text className="text-h2 text-text mt-2">{player.goals}</Text>
          <Text className="text-caption text-text-muted mt-1">Голы</Text>
        </View>
        <View className="flex-1 bg-surface p-4 rounded-2xl">
          <Footprints size={18} color={palette.textMuted} />
          <Text className="text-h2 text-text mt-2">{player.assists}</Text>
          <Text className="text-caption text-text-muted mt-1">Передачи</Text>
        </View>
      </View>
    </View>
  );
}

function Pill({
  tone,
  letter,
  value,
}: {
  tone: 'success' | 'warning' | 'danger';
  letter: string;
  value: number;
}) {
  const styles: Record<
    'success' | 'warning' | 'danger',
    { bg: string; fg: string }
  > = {
    success: { bg: '#DCFCE7', fg: '#16A34A' },
    warning: { bg: '#FEF3C7', fg: '#D97706' },
    danger: { bg: '#FEE2E2', fg: '#DC2626' },
  };
  const s = styles[tone];
  return (
    <View
      className="flex-row items-center gap-1 px-2.5 py-1.5 rounded-md"
      style={{ backgroundColor: s.bg }}
    >
      <Text className="font-bold" style={{ color: s.fg }}>
        {letter}
      </Text>
      <Text className="text-text font-bold">{value}</Text>
    </View>
  );
}
