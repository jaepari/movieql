import {
    getMovies,
    getMovieById,
    addMovie,
    deleteMovie,
    getSuggestions
} from "./db";

const resolvers = {
    Query: {
        movies: (_, { limit, minimum_rating }) =>
            getMovies(limit, minimum_rating),
        movie: (_, { id }) => getMovieById(id),
        suggestions: (_, { id }) => getSuggestions(id)
    },
    Mutation: {
        addMovie: (_, { title, rating }) => addMovie(title, rating),
        deleteMovie: (_, { id }) => deleteMovie(id)
    }
};

export default resolvers;
