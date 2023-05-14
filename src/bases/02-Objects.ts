export const pokemonId = [1,20,35,17];

interface Pokemon {
  id: number,
  name: string,
  age?: number,
}

export const Charmander: Pokemon = {
  id: 1,
  name: 'optimus'
}

export const otro: Pokemon = {
  id: 2,
  name: 'megatron',
  age: 245
}

export const pokemones: Pokemon[] = [];

pokemones.push( Charmander, otro)

console.log(pokemones); 