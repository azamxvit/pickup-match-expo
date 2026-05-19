import type {
  Game,
  LeaderboardEntry,
  PlayerProfile,
  PlayerSummary,
  Venue,
} from './types';

const avatar = (seed: string) =>
  `https://i.pravatar.cc/200?u=${encodeURIComponent(seed)}`;

export const venues: Venue[] = [
  {
    id: 'venue-english-school',
    name: 'English School',
    district: 'Есиль',
    city: 'Astana',
    lat: 51.1158,
    lng: 71.4304,
    surface: 'artificial',
    photo:
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'venue-neotech',
    name: 'Neotech',
    district: 'Есильский',
    city: 'Astana',
    lat: 51.1242,
    lng: 71.408,
    surface: 'artificial',
    photo:
      'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'venue-astana-arena',
    name: 'Astana Arena',
    district: 'Алматинский',
    city: 'Astana',
    lat: 51.108,
    lng: 71.4017,
    surface: 'grass',
    photo:
      'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=400&auto=format&fit=crop',
  },
];

export const players: PlayerSummary[] = Array.from({ length: 18 }).map(
  (_, i) => ({
    id: `player-${i}`,
    username: `player_${i}`,
    avatar: avatar(`player_${i}`),
    position: (['GK', 'DF', 'MF', 'FW'] as const)[i % 4],
  })
);

export const currentPlayer: PlayerProfile = {
  id: 'me',
  username: 'yersaiyn69',
  avatar: avatar('yersaiyn69'),
  position: 'MF',
  rankGlobal: 505,
  rankLocal: 19,
  rankCohort: 489,
  trustPercent: 49,
  winRatePercent: 44,
  wins: 7,
  draws: 6,
  losses: 9,
  goals: 5,
  assists: 1,
  walletKzt: 0,
  ratingDelta: 1.2,
  skillTier: 'pro',
};

export const games: Game[] = [
  {
    id: 'game-1',
    format: '6x6',
    kind: 'rating',
    status: 'completed',
    startsAt: '2026-07-16T20:45:00+05:00',
    venue: venues[0],
    registeredCount: 18,
    capacity: 18,
    participants: players.slice(0, 18),
    minSkill: 'legend',
  },
  {
    id: 'game-2',
    format: '5x5',
    kind: 'rating',
    status: 'completed',
    startsAt: '2026-07-13T20:45:00+05:00',
    venue: venues[1],
    registeredCount: 15,
    capacity: 15,
    participants: players.slice(0, 15),
    minSkill: 'legend',
  },
  {
    id: 'game-3',
    format: '5x5',
    kind: 'pickup',
    status: 'completed',
    startsAt: '2026-07-12T20:45:00+05:00',
    venue: venues[1],
    registeredCount: 10,
    capacity: 10,
    participants: players.slice(0, 10),
    minSkill: 'pro',
  },
  {
    id: 'game-4',
    format: '7x7',
    kind: 'pickup',
    status: 'open',
    startsAt: '2026-07-22T19:30:00+05:00',
    venue: venues[2],
    registeredCount: 9,
    capacity: 14,
    participants: players.slice(0, 9),
    minSkill: 'amateur',
    priceKzt: 3000,
  },
];

export const leaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    player: {
      id: 'lb-1',
      username: 'vashnev',
      avatar: avatar('vashnev'),
      position: 'FW',
    },
    score: 28.8,
    trend: 'up',
  },
  {
    rank: 2,
    player: {
      id: 'lb-2',
      username: 'romanbay',
      avatar: avatar('romanbay'),
      position: 'MF',
    },
    score: 28.8,
    trend: 'flat',
  },
  {
    rank: 3,
    player: {
      id: 'lb-3',
      username: 'dyussebaev',
      avatar: avatar('dyussebaev'),
      position: 'MF',
    },
    score: 28.8,
    trend: 'down',
  },
  {
    rank: 4,
    player: {
      id: 'lb-4',
      username: 'bronynosets',
      avatar: avatar('bronynosets'),
      position: 'DF',
    },
    score: 28.8,
    trend: 'up',
  },
  {
    rank: 5,
    player: {
      id: 'lb-5',
      username: 'ulykbek_s',
      avatar: avatar('ulykbek_s'),
      position: 'GK',
    },
    score: 17.2,
    trend: 'down',
  },
  {
    rank: 6,
    player: {
      id: 'lb-6',
      username: 'arman_k',
      avatar: avatar('arman_k'),
      position: 'FW',
    },
    score: 14.6,
    trend: 'up',
  },
  {
    rank: 7,
    player: {
      id: 'lb-7',
      username: 'didar',
      avatar: avatar('didar'),
      position: 'MF',
    },
    score: 12.9,
    trend: 'flat',
  },
];
