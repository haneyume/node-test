import { process } from '../utils/process';

const UNSPLASH_API_URL = 'https://api.unsplash.com';
const limit = 25;

export const getPhotos = async (search: string) => {
  const url =
    search === ''
      ? `${UNSPLASH_API_URL}/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&per_page=${limit}`
      : `${UNSPLASH_API_URL}/search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=${search}&per_page=${limit}`;

  const response = await fetch(url);

  let jsonData: any = await response.json();

  if (search === '') {
    jsonData = jsonData.map((item: any) => ({
      id: item.id,
      full: item.urls.full,
      regular: item.urls.regular,
      small: item.urls.small,
      thumb: item.urls.thumb,
    }));
  } else {
    jsonData = jsonData.results.map((item: any) => ({
      id: item.id,
      full: item.urls.full,
      regular: item.urls.regular,
      small: item.urls.small,
      thumb: item.urls.thumb,
    }));
  }

  return jsonData;
};
