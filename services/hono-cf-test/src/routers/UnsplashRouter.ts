import { Hono } from 'hono';

import { getPhotos } from '../controllers/UnsplashController';

const router = new Hono();
export { router as UnsplashRouter };

router.get('/photos', async (c) => {
  const search: string = c.req.query('search') || '';

  const res = await getPhotos(search);

  return c.json(res);
});
