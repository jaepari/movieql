import axios from "axios";
const BASE_URL = "https://yts.lt/api/v2";
const LIST_MOVIES_URL = `${BASE_URL}/list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}/movie_details.json`;
const SUGGESTIONS_URL = `${BASE_URL}/movie_suggestions.json`;

export const getMovies = async (limit, minimum_rating) => {
    const {
        data: {
            data: { movies }
        }
    } = await axios.get(LIST_MOVIES_URL, {
        params: {
            limit,
            minimum_rating
        }
    });

    return movies;
};

export const getMovieById = async movie_id => {
    const {
        data: {
            data: { movie }
        }
    } = await axios.get(MOVIE_DETAILS_URL, {
        params: {
            movie_id
        }
    });
    return movie;
};

export const getSuggestions = async movie_id => {
    const {
        data: {
            data: { movies }
        }
    } = await axios.get(SUGGESTIONS_URL, {
        params: {
            movie_id
        }
    });

    return movies;
};

// let movies = [
//     {
//         id: 0,
//         title: "Execution Squad",
//         rating: 7.1
//     },
//     {
//         id: 1,
//         title: "Beggars of Life",
//         rating: 7.7
//     },
//     {
//         id: 2,
//         title: "Buck Privates",
//         rating: 7.2
//     },
//     {
//         id: 3,
//         title: "Rigor Mortis",
//         rating: 6.3
//     },
//     {
//         id: 4,
//         title: "Strictly Business",
//         rating: 5.4
//     },
//     {
//         id: 5,
//         title: "In the Army Now",
//         rating: 4.9
//     },
//     {
//         id: 6,
//         title: "Head Full of Honey",
//         rating: 3.1
//     },
//     {
//         id: 7,
//         title: "The Chaperone",
//         rating: 6.6
//     },
//     {
//         id: 8,
//         title: "Vintage Tomorrows",
//         rating: 6.6
//     }
// ];

// export const getMovies = (limit, minimum_rating) => {
//     return movies;
// };

// export const getMovieById = id => {
//     const filteredMovie = movies.filter(movie => movie.id === id);
//     return filteredMovie[0];
// };

// export const addMovie = (title, rating) => {
//     const newMovie = {
//         id: movies.length + 1,
//         title,
//         rating
//     };
//     movies.push(newMovie);
//     return newMovie;
// };

// export const deleteMovie = id => {
//     const cleanedMovie = movies.filter(movie => movie.id !== id);
//     if (movies.length > cleanedMovie.length) {
//         movies = cleanedMovie;
//         return true;
//     } else {
//         return false;
//     }
// };
