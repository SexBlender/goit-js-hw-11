import axios from 'axios';

const API_KEY = '55520229-6b38dd18315a985816c1e4a23';

const serverApi = axios.create({
  baseURL: 'https://pixabay.com/api/',
});

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  return serverApi.get('', { params }).then(res => res.data);
}
