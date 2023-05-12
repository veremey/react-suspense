import ErrorBoundary from './error-boundary'
import React from 'react'
// const PokemonDetail = React.lazy(() => import('./pokemon-detail'))
const PokemonDetail = React.lazy(
	() =>
		new Promise((resolve) =>
			setTimeout(resolve({ default: () => <div>[ Fake ] Pokemon</div> }), 1000)
		)
)

// promises statuses works diferent
// resolve  || data module inside
// reject
// pending

export default function App() {
	return (
		<ErrorBoundary>
			<React.Suspense fallback='Loading ... '>
				<PokemonDetail />
			</React.Suspense>
		</ErrorBoundary>
	)
}
