const express = require('express');
const tesseract = require('node-tesseract-ocr');
// const reader = new window.FileReader();
const Tesseract = require('tesseract.js');

const config = {
  lang: 'eng',
  oem: 1,
  psm: 3,
};

const router = express.Router();

function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new global.FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

router.post('/get_text', (req, res) => {
  const img = req.body.data;

  Tesseract.recognize(img, 'eng', { logger: (m) => console.log(m) }).then(
    ({ data: { text } }) => {
      console.log(text);
    }
  );
  // console.log('img', img);

  // fetch(img)
  //   .then((res) => res.blob())
  //   .then(blobToBase64)
  //   .then((res) => (imgData = res));

  // tesseract
  //   .recognize(img, config)
  //   .then((text) => {
  //     console.log('Result:', text);
  //     res.status(200).send(text);
  //   })
  //   .catch((error) => {
  //     console.log(error.message);
  //     res.status(500).send(error);
  //   });
});

module.exports = router;
