import ErrorBoundary from './error-boundary'
import React from 'react'
// const PokemonDetail = React.lazy(() => import('./pokemon-detail'))
const PokemonDetail = React.lazy(() => Promise.reject())
// app.js

export default function App() {
	return (
		<ErrorBoundary>
			<React.Suspense fallback='Loading ... '>
				<PokemonDetail />
			</React.Suspense>
		</ErrorBoundary>
	)
}
