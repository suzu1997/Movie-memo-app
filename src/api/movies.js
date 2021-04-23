import axios from 'axios';

// const apiUrl =
//   'https://api.themoviedb.org/3/search/movie?api_key=ad57d2dd7d865020bf69b242c5fa7428&language=ja&query=%E3%83%97%E3%83%A9%E3%83%80&page=1';

// const apiUrl2 = 'http://files.tmdb.org/p/exports/movie_ids_04_28_2017.json.gz';

//映画情報を取得するための関数
export const getMoviesData = (apiUrl) => {
  axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  axios
    .get(apiUrl)
    .then((res) => {
      const movies = res.data.results;  //映画の情報が入ったオブジェクト
      console.log(movies);
      
      return movies;
    })
    .catch((err) => {
      console.log(err);
    });
};
