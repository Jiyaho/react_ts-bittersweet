import axios from 'axios';

export async function fetchPosts() {
  axios.get(`${process.env.REACT_APP_HOST}/api/posting`).then((response) => response.data.reverse());
}
