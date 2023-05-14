import sleep from 'sleep-promise'

export const API_LINK = 'https://pokeapi.co/api/v2/pokemon/'

export const suspensify = (promise) => {
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

export const fetchPokemon = (id) =>
	fetch(`${API_LINK}${id}`).then((res) => res.json().then(sleep(1000)))

export function fetchPokemonCollection() {
	return fetch(`${API_LINK}`)
		.then((res) => res.json())
		.then(sleep(2000))
}
