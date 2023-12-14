import { process } from '../utils/process';

const GIPHY_URL = 'https://api.giphy.com/v1';
const limit = 25;
const lang = 'en';

export const getGiphyGifs = async (search: string, offset: number) => {
  const url =
    search === ''
      ? `${GIPHY_URL}/gifs/trending?api_key=${process.env.GIPHY_API_KEY}&limit=${limit}&offset=${offset}&rating=g`
      : `${GIPHY_URL}/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${search}&limit=${limit}&offset=${offset}&rating=g&lang=${lang}`;

  const response = await fetch(url);

  let jsonData: any = await response.json();

  jsonData = jsonData.data.map((item: any) => ({
    id: item.id,
    original: item.images.original.url,
    fixed_width: item.images.fixed_width.url,
    fixed_width_small: item.images.fixed_width_small.url,
  }));

  return jsonData;
};

export const getGiphyStickers = async (search: string, offset: number) => {
  const url =
    search === ''
      ? `${GIPHY_URL}/stickers/trending?api_key=${process.env.GIPHY_API_KEY}&limit=${limit}&offset=${offset}&rating=g`
      : `${GIPHY_URL}/stickers/search?api_key=${process.env.GIPHY_API_KEY}&q=${search}&limit=${limit}&offset=${offset}&rating=g&lang=${lang}`;

  const response = await fetch(url);

  let jsonData: any = await response.json();

  jsonData = jsonData.data.map((item: any) => ({
    id: item.id,
    original: item.images.original.url,
    fixed_width: item.images.fixed_width.url,
    fixed_width_small: item.images.fixed_width_small.url,
  }));

  return jsonData;
};
