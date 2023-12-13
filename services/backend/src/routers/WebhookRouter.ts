import express from 'express';

const router = express.Router();
export { router as WebhookRouter };

router.post('/auth', (req, res) => {
  console.log('req.query', req.query);
  console.log('req.headers', req.headers);
  console.log('req.body', req.body);

  res.json({
    'X-Hasura-Role': 'user',
    'X-Hasura-User-Id': '1',
  });
});

router.post('/trigger', (req, res) => {
  console.log('req.query', req.query);
  console.log('req.headers', req.headers);
  console.log('req.body', req.body);

  res.json({ status: 'ok' });
});
