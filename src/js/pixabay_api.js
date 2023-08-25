import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '39038799-173034ccb0f9f5a09a0dff079';

export async function fetchPhoto(q, page, perPage) {
  const url = `${URL}?key=${API_KEY}&q=${q}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal&safesearch=true`;
  const response = await axios.get(url);
  return response.data;
}
