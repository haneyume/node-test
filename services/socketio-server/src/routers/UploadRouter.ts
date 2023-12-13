import express from 'express';
import multer from 'multer';

const router = express.Router();
export { router as UploadRouter };

const upload = multer({ dest: 'uploads/' });
const cpUpload = upload.fields([{ name: 'image', maxCount: 1 }]);

router.post('/upload', cpUpload, (req, res) => {
  console.log('files:', req.files);
  console.log('body:', req.body);

  res.json({ text: req.body.text });
});
