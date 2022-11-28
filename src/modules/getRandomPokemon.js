const MIN_POKEMON = 1
const MAX_POKEMON = 151
const URL = `https://pokeapi.co/api/v2/pokemon/`
const MOVE_NUMBER = 3

const selectRandomMoves = (pokemonData) =>{
  const availableMoves = pokemonData.moves.map( moveData => moveData.move.name );
  const randomNumbers = []

  if(availableMoves.length < MOVE_NUMBER){
    return availableMoves
  }

  while(randomNumbers.length < MOVE_NUMBER){
    const randomIndex = Math.floor(Math.random() * availableMoves.length)
    if(!randomNumbers.includes(randomIndex)){
      randomNumbers.push(randomIndex)
    }
  }

  return randomNumbers.map((move) => availableMoves[move])
}

export const getRandomPokemon = async () =>{
  const randomNumber = Math.floor(Math.random() * MAX_POKEMON ) + MIN_POKEMON
  const request = await fetch(URL + randomNumber)
  const pokemonData = await request.json()

  const moves = selectRandomMoves(pokemonData)

  const sprites = {
    front: pokemonData.sprites.versions["generation-v"]["black-white"].animated.front_default,
    back: pokemonData.sprites.versions["generation-v"]["black-white"].animated.back_default
  }

  return ({
    life: pokemonData.base_experience,
    name: pokemonData.name,
    moves,
    sprites
    
  })
}