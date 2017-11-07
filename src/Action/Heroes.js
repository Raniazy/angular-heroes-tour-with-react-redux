export function updateHeroesAction(heroes) {
  return {
    type: 'UPDATE_HEROES',
    payload: heroes,
  };
}


export function addHero(hero, heroes) {
  const lastId = heroes.length;
  const newHeroes = Object.assign({}, {
    heroes: [
      ...heroes,
      {
        id: lastId + 1,
        name: hero.name,
      },
    ] });
  return (dispatch) => {
    dispatch(updateHeroesAction(newHeroes.heroes));
  };
}
