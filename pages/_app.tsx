import type { AppProps } from 'next/app'
import '@tamagui/core/reset.css'
import Tamagui from '../tamagui.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Tamagui.Provider injectCSS defaultTheme="light">
      <Component {...pageProps} />
    </Tamagui.Provider>
  )
}

export default MyApp
