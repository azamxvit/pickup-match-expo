import { Chip } from '@/components/shared/chip';
import { Fab } from '@/components/shared/fab';
import { IconButton } from '@/components/shared/icon-button';
import { Screen } from '@/components/shared/screen';
import { ScreenHeader } from '@/components/shared/screen-header';
import { palette } from '@/constants/theme';
import { venues } from '@/lib/mock-data';
import { useRouter } from 'expo-router';
import { ChevronLeft, MapPin, Plus } from 'lucide-react-native';
import { useState } from 'react';
import { View } from 'react-native';

/**
 * Placeholder map screen.
 *
 * The mockup shows a generic light-themed street grid with two
 * lozenge-shaped pins. Until we plug in a real map provider
 * (`expo-maps`, `react-native-maps`, or Mapbox), we render a stylised
 * placeholder so the surrounding chrome stays accurate.
 */
export default function MapScreen() {
  const router = useRouter();
  const [filter, setFilter] = useState<'Все форматы' | '5x5' | '6x6' | '7x7'>(
    'Все форматы'
  );

  return (
    <Screen
      overlay={
        <Fab
          label="Предложить площадку"
          leadingIcon={<Plus size={18} color={palette.text} strokeWidth={2} />}
          containerClassName="left-5 right-5 bottom-6 items-center"
          className="w-full justify-center"
        />
      }
    >
      <ScreenHeader
        title="Карта"
        centerTitle
        leading={
          <IconButton
            accessibilityLabel="Назад"
            onPress={() => router.canGoBack() && router.back()}
          >
            <ChevronLeft size={24} color={palette.text} />
          </IconButton>
        }
      />

      <View className="flex-1 relative bg-elevated">
        <View className="absolute top-3 left-5 z-10">
          <Chip
            label={filter}
            withDropdown
            variant="outline"
            onPress={() =>
              setFilter((curr) =>
                curr === 'Все форматы'
                  ? '5x5'
                  : curr === '5x5'
                  ? '6x6'
                  : curr === '6x6'
                  ? '7x7'
                  : 'Все форматы'
              )
            }
          />
        </View>

        <MapPlaceholder count={venues.length} />
      </View>
    </Screen>
  );
}

function MapPlaceholder({ count }: { count: number }) {
  return (
    <View className="flex-1 bg-elevated overflow-hidden">
      <View
        className="absolute inset-0"
        style={{
          backgroundColor: '#F4F1EC',
          opacity: 0.9,
        }}
      />
      <View
        className="absolute"
        style={{
          left: '8%',
          top: '20%',
          width: '70%',
          height: '50%',
          backgroundColor: '#DAE7C8',
          borderRadius: 80,
        }}
      />
      <View
        className="absolute"
        style={{
          left: '6%',
          bottom: '24%',
          width: '88%',
          height: 14,
          backgroundColor: '#BFD8EF',
          borderRadius: 8,
          transform: [{ rotate: '-6deg' }],
        }}
      />

      {Array.from({ length: count }).map((_, i) => (
        <View
          key={i}
          className="absolute items-center"
          style={{
            left: `${20 + i * 18}%`,
            top: `${30 + (i % 2) * 6}%`,
          }}
        >
          <View className="w-9 h-9 rounded-full bg-background border border-border items-center justify-center shadow-card">
            <MapPin size={18} color={palette.textMuted} />
          </View>
        </View>
      ))}
    </View>
  );
}
