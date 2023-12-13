import express from 'express';

const router = express.Router();
export { router as ApiRouter };

router.get('/health', (req, res) => {
  res.send('OK');
});

router.get('/version', (req, res) => {
  res.json({ version: process.env.VERSION });
});
