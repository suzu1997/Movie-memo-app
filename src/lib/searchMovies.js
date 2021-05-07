import axios from "axios";

//映画情報を検索する関数
export const searchMovies = async(apiUrl) => {
  let movies = []; 
  axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded';
  await axios
    .get(apiUrl)
    .then((res) => {
      movies = res.data.results; //映画の情報が入ったオブジェクトの配列
    })
    .catch((err) => {
      console.log(err.response);
    })
  return movies;
};
