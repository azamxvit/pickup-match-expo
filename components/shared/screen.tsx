import { cn } from '@/lib/utils';
import * as React from 'react';
import { ScrollView, View, type ScrollViewProps } from 'react-native';
import { SafeAreaView, type Edge } from 'react-native-safe-area-context';

type ScreenProps = React.ComponentProps<typeof View> & {
  /** Adds `SafeAreaView` padding for the given edges. Defaults to `top`. */
  edges?: Edge[];
  /** If true, the screen contents will live inside a vertical ScrollView. */
  scrollable?: boolean;
  scrollViewProps?: ScrollViewProps;
  /** Rendered above the (possibly scrolling) content, e.g. floating action buttons. */
  overlay?: React.ReactNode;
};

/**
 * Top-level screen wrapper. Standardises:
 * - background colour
 * - safe-area padding (configurable per screen)
 * - optional scroll behaviour with sensible defaults
 * - an overlay slot for floating UI (FAB, toast, sheet handles)
 */
export function Screen({
  className,
  children,
  edges = ['top'],
  scrollable = false,
  scrollViewProps,
  overlay,
  ...rest
}: ScreenProps) {
  const content = scrollable ? (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 32 }}
      keyboardShouldPersistTaps="handled"
      {...scrollViewProps}
    >
      {children}
    </ScrollView>
  ) : (
    children
  );

  return (
    <SafeAreaView edges={edges} className="flex-1 bg-background">
      <View className={cn('flex-1 bg-background', className)} {...rest}>
        {content}
        {overlay}
      </View>
    </SafeAreaView>
  );
}
