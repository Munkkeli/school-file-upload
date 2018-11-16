const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const cors = require('cors');

const app = express();

app.use(cors());

app.post('/upload', upload.single('file'), (req, res) => {
  console.log(`File "${req.file.originalname}" uploaded!`);
  return res.send({
    status: 'ok',
    url: `http://localhost:3000/file/${req.file.filename}`
  });
});

app.get('/file/:name', (req, res) => {
  return res.sendFile(__dirname + '/uploads/' + req.params.name);
});

app.listen(3000);
