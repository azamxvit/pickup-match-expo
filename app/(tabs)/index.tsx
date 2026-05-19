import { Chip } from '@/components/shared/chip';
import { IconButton } from '@/components/shared/icon-button';
import { Screen } from '@/components/shared/screen';
import { ScreenHeader } from '@/components/shared/screen-header';
import { Text } from '@/components/shared/text';
import { GameCard } from '@/components/widgets/game-card';
import { HeroBanner } from '@/components/widgets/hero-banner';
import { SectionHeader } from '@/components/widgets/section-header';
import { formatDateHeader } from '@/lib/format';
import { games } from '@/lib/mock-data';
import { palette } from '@/constants/theme';
import { Fab } from '@/components/shared/fab';
import { Bell, Plus, Search } from 'lucide-react-native';
import { useMemo } from 'react';
import { View } from 'react-native';

/**
 * Groups games by their local-day so the feed can render a date header
 * before each cluster of cards.
 */
function useGroupedGames() {
  return useMemo(() => {
    const buckets = new Map<string, typeof games>();
    [...games]
      .sort(
        (a, b) =>
          new Date(b.startsAt).getTime() - new Date(a.startsAt).getTime()
      )
      .forEach((game) => {
        const dayKey = game.startsAt.slice(0, 10);
        const list = buckets.get(dayKey) ?? [];
        list.push(game);
        buckets.set(dayKey, list);
      });
    return Array.from(buckets.entries());
  }, []);
}

export default function FeedScreen() {
  const groups = useGroupedGames();
  const city = 'Astana';

  return (
    <Screen
      scrollable
      scrollViewProps={{ contentContainerStyle: { paddingBottom: 120 } }}
      overlay={
        <Fab
          label="Создать игру"
          leadingIcon={<Plus size={18} color={palette.text} strokeWidth={2} />}
          containerClassName="right-5 bottom-6"
        />
      }
    >
      <ScreenHeader
        title={`Футбол в ${city}`}
        actions={
          <>
            <IconButton accessibilityLabel="Поиск">
              <Search size={22} color={palette.text} strokeWidth={1.8} />
            </IconButton>
            <IconButton accessibilityLabel="Уведомления">
              <Bell size={22} color={palette.text} strokeWidth={1.8} />
            </IconButton>
          </>
        }
        subtitle={
          <View className="flex-row">
            <Chip
              label="Радиус 100 км"
              variant="subtle"
              size="sm"
              withDropdown
              className="bg-transparent"
            />
          </View>
        }
      />

      <View className="px-5 mt-2">
        <HeroBanner
          title="Скоро мы объявим новые игры! Следи за обновлениями!"
          description="Хотите организовать игры или стать партнером и развивать футбол в вашем регионе?"
          ctaLabel="Создайте игру"
        />
      </View>

      <View className="px-5 mt-7">
        <SectionHeader title="Последние результаты" />
      </View>

      <View className="px-5 gap-3">
        {groups.map(([day, items]) => (
          <View key={day} className="gap-3">
            <Text className="text-body-md text-text-muted mt-1">
              {formatDateHeader(items[0].startsAt)}
            </Text>
            {items.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </View>
        ))}
      </View>
    </Screen>
  );
}
