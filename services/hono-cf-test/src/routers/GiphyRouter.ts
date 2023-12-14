import { Hono } from 'hono';

import { getGiphyGifs, getGiphyStickers } from '../controllers/GiphyController';

const router = new Hono();
export { router as GiphyRouter };

router.get('/gifs', async (c) => {
  const search: string = c.req.query('search') || '';

  const res = await getGiphyGifs(search, 0);

  return c.json(res);
});

router.get('/stickers', async (c) => {
  const search: string = c.req.query('search') || '';

  const res = await getGiphyStickers(search, 0);

  return c.json(res);
});
