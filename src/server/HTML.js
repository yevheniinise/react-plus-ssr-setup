import React from 'react';

const Html = ({ children, scripts }) => {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8"/>
      <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>React Plus SSR setup</title>
    </head>
    <body>
    <div id="root">{children}</div>
    {scripts.map((src) => {
      return <script key={src} src={src} />
    })}
    </body>
    </html>
  );
};

export default Html;
