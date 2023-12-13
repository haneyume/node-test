import { CheerioCrawler, Dataset } from 'crawlee';
import fs from 'fs';

const crawler = new CheerioCrawler({
  async requestHandler({ $, request, enqueueLinks }) {
    const title = $('h1').text();
    const content = $('#chaptersShowContent').text();

    console.log(title);

    await Dataset.pushData({
      title,
      content,
    });

    const filePath = `output/${convertTitleToNumber(title)}.txt`;
    fs.writeFileSync(filePath, content);

    // await enqueueLinks();
  },
});

const pages = [
  // 1~10
  26, 37, 48, 59, 62, 63, 64, 65, 66, 27,
  // 11~20
  28, 29, 30, 31, 32, 33, 34, 35, 36, 38,
  // 21~30
  39, 40, 41, 42, 43, 44, 45, 46, 47, 49,
  // 31~40
  50, 51, 52, 53, 54, 55, 56, 57, 58, 60,
];

const novelUrls = pages.map(
  (page) => `https://bailushuyuan.org/novel/traditional/chapters/${page}`,
);

await crawler.run(novelUrls);

function convertTitleToNumber(title) {
  if (title.startsWith('第一章')) {
    return '01';
  } else if (title.startsWith('第二章')) {
    return '02';
  } else if (title.startsWith('第三章')) {
    return '03';
  } else if (title.startsWith('第四章')) {
    return '04';
  } else if (title.startsWith('第五章')) {
    return '05';
  } else if (title.startsWith('第六章')) {
    return '06';
  } else if (title.startsWith('第七章')) {
    return '07';
  } else if (title.startsWith('第八章')) {
    return '08';
  } else if (title.startsWith('第九章')) {
    return '09';
  } else if (title.startsWith('第十章')) {
    return '10';
  } else if (title.startsWith('第十一章')) {
    return '11';
  } else if (title.startsWith('第十二章')) {
    return '12';
  } else if (title.startsWith('第十三章')) {
    return '13';
  } else if (title.startsWith('第十四章')) {
    return '14';
  } else if (title.startsWith('第十五章')) {
    return '15';
  } else if (title.startsWith('第十六章')) {
    return '16';
  } else if (title.startsWith('第十七章')) {
    return '17';
  } else if (title.startsWith('第十八章')) {
    return '18';
  } else if (title.startsWith('第十九章')) {
    return '19';
  } else if (title.startsWith('第二十章')) {
    return '20';
  } else if (title.startsWith('第二十一章')) {
    return '21';
  } else if (title.startsWith('第二十二章')) {
    return '22';
  } else if (title.startsWith('第二十三章')) {
    return '23';
  } else if (title.startsWith('第二十四章')) {
    return '24';
  } else if (title.startsWith('第二十五章')) {
    return '25';
  } else if (title.startsWith('第二十六章')) {
    return '26';
  } else if (title.startsWith('第二十七章')) {
    return '27';
  } else if (title.startsWith('第二十八章')) {
    return '28';
  } else if (title.startsWith('第二十九章')) {
    return '29';
  } else if (title.startsWith('第三十章')) {
    return '30';
  } else if (title.startsWith('第三十一章')) {
    return '31';
  } else if (title.startsWith('第三十二章')) {
    return '32';
  } else if (title.startsWith('第三十三章')) {
    return '33';
  } else if (title.startsWith('第三十四章')) {
    return '34';
  } else if (title.startsWith('第三十五章')) {
    return '35';
  } else if (title.startsWith('第三十六章')) {
    return '36';
  } else if (title.startsWith('第三十七章')) {
    return '37';
  } else if (title.startsWith('第三十八章')) {
    return '38';
  } else if (title.startsWith('第三十九章')) {
    return '39';
  } else if (title.startsWith('第四十章')) {
    return '40';
  }
}
