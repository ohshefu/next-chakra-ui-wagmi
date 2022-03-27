import { ChakraProvider } from '@chakra-ui/react'
import { Provider as WagmiProvider } from 'wagmi'

import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </WagmiProvider>
  )
}

export default MyApp
