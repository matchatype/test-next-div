import {BaseProvider} from 'baseui'
import App from 'next/app'
import {Provider as StyletronProvider} from 'styletron-react'

import {debug, styletron} from '../lib/styletron'
import {lightTheme} from '../config/theme'

class ThisApp extends App {
  render() {
    const {Component, pageProps} = this.props

    return (
      <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
        <BaseProvider theme={lightTheme}>
          <Component {...pageProps} />
        </BaseProvider>
      </StyletronProvider>
    )
  }
}

export default ThisApp
