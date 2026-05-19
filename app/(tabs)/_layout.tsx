import { palette } from '@/constants/theme';
import { Tabs } from 'expo-router';
import { BarChart3, Map as MapIcon, User, Volleyball } from 'lucide-react-native';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: palette.primary,
        tabBarInactiveTintColor: palette.textMuted,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: palette.background,
          borderTopColor: palette.border,
          borderTopWidth: Platform.OS === 'ios' ? 0.5 : 1,
          height: Platform.OS === 'ios' ? 84 : 64,
          paddingTop: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Игры',
          tabBarIcon: ({ color }) => (
            <Volleyball size={26} color={color} strokeWidth={1.6} />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: 'Карта',
          tabBarIcon: ({ color }) => (
            <MapIcon size={26} color={color} strokeWidth={1.6} />
          ),
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: 'Лидерборд',
          tabBarIcon: ({ color }) => (
            <BarChart3 size={26} color={color} strokeWidth={1.6} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Профиль',
          tabBarIcon: ({ color }) => (
            <User size={26} color={color} strokeWidth={1.6} />
          ),
        }}
      />
    </Tabs>
  );
}
