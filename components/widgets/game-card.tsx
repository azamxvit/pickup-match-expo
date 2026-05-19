import { AvatarStack } from '@/components/shared/avatar-stack';
import { Badge } from '@/components/shared/badge';
import { Text } from '@/components/shared/text';
import { formatTime } from '@/lib/format';
import type { Game } from '@/lib/types';
import { BarChart3, Users } from 'lucide-react-native';
import { Image, Pressable, View } from 'react-native';

const STATUS_LABEL: Record<Game['status'], string> = {
  open: 'Открыта',
  live: 'Идёт сейчас',
  completed: 'Завершена',
  cancelled: 'Отменена',
};

const KIND_LABEL: Record<Game['kind'], string> = {
  pickup: 'Pickup',
  rating: 'Рейтинговая',
  tournament: 'Турнир',
  training: 'Тренировка',
};

const SKILL_LABEL: Record<Game['minSkill'], string> = {
  amateur: 'Любитель',
  rookie: 'Новичок',
  pro: 'Профи',
  expert: 'Эксперт',
  master: 'Мастер',
  legend: 'Легенда',
};

interface GameCardProps {
  game: Game;
  onPress?: () => void;
}

/**
 * Single feed card. Mirrors the layout from the home-screen mockup:
 *
 *   [icon] format / kind          [status]
 *   time   venue
 *   avatars +N   [skill chip]    [photo]
 */
export function GameCard({ game, onPress }: GameCardProps) {
  const extras = Math.max(0, game.registeredCount - 3);

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      className="card-base p-4 active:opacity-80"
    >
      <View className="flex-row justify-between items-start">
        <View className="flex-row gap-3 flex-shrink">
          <View className="w-12 h-12 bg-primary-soft rounded-full items-center justify-center">
            <Users size={22} color="#B49372" strokeWidth={1.8} />
          </View>
          <View className="justify-center">
            <Text className="text-h4 text-text">{`${game.format} игра`}</Text>
            <Text className="text-caption text-text-muted">
              {game.kind === 'rating'
                ? `${KIND_LABEL.pickup}, ${KIND_LABEL.rating}`
                : KIND_LABEL[game.kind]}
            </Text>
          </View>
        </View>

        <Badge tone="outline" label={STATUS_LABEL[game.status]} />
      </View>

      <View className="flex-row items-center gap-2 mt-4 mb-4">
        <Text className="text-h3 text-text">{formatTime(game.startsAt)}</Text>
        <Text className="text-body-md text-text-muted">
          {game.venue.name}, {game.venue.district}
        </Text>
      </View>

      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center gap-3 flex-shrink">
          <AvatarStack avatars={game.participants} max={3} size={32} />
          {extras > 0 ? (
            <Text className="text-caption text-text-muted font-bold">
              +{extras}
            </Text>
          ) : null}
          <Badge
            tone="outline"
            label={SKILL_LABEL[game.minSkill]}
            leadingIcon={<BarChart3 size={12} color="#EF4444" />}
          />
        </View>

        {game.venue.photo ? (
          <View className="w-[72px] h-[48px] rounded-lg overflow-hidden bg-surface">
            <Image
              source={{ uri: game.venue.photo }}
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>
        ) : (
          <View className="w-[72px] h-[48px] bg-surface rounded-lg" />
        )}
      </View>
    </Pressable>
  );
}
