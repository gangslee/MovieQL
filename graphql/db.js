export const people = [
  {
    name: 'gangslee',
    age: '26',
    gender: 'male',
    id: '1',
  },
  {
    name: 'gangslee222',
    age: '25',
    gender: 'female',
    id: '2',
  },
  {
    name: 'gangslee333',
    age: '23',
    gender: ' male',
    id: '3',
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};
