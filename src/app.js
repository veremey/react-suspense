import ErrorBoundary from './error-boundary'
import React from 'react'
const PokemonDetail = React.lazy(() => import('./pokemon-detail'))

export default function App() {
	return (
		<ErrorBoundary>
			<React.Suspense fallback='Loading ... '>
				<PokemonDetail />
			</React.Suspense>
		</ErrorBoundary>
	)
}
