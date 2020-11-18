const person = {
  name: 'gangslee',
  age: '26',
  gender: 'male',
};

const resolvers = {
  Query: {
    person: () => person,
  },
};

export default resolvers;
