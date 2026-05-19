import { Chip } from '@/components/shared/chip';
import { Screen } from '@/components/shared/screen';
import { ScreenHeader } from '@/components/shared/screen-header';
import { Segmented } from '@/components/shared/segmented';
import { Text } from '@/components/shared/text';
import { LeaderRow } from '@/components/sections/leaderboard/LeaderRow';
import { Podium } from '@/components/sections/leaderboard/Podium';
import { leaderboard } from '@/lib/mock-data';
import { palette } from '@/constants/theme';
import { ChevronRight, Trophy } from 'lucide-react-native';
import { useMemo, useState } from 'react';
import { Pressable, View } from 'react-native';

type Scope = 'players' | 'teams';

export default function LeaderboardScreen() {
  const [scope, setScope] = useState<Scope>('players');
  const [format, setFormat] = useState<'6x6' | '5x5' | '7x7'>('6x6');
  const [metric, setMetric] = useState<'PBX' | 'Голы' | 'Передачи'>('PBX');
  const [city, setCity] = useState<'Almaty' | 'Astana' | 'Shymkent'>('Almaty');
  const [period, setPeriod] = useState<'Послед...' | 'Месяц' | 'Сезон'>(
    'Послед...'
  );

  const top3 = useMemo(() => leaderboard.slice(0, 3), []);
  const rest = useMemo(() => leaderboard.slice(3), []);

  return (
    <Screen
      scrollable
      scrollViewProps={{
        contentContainerStyle: { paddingBottom: 140 },
      }}
      overlay={<ParticipateCta />}
    >
      <ScreenHeader title="Лидерборд" centerTitle />

      <View className="px-5 mt-2">
        <Segmented
          value={scope}
          onChange={setScope}
          options={[
            { value: 'players', label: 'Игроки' },
            { value: 'teams', label: 'Команды' },
          ]}
        />
      </View>

      <View className="flex-row gap-2 px-5 mt-5">
        <Chip
          label={format}
          withDropdown
          variant="subtle"
          onPress={() =>
            setFormat((curr) => (curr === '6x6' ? '5x5' : curr === '5x5' ? '7x7' : '6x6'))
          }
        />
        <Chip
          label={metric}
          withDropdown
          variant="subtle"
          onPress={() =>
            setMetric((curr) => (curr === 'PBX' ? 'Голы' : curr === 'Голы' ? 'Передачи' : 'PBX'))
          }
        />
        <Chip
          label={city}
          withDropdown
          variant="subtle"
          onPress={() =>
            setCity((curr) => (curr === 'Almaty' ? 'Astana' : curr === 'Astana' ? 'Shymkent' : 'Almaty'))
          }
        />
        <Chip
          label={period}
          withDropdown
          variant="subtle"
          onPress={() =>
            setPeriod((curr) => (curr === 'Послед...' ? 'Месяц' : curr === 'Месяц' ? 'Сезон' : 'Послед...'))
          }
        />
      </View>

      <View className="px-5 mt-4">
        <View
          className="rounded-xl px-4 py-3"
          style={{ backgroundColor: '#FFF7DC' }}
        >
          <Text className="text-body-md text-text">
            Этот рейтинг отражает только игры, сыгранные в выбранном городе.
          </Text>
        </View>
      </View>

      <View className="mt-6">
        <Podium entries={top3} />
      </View>

      <View className="px-5 mt-6">
        {rest.map((entry, index) => (
          <View key={entry.player.id}>
            {index > 0 ? <View className="h-px bg-border" /> : null}
            <LeaderRow entry={entry} />
          </View>
        ))}
      </View>
    </Screen>
  );
}

function ParticipateCta() {
  return (
    <View className="absolute left-5 right-5 bottom-6">
      <Pressable
        accessibilityRole="button"
        className="flex-row items-center gap-3 px-4 py-4 rounded-2xl bg-card border border-border active:opacity-80"
        style={{
          shadowColor: '#0F172A',
          shadowOpacity: 0.12,
          shadowRadius: 16,
          shadowOffset: { width: 0, height: 8 },
          elevation: 4,
        }}
      >
        <View className="w-9 h-9 rounded-full bg-primary-soft items-center justify-center">
          <Trophy size={18} color={palette.primary} />
        </View>
        <View className="flex-1">
          <Text className="text-body-md font-bold text-text">
            Участвовать в рейтинге
          </Text>
          <Text className="text-caption text-text-muted">
            Заполните профиль
          </Text>
        </View>
        <ChevronRight size={18} color={palette.textMuted} />
      </Pressable>
    </View>
  );
}
