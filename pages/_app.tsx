import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Global, css } from '@emotion/react'
import {globalStyle} from 'styles/global.styles'

export default function App({ Component, pageProps }: AppProps) {
  return (    
  <>
  <Component {...pageProps} />
  </>
  )
}
