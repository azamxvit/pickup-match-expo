/**
 * Domain models for the Pickup Match app.
 *
 * Keeping these in a single file makes it cheap to swap the local
 * mock dataset for a real Supabase query later — the components only
 * depend on the shape, not on where the data comes from.
 */

export type GameFormat = '5x5' | '6x6' | '7x7' | '8x8' | '11x11';

export type GameKind = 'pickup' | 'tournament' | 'training' | 'rating';

export type GameStatus = 'open' | 'live' | 'completed' | 'cancelled';

export type SkillTier =
  | 'amateur'
  | 'rookie'
  | 'pro'
  | 'expert'
  | 'master'
  | 'legend';

export interface Venue {
  id: string;
  name: string;
  district: string;
  city: string;
  lat: number;
  lng: number;
  surface: 'grass' | 'artificial' | 'indoor';
  photo?: string;
}

export interface PlayerSummary {
  id: string;
  username: string;
  avatar?: string;
  position?: 'GK' | 'DF' | 'MF' | 'FW';
}

export interface PlayerProfile extends PlayerSummary {
  rankGlobal: number;
  rankLocal: number;
  rankCohort: number;
  trustPercent: number;
  winRatePercent: number;
  wins: number;
  draws: number;
  losses: number;
  goals: number;
  assists: number;
  walletKzt: number;
  ratingDelta?: number;
  skillTier: SkillTier;
}

export interface Game {
  id: string;
  format: GameFormat;
  kind: GameKind;
  status: GameStatus;
  startsAt: string;
  venue: Venue;
  registeredCount: number;
  capacity: number;
  participants: PlayerSummary[];
  minSkill: SkillTier;
  organizer?: PlayerSummary;
  priceKzt?: number;
}

export interface LeaderboardEntry {
  rank: number;
  player: PlayerSummary;
  score: number;
  trend: 'up' | 'down' | 'flat';
}
