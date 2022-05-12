// debug
import type { NextPage } from 'next'
import { useState } from 'react'
import { Button, H1, H2, Paragraph, Theme, ThemeName, YStack } from 'tamagui'

const Home: NextPage = () => {
  const [theme, setTheme] = useState<ThemeName>('light')

  return (
    <YStack padding="$6">
      <Button
        size="$6"
        onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        Change Theme
      </Button>
      <YStack>
        <Theme name={theme}>
          <DemoComponent />
          <Theme name="pink">
            <DemoComponent />
          </Theme>
        </Theme>
      </YStack>
    </YStack>
  )
}

function DemoComponent() {
  return (
    <>
      <YStack padding="$5" backgroundColor="$background" space="$2">
        <H1>Title</H1>
        <H2>We can fork any of these components</H2>
        <Paragraph fontWeight="800" size="$5">
          I've set the debug flag to true so you can see the extraction at work.
        </Paragraph>
        <Paragraph size="$5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>
        <Button>I pick up the theme</Button>
      </YStack>
    </>
  )
}

export default Home
