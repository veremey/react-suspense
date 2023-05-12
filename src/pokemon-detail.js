import React from 'react'
const API_LINK = 'https://pokeapi.co/api/v2/pokemon/1'

function suspensify(promise) {
	let status = 'pending'
	let result
	let suspender = promise.then(
		(response) => {
			status = 'success'
			result = response
		},
		(error) => {
			status = 'error'
			result = error
		}
	)

	return {
		read() {
			if (status === 'pending') {
				throw suspender
			}
			if (status === 'error') {
				throw result
			}
			if (status === 'success') {
				return result
			}
		},
	}
}

let pokemon = suspensify(fetch(API_LINK).then((res) => res.json()))

export default function PokemonDetail() {
	return <div>{pokemon.read().name}</div>
}
