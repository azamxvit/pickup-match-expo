import { IconButton } from '@/components/shared/icon-button';
import { Text } from '@/components/shared/text';
import { palette } from '@/constants/theme';
import { formatKzt } from '@/lib/format';
import type { PlayerProfile } from '@/lib/types';
import { Settings, Share2, Wallet } from 'lucide-react-native';
import { Image, View } from 'react-native';

interface ProfileHeaderProps {
  player: PlayerProfile;
}

/**
 * Top section of the profile screen: warm wood-coloured banner with
 * wallet pill on the top-left, three action buttons on the right, and
 * a circular avatar that overlaps the banner edge.
 */
export function ProfileHeader({ player }: ProfileHeaderProps) {
  return (
    <View className="w-full">
      <View
        className="h-[150px] mx-4 mt-2 rounded-2xl overflow-hidden"
        style={{ backgroundColor: '#C8A47A' }}
      >
        <View
          className="absolute inset-0"
          style={{
            backgroundColor: '#B58955',
            opacity: 0.35,
          }}
        />
        <View
          className="absolute"
          style={{
            top: 12,
            left: 12,
            right: 12,
            height: 6,
            borderRadius: 4,
            backgroundColor: 'rgba(255,255,255,0.35)',
          }}
        />
      </View>

      <View className="absolute top-6 left-7">
        <View className="flex-row items-center gap-2 bg-background border border-border rounded-pill px-3 py-1.5">
          <Wallet size={14} color={palette.text} />
          <Text className="text-caption font-bold text-text">
            {formatKzt(player.walletKzt)}
          </Text>
        </View>
      </View>

      <View className="absolute top-6 right-7 flex-row gap-2">
        <IconButton variant="outline">
          <Share2 size={16} color={palette.text} />
        </IconButton>
        <IconButton variant="outline">
          <Settings size={16} color={palette.text} />
        </IconButton>
      </View>

      <View className="items-center -mt-12">
        <View className="w-[104px] h-[104px] rounded-full overflow-hidden border-4 border-background bg-surface">
          {player.avatar ? (
            <Image
              source={{ uri: player.avatar }}
              className="w-full h-full"
            />
          ) : null}
        </View>
        <Text className="text-h2 text-text mt-3">{player.username}</Text>
      </View>
    </View>
  );
}
