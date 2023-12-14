import { Hono } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers';

import { cors } from 'hono/cors';

import { UnsplashRouter } from './routers/UnsplashRouter';
import { GiphyRouter } from './routers/GiphyRouter';

import { process } from './utils/process';

type Bindings = {
  UNSPLASH_ACCESS_KEY: string;
  UNSPLASH_SECRET_KEY: string;
  GIPHY_API_KEY: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use('/static/*', serveStatic({ root: './' }));
app.use('/favicon.ico', serveStatic({ path: './favicon.ico' }));

app.get('/', (c) => {
  return c.html('<h1>hono-cf-test</h1>');
});

app.use('/api/*', cors());
app.use('/api/*', async (c, next) => {
  process.env.UNSPLASH_ACCESS_KEY = c.env.UNSPLASH_ACCESS_KEY;
  process.env.UNSPLASH_SECRET_KEY = c.env.UNSPLASH_SECRET_KEY;
  process.env.GIPHY_API_KEY = c.env.GIPHY_API_KEY;

  await next();
});

app.route('/api/unsplash', UnsplashRouter);
app.route('/api/giphy', GiphyRouter);

export default app;
