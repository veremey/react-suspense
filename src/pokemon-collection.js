import { fetchPokemonCollection, suspensify } from './api'

import React from 'react'

const initialCollection = suspensify(fetchPokemonCollection())

export default function PokemonCollection() {
	return (
		<div>
			{initialCollection.read().results.map((pokemon) => (
				<li key={pokemon.name}>{pokemon.name}</li>
			))}
		</div>
	)
}
