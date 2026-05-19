/**
 * Lightweight locale-aware formatters.
 *
 * Avoids pulling in `date-fns` or `luxon` for now — `Intl.DateTimeFormat`
 * is bundled with Hermes/JSC and is sufficient for the surface area the
 * app currently shows.
 */

const SHORT_WEEKDAY: Record<string, string> = {
  Mon: 'Пн',
  Tue: 'Вт',
  Wed: 'Ср',
  Thu: 'Чт',
  Fri: 'Пт',
  Sat: 'Сб',
  Sun: 'Вс',
};

export function formatDateHeader(iso: string, locale = 'ru-RU'): string {
  const date = new Date(iso);
  const day = date.getDate();
  const month = new Intl.DateTimeFormat(locale, { month: 'long' }).format(date);
  const weekdayEn = new Intl.DateTimeFormat('en-US', { weekday: 'short' })
    .format(date)
    .slice(0, 3);
  const weekdayRu = SHORT_WEEKDAY[weekdayEn] ?? weekdayEn;
  return `${day} ${month}, ${weekdayRu}`;
}

export function formatTime(iso: string): string {
  const date = new Date(iso);
  return new Intl.DateTimeFormat('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date);
}

export function formatKzt(amount: number): string {
  return `${new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)} KZT`;
}

export function formatScoreDelta(score: number): string {
  const sign = score > 0 ? '+' : score < 0 ? '−' : '';
  return `${sign}${Math.abs(score).toFixed(1)}`;
}
