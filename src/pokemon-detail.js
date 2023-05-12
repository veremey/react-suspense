import { fetchPokemon, suspensify } from './api'

import React from 'react'

let pokemon = suspensify(fetchPokemon(1))

export default function PokemonDetail() {
	return <div>{pokemon.read().name}</div>
}
