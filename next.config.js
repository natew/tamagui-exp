/** @type {import('next').NextConfig} */
const { withTamagui } = require('@tamagui/next-plugin')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins(
  [
    withTamagui({
      config: './tamagui.config.ts',
      components: ['tamagui'],
      excludeReactNativeWebExports: [
        'Switch',
        'ProgressBar',
        'Picker',
        'Animated',
        'AnimatedFlatList',
        'VirtualizedList',
        'VirtualizedSectionList',
        'FlatList',
      ],
    }),
  ],
  {
    reactStrictMode: true,
  },
)
