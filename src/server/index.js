import path from 'path';
import express from 'express';
import manifestHelpers from 'express-manifest-helpers';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';

import {configureStore} from '../shared/store';
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

app.use((req, res, next) => {
  req.store = configureStore();
  return next();
});

app.get('/', (req, res) => {

  res.send(
    '<!doctype html>' +
    renderToString(
      <Html scripts={[res.locals.assetPath('bundle.js')]}>
        <Provider store={req.store}>
          <App />
        </Provider>
      </Html>
    )
  );
});

app.listen(PORT, () => {
  console.log(`App is running: 🌎 http://localhost:${PORT}`);
});

