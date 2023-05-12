import React, { useState } from 'react'
import { fetchPokemon, suspensify } from './api'

let initialPokemon = suspensify(fetchPokemon(1))

export default function PokemonDetail() {
	const [pokemonResource, setPokemonResource] = useState(initialPokemon)
	const pokemon = pokemonResource.read()

	return (
		<div>
			{pokemon.name}
			<button
				type='button'
				onClick={() => setPokemonResource(suspensify(fetchPokemon(pokemon.id + 1)))}>
				Button
			</button>
		</div>
	)
}
