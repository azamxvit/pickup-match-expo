import { Text } from '@/components/shared/text';
import { View } from 'react-native';

interface HeroBannerProps {
  title: string;
  description: string;
  ctaLabel: string;
  onCtaPress?: () => void;
}

/**
 * Dark "pitch" coloured promo card that lives at the top of the feed.
 * Mirrors the "Скоро мы объявим новые игры!" card from the mockup.
 */
export function HeroBanner({
  title,
  description,
  ctaLabel,
  onCtaPress,
}: HeroBannerProps) {
  return (
    <View className="w-full bg-brand-pitch rounded-3xl p-6">
      <Text className="text-h3 mb-3" style={{ color: '#FFFFFF' }}>
        {title}
      </Text>
      <Text className="text-body-md" style={{ color: 'rgba(255,255,255,0.78)' }}>
        {description}{' '}
        <Text
          onPress={onCtaPress}
          accessibilityRole="link"
          className="text-body-md font-bold underline"
          style={{ color: '#FFFFFF' }}
        >
          {ctaLabel}
        </Text>{' '}
        и начните!
      </Text>
    </View>
  );
}
