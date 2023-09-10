import { useContext } from 'react'
import { MemoryContext } from '../contexts/Memory'

export const Score = ({ time, moves }) => {
	const { numOfPlayers, currentPlayer } = useContext(MemoryContext)
	return (
		<footer
			className={`score score-${numOfPlayers} ${
				numOfPlayers > 1 ? 'multiplayer' : ''
			}`}
		>
			{numOfPlayers === 1 && (
				<>
					<section className="score-indicador">
						<h4>Time</h4>
						<strong>
							{time.minutes}:
							{time.seconds < 10 ? `0${time.seconds}` : time.seconds}{' '}
						</strong>
					</section>
					<section className="score-indicador">
						<h4>Moves</h4>
						<strong>{moves}</strong>
					</section>
				</>
			)}

			{numOfPlayers > 1 &&
				moves.map((mov, player) => (
					<article
						key={player}
						className={`score-indicador ${
							player === currentPlayer ? 'active' : ''
						}`}
					>
						<h4>P{player + 1}</h4>
						<h4>Player {player + 1}</h4>
						<strong>{mov}</strong>
					</article>
				))}
		</footer>
	)
}
