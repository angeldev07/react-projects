import { Board } from './components/Game/Board'
import { Header } from './components/Game/Header'
import { MemoryContext } from './components/contexts/Memory'
import { useContext } from 'react'
import { Screen } from './components/setupGame/Screen'

export const App = () => {
	const { isPlaying } = useContext(MemoryContext)
	return (
		<main>
			{isPlaying ? (
				<section className='game'>
					<Header />
					<Board />
				</section>
			) : (
				<Screen />
			)}
		</main>
	)
}
