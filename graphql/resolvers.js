import { getById, getMovies } from './db';

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation:{
    addMovie:(_, {name, scroe})=>
  }
};

export default resolvers;
