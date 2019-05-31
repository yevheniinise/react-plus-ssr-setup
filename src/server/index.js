import path from 'path';
import express from 'express';
import manifestHelpers from 'express-manifest-helpers';
import React from 'react';
import {renderToString} from 'react-dom/server';

import paths from '../../config/paths';
import Html from './HTML';
import App from '../shared/App';

const app = express();
const PORT = process.env.PORT || 5005;

app.use('/static', express.static(path.join(paths.clientBuild, paths.publicPath)));
app.use('/favicon.ico', (req, res) => {
  res.send('');
});

const manifestPath = path.join(paths.clientBuild, paths.publicPath, 'manifest.json');

app.use(manifestHelpers({
  manifestPath
}));

app.get('/', (req, res) => {

  res.send(
    '<!doctype html>' +
    renderToString(
      <Html scripts={[res.locals.assetPath('bundle.js')]}>
        <App />
      </Html>
    )
  );
});

app.listen(PORT, () => {
  console.log(`App is running: 🌎 http://localhost:${PORT}`);
});

