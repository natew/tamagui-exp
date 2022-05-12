import { color, radius, size, space, themes, zIndex } from '@tamagui/theme-base'
import { createFont, createTamagui, createTokens } from 'tamagui'

const fontSize = {
  0: 12,
  1: 13,
  2: 14,
  3: 15,
  4: 16,
  5: 18,
  6: 20,
  7: 24,
  8: 28,
  9: 34,
  10: 40,
}

// we can change themes for any component here

const font = createFont({
  family: 'Arial',
  letterSpacing: {
    0: 0,
  },
  size: fontSize,
  lineHeight: Object.fromEntries(
    Object.entries(fontSize).map(([k, v]) => [k, v * 1.4]),
  ),
  weight: {
    0: '400',
  },
})

const tokens = createTokens({
  size,
  space,
  zIndex,
  color,
  radius,
})

const config = createTamagui({
  defaultTheme: 'light',
  themes,
  tokens,
  fonts: {
    heading: font,
    body: font,
  },
  media: {
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
  },
})

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config
