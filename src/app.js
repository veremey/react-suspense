import ErrorBoundary from './error-boundary'
import React from 'react'

const PokemonDetail = React.lazy(() => import('./pokemon-detail'))
const PokemonCollection = React.lazy(() => import('./pokemon-collection'))

export default function App() {
	return (
		<React.Suspense fallback='Loading ... '>
			<ErrorBoundary>
				<PokemonDetail />
				<React.Suspense fallback='Loading ... '>
					<PokemonCollection />
				</React.Suspense>
			</ErrorBoundary>
		</React.Suspense>
	)
}
