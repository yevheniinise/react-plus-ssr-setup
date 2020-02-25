import React from 'react'

const Html = ({children, scripts, styles, helmetContext}) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        {styles.map(href => {
          return <link key={href} rel="stylesheet" type="text/css" href={href} />
        })}
        {helmetContext.meta.toComponent()}
        {helmetContext.title.toComponent()}
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{__html: children}} />
        {scripts.map(src => {
          return <script key={src} src={src} />
        })}
      </body>
    </html>
  )
}

export default Html
