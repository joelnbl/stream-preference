import axios from 'axios';

export const getMovies = async (): Promise<any> => {
    return await axios
    .get('https://api.themoviedb.org/3/movie/550?api_key=3fa4f2a58eedbd68b876a25ccbb46c2e')
    .then((res) => res.data.genres)
    .catch((err) => console.error(err));
};

// export const getPokemonDetails = (pokemon) => {
//   return axios.get(pokemon.url)
//   .then(res => res.data)
//   .catch((err) => console.error(err));
// }