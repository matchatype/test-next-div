import {dom} from '@fortawesome/fontawesome-svg-core'
import Document, {Head, Html, Main, NextScript} from 'next/document'

import {styletron} from '../lib/styletron'

export default class extends Document {
  static getInitialProps(context) {
    const page = context.renderPage(App => props => <App {...props} />)
    const stylesheets = styletron.getStylesheets() || []
    return {...page, stylesheets}
  }

  render() {
    // noinspection HtmlRequiredTitleElement
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{__html: sheet.css}}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs['data-hydrate']}
              key={i}
            />
          ))}
          <style>
            {`
            html,
            body,
            #__next {
              height: 100%;
              margin: 0;
              padding: 0;
            }
            ${dom.css()}
          `}
          </style>
          <link
            href="https://fonts.googleapis.com/css?family=Prompt:400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main id="test" />
          <NextScript />
        </body>
      </Html>
    )
  }
}
