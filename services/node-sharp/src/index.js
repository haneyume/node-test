const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function convertToJPG_16x9(files) {
  for (let i = 0; i < files.length; i++) {
    const inputFile = files[i];
    const outputFile =
      process.cwd() +
      '/assets/out/' +
      path.basename(inputFile, path.extname(inputFile)) +
      '.jpg';

    sharp(files[i])
      // .resize(1920, 1080)
      .resize(1280, 720)
      .jpeg({ quality: 60 })
      .toFile(outputFile, (err, info) => {
        console.log(err, info);
      });
  }
}

function convertToJPG(files) {
  for (let i = 0; i < files.length; i++) {
    const inputFile = files[i];
    const outputFile =
      process.cwd() +
      '/assets/out/' +
      path.basename(inputFile, path.extname(inputFile)) +
      '.jpg';

    sharp(files[i])
      .jpeg({ quality: 60 })
      .toFile(outputFile, (err, info) => {
        console.log(err, info);
      });
  }
}

function main() {
  // input
  {
    const inputFolder = process.cwd() + '/assets/input/';

    fs.readdir(inputFolder, (err, files) => {
      convertToJPG_16x9(files.map((file) => inputFolder + file));
    });
  }

  // input_room
  {
    const inputFolder = process.cwd() + '/assets/input_room/';

    fs.readdir(inputFolder, (err, files) => {
      convertToJPG_16x9(files.map((file) => inputFolder + file));
    });
  }

  // input2
  {
    const inputFolder = process.cwd() + '/assets/input2/';

    fs.readdir(inputFolder, (err, files) => {
      convertToJPG(files.map((file) => inputFolder + file));
    });
  }
}

main();
