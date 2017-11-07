const heroes = [
  {
    id: 1,
    name: 'Magneta',
  },
  {
    id: 2,
    name: 'Bombosta',
  },
  {
    id: 3,
    name: 'Celerios',
  },
  {
    id: 4,
    name: 'Rania',
  },
];

export default function heroesReducer(prevState = heroes, action) {
  if (action.type === 'UPDATE_HEROES') { return action.payload.reverse(); }
  return prevState;
}
