export const i18n = {
  defaultLocale: 'hy',
  locales: ['en', 'hy']
} as const

export type Locale = (typeof i18n)['locales'][number]
