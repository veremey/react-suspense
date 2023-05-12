import React, { useState, useTransition } from 'react'
import { fetchPokemon, suspensify } from './api'

import { DelaySpinner as Spinner } from './spinner'

let initialPokemon = suspensify(fetchPokemon(1))

export default function PokemonDetail() {
	const [pokemonResource, setPokemonResource] = useState(initialPokemon)
	const [isPending, startTransition] = useTransition()
	const pokemon = pokemonResource.read()

	return (
		<div>
			{pokemon.name} {isPending && <Spinner />}
			<br />
			<button
				type='button'
				onClick={() =>
					startTransition(() =>
						setPokemonResource(suspensify(fetchPokemon(pokemon.id + 1)))
					)
				}>
				Button
			</button>
		</div>
	)
}
