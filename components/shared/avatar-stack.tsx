import { cn } from '@/lib/utils';
import { Image, View } from 'react-native';

interface AvatarStackProps {
  avatars: { id: string; uri?: string }[];
  /** How many avatars to render before showing a count. */
  max?: number;
  size?: number;
  className?: string;
}

/**
 * Visual cluster of overlapping circular avatars (used on game cards).
 *
 * Falls back to a coloured circle when an avatar URI is missing — keeps
 * the layout stable even when network images haven't loaded yet.
 */
export function AvatarStack({
  avatars,
  max = 3,
  size = 32,
  className,
}: AvatarStackProps) {
  const visible = avatars.slice(0, max);

  return (
    <View className={cn('flex-row', className)}>
      {visible.map((a, i) => (
        <View
          key={a.id}
          style={{
            width: size,
            height: size,
            marginLeft: i === 0 ? 0 : -size / 2.6,
            zIndex: visible.length - i,
          }}
          className="rounded-full border-2 border-background bg-surface overflow-hidden"
        >
          {a.uri ? (
            <Image source={{ uri: a.uri }} className="w-full h-full" />
          ) : null}
        </View>
      ))}
    </View>
  );
}
